# Remaking a Hypixel Classic: Fill in the Wall

### Update, November 13, 2025

The server has been closed. Thank you all for playing!

### Update, March 12, 2025

A public, on-demand server of Fill in the Wall has been released! The IP is `fillinthewall.ddns.net`. At the time of writing this, the Minecraft version is 1.21.4, but it will continually be updated to the latest version.

More content aimed at introducing longer-term gameplay/levelling goals will be released in the future. Please check it out at your own leisure!

<img src="/assets/fitw/original.png" alt="original game"/>

This is Hole in the Wall, a minigame on the Hypixel Network. 
It seems to take inspiration from a strange Japanese TV show called [Brain Wall](https://en.wikipedia.org/wiki/Brain_Wall) where you fit your body through holes in incoming walls, but changed to where you fit blocks in the holes instead.

<small>(Hypixel's version isn't to be confused with Minecraft Championship Island, or any other replica that involves fitting your player model into a hole.)</small>

It's quite easy to pick up, and was really fun to play, but I felt the game was kind of dated. Hypixel is still using a 9-year old version of Minecraft, which really holds back the potential on their games. After seeing some of my friends make website versions of Hole in the Wall, I decided I wanted to extend the game as far as it could go.

In March 2024 I would hear about a hackathon happening at my University named HooHacks. While I could have joined a team, I decided to just use this hackathon as an excuse to start on the project. I worked on it for the entire day in my dorm room, and stayed up only until around 1-2am (which isn't too bad).

<img src="/assets/fitw/early.png" alt="early version"/>

*<small>An early version of the project that I submitted to the hackathon</small>*

Over the past summer I spent time constantly adding more features, mechanics, modes, basically anything I could think of.
I finished up the project and let some friends onto the server to record perhaps one of my favorite videos to date:

<iframe width="560" height="315" src="https://www.youtube.com/embed/ARJ5J_cZsdk?si=nme53ofVDjayovIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Here are some of the most technical parts of the project!

## Moving Walls

<img src="/assets/fitw/wall.gif" alt="smooth walls">

Minecraft 1.19.x introduced Display Entities, which are purely for displaying customizable block textures, items, and text. Most importantly, these entities can be linearly transformed, and they allow for client-side interpolation between states.

This means it's possible to make a wall out of display entities that animates smoothly instead of snappy, Tetris-like movement.

My initial plan during the hackathon to make this work was to spawn block display entities at the end of the queue, wait a few ticks (due to some jank I didn't have under control), set their interpolation duration to the time the player has to fill in the wall, and tell the entities to translate their position to the playing field.

This sure worked, but there were several issues with the system:
- Having to spawn in the entities beforehand can be a big problem in the future
- The system sometimes had walls that would instantly teleport to the playing field which was unacceptable
- Translating the blocks using transforms would displace the entity's actual location from where it currently is visible

There was actually a way better solution available, which I discovered after the hackathon, which was just by teleporting the entities at a constant rate.

Usually teleportation can make movement look very jagged, but display entities can actually be told to interpolate between the start and end positions. 
In the end, I was teleporting the display entities every 5 ticks, and calculating where the entities need to go by adding a direction vector with the proper magnitude to their initial locations, which worked fine.

### Spinning Walls

<img src="/assets/fitw/spin.gif" alt="spinning walls">

If you watched the video I posted, you might have noticed that the wall blocks *s p i n*.
I implemented this pretty early in development - It's done by setting the yaw of the target locations to increment every tick. I took it from this video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/bwPWfUbcZxE?si=Legj9XtD3xI0EhsG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

An internal hurdle that I had to overcome with the spinning was the fact that this animation animates every tick, while the walls normally teleport every 5 ticks. Which means I had to change the "animation rate" on the fly. To do this, I:

- Set the teleport interpolation duration to 0 for all wall entities (make any teleports instant)
- "Snap" the entities to their proper location by calculating their proper location, then teleporting them..
- Reset my internal timer that controls when the server teleports the entities
- Set the teleport interpolation duration to the target interpolation duration for all wall entities

...all in a single tick. It's easier said than done.

In the process of developing this, my friend TrollyLoki discovered a [strange bug](https://bugs.mojang.com/browse/MC-272599) where display entities would suddenly slow down on the client-side if their interpolation duration was set to high values (like 50)
He theorized that it was due to redundant teleport packets that work fine for most entities, but not displays!

## Effects

### Petal Particles

<img src="/assets/fitw/petals.gif" alt="petal frenzy">

Towards the end of my Calculus 2 class we were learning about polar equations.
I was pretty fascinated by them when I found out they were useful for mathematically creating petal-like shapes...
so I decided to implement them as effects for this project.

Here's a code snippet:

```java
private static void spawnParticleAlongPetal(int radius, Location location, Vector xVector, Color dustColor, int coeff, int theta, float size) {
    double r = radius * Math.sin(coeff * Math.toRadians(theta));
    Location spawnLocation = location.clone()
            .add(xVector.clone().multiply(r * Math.cos(Math.toRadians(theta))))
            .add(0, r * Math.sin(Math.toRadians(theta)), 0);
    location.getWorld().spawnParticle(Particle.DUST, spawnLocation,
            1, new Particle.DustOptions(dustColor, size));
}

private static void regularPetals(int petals, int radius, Location location, Vector xVector, Color dustColor) {
    if (petals < 3) return;
    int coeff;
    int thetaMultplier;
    if (petals % 2 == 0) {
        coeff = petals / 2;
        thetaMultplier = 2;
    } else {
        coeff = petals;
        thetaMultplier = 1;
    }
    for (int theta = 0; theta < 180 * thetaMultplier; theta++) {
        spawnParticleAlongPetal(radius, location, xVector, dustColor, coeff, theta, 1.5f);
    }
}
```

The polar equation is rather simple, just being `r = size * sin(cθ)` where c is some constant.
c corresponds with how many petals form, which has different properties depending on whether it's even or not.

### Falling Blocks

<img src="/assets/fitw/fallingblocks.gif" alt="falling blocks">

*<small>"why are there command blocks falling out of the sky???"</small>*

This is done with block display entities. 

- First, the block is rotated randomly.
- Internally a task keeps track of its "velocity" (blocks per second), and increases it every tick by a constant amount (an acceleration)
- Every tick the block is teleported straight downwards by `velocity/20` blocks, and the block interpolates for a smooth animation.

Simple!

### Torch Geysers

<img src="/assets/fitw/flame.gif" alt="torch geyser">

I developed this effect separately on my test server using [Pocketknife](https://github.com/Arti-Dev/Pocketknife), my experiment testing plugin.

The geyser is made out of three display entities moving together: a fence, a hopper, and a flame that only activates once the torch has reached its peak height.

The physics work the same way as the falling blocks above, but are applied differently. There are three phases:
1. The torch is being accelerated upwards for 10 ticks or up until the water trail hits a solid block
2. Torch stops upward acceleration and starts downwards acceleration
3. Water stops rising and goes down at a linear speed, while the torch is now in free fall.

Once the torch's velocity goes from positive to negative, the torch is lit.

This effect appears when a wall is perfect cleared in the finals. If you perfect clear multiple walls in a row, you get this really cool (but loud) wave effect.

<img src="/assets/fitw/flamewave.gif" alt="flame wave">

## Hole generation algorithm

I wasn't going to spend time trying to reverse-engineer how Hypixel's hole generation algorithm worked, so I made my own.

First, it's important to define how I store the holes in walls. It's a Set of coordinate ordered pairs (we'll call this H), in which the bottom-left corner is (0,0).

The hole generation algorithm takes two primary arguments:
- Amount of random holes to insert (r)
- Amount of connected holes to insert (c)

To insert a random hole, the algorithm first takes the set of all possible ordered pairs (U) and removes all existing holes (U \ H),
then selects r random ordered pairs to add as new holes, removing them from the set every time (to ensure no repeats)

Then we start adding connected holes, which are holes that are connected to existing holes, either horizontally, vertically, or diagonally.
This is done by repeating this process c times:

- Dumping the set of existing holes into an ArrayList and shuffling them
- Choose the first hole from this list and move horizontally, vertically, and diagonally to find candidates for a new hole
- Gather these candidates into another list, and choose a random candidate to become the new hole. If successful, stop here
- If there are no candidates, choose the second hole from the existing hole list and try again
- Repeat until a candidate is found or all existing holes have been traversed (in that case the entire wall is just holes)

In a Multiplayer Score Attack game, the first wall starts with 3 random holes and 0 connected holes, and eventually goes up to 3 random holes and 5 connected holes (for a total of 8 per wall).
In the finals, each wall always has 5 random holes and 10 connected holes (with the exception of custom walls).


## Singleplayer modes

### The Tutorial

There's a tutorial where an enderman teaches you how to play the game!

<img src="/assets/fitw/tutorial.png" alt="enderman">

I used NMS to remove all of its default "goals", then made my own custom goals; 
one telling it to always face the player, and the other telling it to walk around when necessary.

### Rush Score Attack

<img src="/assets/fitw/rush.gif" alt="rush">

This was one of the features I originally made for the hackathon, somewhat inspired by Puyo Puyo Fever.

In this mode:
- Multiple walls fly at you in quick succession
- You have 30 seconds to clear as many walls as you can
- **Each wall has a slight modification from the wall before it**
- The blocks you place don't disappear when you submit the wall
- If a wall reaches the playing field without you manually submitting it, the Rush ends

<small>I might remove the last point now that I think about it</small>

To make the walls work, I cached each previous wall before spawning in a new one.
When it was time to spawn the next wall, the previous wall was copied, and then a hole was either removed, or a new hole was added using the "connected hole" algorithm above.

It took a lot of fine-tuning, but this is one of my favorite modes!

### Marathon

<img src="/assets/fitw/marathon.png" alt="garbage walls">

In this mode, when you miss a wall (score below 50%), the wall will harden at the back of your queue.
The game ends if you run out of space for new walls to spawn. You can reactivate these walls by scoring enough positive judgements.

*Taken from modern versus Tetris games.*

As garbage walls pile up, new walls will have less time before they reach the playing field, and the **effective length** (queue length - # of garbage walls) decreases.
To do this, I would just take the wall's original active time (time until it reaches the playing field) and multiply it by the percentage of queue space remaining: 
`effectiveLength / queueLength`

Unfortunately, during playtesting, this was way too harsh, because past a certain point walls become so fast that it's impossible to recover.
So instead the walls are multiplied by a value that's still based on the queue length and # of garbage walls, but has a minimum value of 50%.

```java
public int calculateWallActiveTime(int baseTime) {
    double ratio = (effectiveLength + ((fullLength - effectiveLength) / 2.0)) / fullLength;
    return (int) (baseTime * ratio);
}
```

### Custom Walls

<img src="/assets/fitw/question.png" alt="question custom walls">

I had planned to make a website tool and let people upload their own "custom wall maps" to the server.
While I ended up shelving that idea, I did make a simple YAML structure to store data for collections of walls.

```yaml
dimensions:
  length: 7
  height: 4
walls:
  AMOGUS:
    holes: 2,0,4,0,1,1,2,1,3,1,4,1,1,2,2,2,2,3,3,3,4,3
  example-wall:
    holes: 0,1,0,2,1,2,2,2,3,2,3,0,5,0,5,1
    time: 260
```
The `holes` string are actually just ordered pairs with no parentheses to separate them.

### Mega

<img src="/assets/fitw/mega.png" alt="Mega">

This was the last mode I worked on. It was very easy to make, since I already made the tools to:
- have custom playing field dimensions
- generate as many holes in the wall as I want
- allow multiple players on one playing field

There's a feature where incorrect blocks are highlighted. This is done by taking a block display, placing it where the incorrect block is, and making the display glow red.
Unfortunately, because invisible block displays won't glow, the block display itself is visible which causes z-fighting. But that's okay - it gets the job done.

<img src="/assets/fitw/incorrect.png" alt="incorrect">

To prevent players from just placing blocks all over the place only to break them afterwards, incorrect block displays only last 10 seconds :)

## Multiplayer Gimmicks

I added these to spice up the gameplay with my friends. *I might have caused a bit of chaos in the process!*

Here are some of the more technical ones:

### Gravity

<img src="/assets/fitw/gravity1.gif" alt="falling up">

Like the Falling Blocks and Torch Geyser effects, this makes use of block displays and basic kinematics.

The game checks every tick to see if any block has no supports in the direction of the gravity. If there isn't, the block is converted to a block display, and it falls in that direction.
Once the block is projected to fall into an solid block, it stops and sets the block type of the location it stopped in.

The problem is, if there are multiple block displays, they could try to claim the same block location, which would result in a loss of blocks.
My solution was to "kick" block displays backwards if they ended up trying to settle down in a solid block.

<img src="/assets/fitw/gravity2.gif" alt="falling down">

It is possible to place enough blocks such that there isn't enough room for all of them on the same row/column. In that case, the extra blocks do get deleted.

### Inverted

<img src="/assets/fitw/inverted.gif" alt="Inverted walls">

With this gimmick, you break blocks instead of placing blocks. However, the actually tricky part is **grading** this wall.

The normal grading system gives you a point every time a placed block fits into a hole in the wall, and removes a point for block placed in the wrong place.
If I used the normal grading system with this gimmick, every wall would give 20 points for doing nothing!

In the end, the grading system for Inverted looked like this:

`int points = wall.getLength() * wall.getHeight() - wall.getHoles().size() - missingBlocks.size() - extraBlocks.size();`

For example, take an inverted wall with 7x4 dimensions and 5 blocks **to break**. The player breaks the proper 5 holes, but also breaks an extra one. 
This would award 4 points:
(28 - 23 holes - 1 missing blocks - 0 extra blocks) = 4 points

### Multiplace

<img src="/assets/fitw/multiplace.gif" alt="Multiplace">

This makes the blocks you place turn into 2x2 boxes.

The pivot of the box is located at the bottom-left. But what happens if you place a block in the top-right corner of the playing field?
The game will then attempt to shift the pivot point such that the blocks placed don't overlap with other blocks or are out-of-bounds.

If the shifts don't work, the placement fails and you end up only placing one block, which can be used to your advantage!

### Flip

<img src="/assets/fitw/flip.gif" alt="Wall flipping on TrollyLoki">

The wall flips horizontally, along with the holes, which can seriously mess players up.

This was very challenging to implement, but it can be described in a few steps:
- Stop the wall from moving
- Create a map with every block display mapped to two things:
  - **the location of the center of the wall relative to this block's y position**
  - **a vector from that location to the original location of the block**
- For the next 20 ticks, rotate this vector around the y-axis by π/20 radians, then teleport the block to the center location + that vector
- After this, change the coordinates in the hole set to match the now-flipped wall
- Resume wall ticking

In the future, I might look into making the blocks themselves rotate so that the blocks are connected when they rotate.

## Overall

<img src="/assets/fitw/void.png" alt="The singleplayer arena">

I'm very happy with how this project came out! I felt that I was able to provide a good product to my friends that furthered this classic game.

I wish I was a bit faster, as now it's the end of summer so I don't have much time for other projects. But that's okay!

The server will not be releasing publicly any time soon, as there are some major security issues with the game; namely the fact that the game puts players in Creative mode.
If I have time, I'll spend time fixing that, and perhaps a public release could be possible.
