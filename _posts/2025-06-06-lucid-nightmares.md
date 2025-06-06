## Lucid Nightmares with SGD@UVA

Let's go back - it's the end of the Fall 2024 semester, and I've had my last class. I was taking 18 credits and was involved with
5 different clubs at once, so I was *tired*. 

Even though I accomplished a lot that semester, I felt like it wasn't that significant.
Sure, we put on the show Guys and Dolls with First Year Players; I had launched a rocket and got a certification for it;
and we got a medal at a programming competition (which I was super proud of);
but I just didn't think these activities did much to advance my overall standing.

I felt I needed to try a leadership position, and the only place where I really felt like I could succeed was with Student Game Developers.

...

5 months later, me and my deputy director Sebastian released what might be our most polished and creative project yet: 
*Lucid Nightmares*, a 2D puzzle-platformer.

<iframe frameborder="0" src="https://itch.io/embed/3505760?bg_color=2d5a87&amp;fg_color=FFFFFF&amp;link_color=fa5c5c&amp;border_color=4f7ca9" width="552" height="167"><a href="https://arti-creep.itch.io/lucidnightmares">Lucid Nightmares by Arti_Creep, pharingwell</a></iframe>

In this blog post, I'll discuss our design and development process.
I'll also share some tips I have for people who want to direct video games in the future like this.

### Coming up with ideas and inspirations

When I got the message that I was chosen to be a director for the coming semester, I wasn't 100% sure I was going to commit to it.
The idea was still really fuzzy in my head and I wasn't sure that I could pull it off alone, but I got to brainstorming.

The first things I thought of were **gameplay and mechanics**. I wanted to make a 2D platformer in Godot, 
as I had prior experience on a project called Ricochet a year prior. However, I needed some inspiration if I wanted 
to make something different from other platformers.

- Ricochet's unique gimmick was the ability to launch yourself by shooting the ground with a gun. 
- Lucid Nightmares' was the ability to move around world objects with the arrow keys, which we called **telekinesis**.

I pulled inspiration for telekinesis from modern Tetris - a game I've been playing a lot in the past year. 
In that game, you move and rotate tetriminoes with the arrow keys, but canonically, there aren't any 
visible forces moving them. In Lucid Nightmares, this is explained by the fact that the player is dreaming.

<img src="/assets/ln/telepitch.gif" alt="An early look at telekinesis" width="100%"/>

It was around this time that I got a few more messages from SGD and Sebastian joined the team, 
and I was feeling a lot more confident with someone else to accompany me.

I also credited a few other games, such as gimmicks from *Super Mario Galaxy* (that I don't think we ever used),
*Celeste*, which we based the art style off of, and the puzzle-platformer nature of *Portal*.

### The first few demos

In my "elevator pitch", I wrote that telekinesis would work on "special platforms that come in different
shapes and sizes when in range", and that they could be used to "reach higher places, 
carry you over dangerous obstacles, or interact with puzzles in the environment".

The first demo hit two-and-a-half of those points; in the first demo, the only telekinetic object I made was a freely-moving tile.

Later on I made some changes, like adding telekinetic platforms constricted to a rail, nerfing the freely-moving tiles to make
sure you couldn't fly over an entire level with one, and designing a level based around momentum physics that Godot provides.

<iframe width="560" height="315" src="https://www.youtube.com/embed/QylCtyWVISU?si=xTDzPKNyWyPJHJ3B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

So yeah, my development cycle at this stage was to add a new feature, play around with it over and over again to see how it feels, 
tweak it if necessary, and try to make something using it. **Nothing was set in stone yet**, which is really important to stress - 
I think the most flexible part of any project is at the very beginning when you're figuring things out.

### Pitch Night

The purpose of Pitch Night is for directors to present their game demos and pitch it to the entire club. Afterwards,
club members fill out a form and rank the games they want to work on, and teams are assigned based on the responses.

I've always found most demos at Pitch Night to be kind of... underwhelming. Most of the time, they might have their 
core concept implemented, but it wasn't applied in any meaningful way. Or sometimes the demo is just hard to follow.

For our demo, I decided to create the first level for our game. This way I get some work done early on and it's hopefully presentable.

<iframe width="560" height="315" src="https://www.youtube.com/embed/U3UBzSixAsk?si=0uL6W-vKa-cRrNNr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

There are quite a few additions and changes from earlier demos, these being:

**World/Character Art:** While it was likely acceptable to *only* have placeholder art for this demo, I wanted to give an example of how
the area themes we talked about earlier would work in the game - so I got some free assets from itch.io and modified them
with the help of my friend Crow from Discord. This level takes place on a bookshelf in the library, with the player being relatively small.

Crow also made our character sprite which definitely wasn't inspired by Celeste:

<img src="/assets/ln/character.png" alt="Main Character" width="75%"/>

*The hat is actually inspired from the hat Kirby wears when he has the Sleep copy ability!*

**UI:** Some basic text in the top-right explaining how to use/select telekinetic objects

**Camera:** While the camera will typically follow the player in our game, I implemented a way to override this
behavior and use a static camera when entering certain areas.

**New objects:**

- Springs that launch you into the air (that weren't decorated yet)
- Giant books that can be moved around with telekinetic tiles
- A lectern with a book that allows you to "learn" telekinesis after touching it
- A telekinetic open book that you can close to fling yourself over a huge gap

Overall, I think we did great with the demo. It was presentable, reasonably simple to follow, and showed off the
main gimmick well. The only thing we were completely missing was music/sound effects.

The work paid off, because we got around 25 signups for our game - the most out of all SGD games this semester!

## Meetings

So I was freaking out a little bit before our first meeting.

I was going to be leading a meeting with a bunch of people I didn't know beforehand, and I wasn't sure how I wanted
to do it. Thankfully, Sebastian led the meeting, and we did something different - we played [1000 Blank White Cards](https://en.wikipedia.org/wiki/1000_Blank_White_Cards).

Essentially, we explained a very basic point system, and made our own cards. Then we played a game with the cards we made.
Additionally we were allowed to make brand new cards *while the game was running*.

I'm not 100% sure *why* we decided on doing this, but if I were to give a reason, it was
to give a glimpse of what we would be doing in the next few meetings, which was brainstorming.
Nonetheless, we had a lot of fun.

For the next few meetings we encouraged team members to bounce ideas off each other, such as new telekinetic
objects and general vibes of each level. We had a Google doc where we would dump notes from each meeting,
which was very helpful as I tend to have a pretty bad memory when it came to remembering what we did last.

I was still very nervous in our early meetings. I didn't remember everyone's names and I *really* didn't want
to ask them multiple times. One meeting, I was getting a bit nervous about some upcoming deadlines, and
I started walking around in hopes to connect a bit better with my team, because there wasn't a lot going on.
Sebastian noticed this and told me to just go back to my laptop and work on some programming. 

In retrospect, hovering around my team members wasn't a very good idea, as it could look like micromanaging.
This is something you don't want to do. In future meetings, I generally would work on things myself and let others
approach me to ask things, with me occasionally approaching others to check on things. I definitely wasn't perfect -
there were times when I really should have left a conversation be (too many cooks!) but I was improving over time.

I really cared about my team and did my best to accommodate for them however I could. I would say I treated them
as friends rather than just people working on the game. I also tried not to act as a authority figure - 
I think I told one of our artists that I wasn't the boss, I was just "another guy" 😂.

At the end-of-semester expo I was given a thank-you card from three of my team members, which was totally unexpected!

<img src="/assets/ln/card.jpg" alt="i'm a trading card???" width="50%"/>

*thank you for the card, y'all are the best!!!*

Some extra things that I don't really know how to fit in:

**While we had 25 signups for our game, only around half of those people ever showed up to a meeting.**
Apparently, this was normal? I can't imagine how much that hurt some of the smaller teams.

**We did lose some more members over time,** which is also normal, but Sebastian and I theorized a bit about why.
We think it's possible that the few weeks of brainstorming that we did in the beginning could have diminished interest.
Some people might not be interested in brainstorming and would be more interested in actually making the game (like programmers).
And since we didn't do that for the first four weeks, we ended up losing people like that.
Probably the only way to fix that is to finalize the design of one part of the game so we can get people actually making it ASAP.


## Game Scope

Another super important thing with game development is to keep track of feature scope. After we had the core mechanic of the game down,
we then moved to discussing the actual contents of the game. We eventually settled on:

- Four distinct "areas" with different themes
  - An endless library
  - A subway in the clouds
  - A dark, nightmarish woods
  - Inside a house floating in space
- Three levels per area (for a total of 12 levels), with each level centering around a unique telekinetic object
- Checkpoints and respawning
- Title screen and credits

However! At maybe around our fourth meeting, someone who signed up for our team showed up for the first time with a **lot** of energy
and passion for this game, but did confess that the contents of the game were a bit ambitious.

I never saw them again, but they were very much right!

I had highly underestimated both how costly it was to produce each level and how long our levels were actually going to be.
Here's what we ended up completing (according to our final presentation):
![accomplishments](/assets/ln/accomplishments.png)

So we only made 5 levels, but we were able to polish them really well.

**Be prepared to cut back on your plans.** Unless you're a pro, it's probably inevitable. I'll talk more about
how we made our decisions on cutting content later.

## Splitting up the work

To assign tasks to people, we used GitHub Projects. It was very helpful for seeing
what we needed to do and who was working on what!

![github projects](/assets/ln/gitproj.png)

*Right now, it looks like this.*

One of the things I struggled with was explaining tasks in detail. For example, I knew we needed a train car
asset for our fourth level, but I didn't specify anything about how it was supposed to look until much later.

I also had the philosophy that I didn't want to mandate tasks to be done in certain ways, so that team members
had the freedom to make decisions on the tasks they were given. However, that wasn't always ideal.
I learned that a lot of the time, people will look to the directors for decisions, because that's what we're supposed to do!
So it's very important to get specifications down and make these decisions early as directors. 
Of course, some people will have ideas of their own, which I really respect, so I also did my very best to fit
them into the game.

I also had a tough time communicating with artists, mostly because I wasn't very experienced with art.
Over time, I did learn some basic things to make things easier - things like specifying the canvas size/resolution
of sprites, colors that we were looking for, etc. I found it important to tell artists how their work
would be used in-game as well. 

Asking people to make music wasn't too bad though, as our musicians pretty much read our minds. I suppose all that was
needed was a description of what the game would look like when the music track was playing! Sebastian did most of
the talk when it came to communicating with musicians, so I can't say much more.


## Programming

Before Pitch Night, I made extensive documentation on how I had set up the game.
We had a good few programmers on the team in the beginning, but maybe halfway into the semester, I realized that
the only two programmers remaining were me and Sebastian.

*Somehow, we had scared off all of our programmers??*

I'm still not sure why, and I feel like I failed in that regard - but we made our best to make up for this fact.

Before most meetings I would try to have something prepared, such as a new world object or some art/SFX implemented
from our backlog. I was dishing out new features frequently - maybe too many features.

![playground](/assets/ln/playground.png)

*Our testing playground - accessible by inputting the Konami Code on the credits screen*

<img src="/assets/ln/pressureplates.gif" alt="pressureplates" width="100%"/>

<img src="/assets/ln/clouds.gif" alt="clouds" width="100%"/>

*Some snippets of features that I posted in our Discord*

I remember one of our level designers saying that too many world objects would be bad, because they'd have to
fit them in somehow without making the levels too long - which is true!

Occasionally our level designers would ask me if something was possible or if I could add something in for a level,
which was always fun. 

There were two times where we had to make a large change to our game. The first was the decision to downscale our
world tile size from 64x64 to 16x16. This messed up the locations of everything in the world, and I had to change the
camera to adjust for the new scaling.

The other time was when I was trying to export the game to HTML5. Apparently AudioPlayers don't seek properly in browsers and
will always start at the beginning of the music track no matter what. And since we were reloading the entire game tree
upon player death, it would keep restarting our music track, which was unacceptable.

I ended up having to create a new system where the AudioPlayers were separated from the rest of the game tree, so we could
reload everything but those AudioPlayers. Thankfully, due to some good coding practices from earlier in the project,
this only took a couple of hours.

---

Alright, that's enough for me to write about today. There's a lot more I could talk about,
but I think this is a good enough recap of the development of Lucid Nightmares. I know it wasn't a very
technical one, so if you have questions, I'd be happy to answer them over on Discord or elsewhere!

We ended up being feature-complete well before our End-of-Semester Expo, which gave us plenty of time for testing and final touches.
Because of that, we were able to release a super polished game.
I'm very proud of this project, and I can't thank Sebastian and the rest of the team enough for making it possible!!!

I hope this blog post helps people who are looking to try something similar.
As long as you can pull in with some confidence and a drive to get things done, it'll be a very rewarding experience!

[GitHub Repo for Lucid Nightmares](https://github.com/UVASGD/spring-2025-lucid-nightmares)

<iframe width="560" height="315" src="https://www.youtube.com/embed/DEiK0jAUHag?si=w27NPWzCI1jPE_8O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>








