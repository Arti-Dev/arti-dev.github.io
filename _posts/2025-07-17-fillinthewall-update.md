# FillInTheWall - Release Changelog

I've released an update to the FillInTheWall server, which adds **new singleplayer modes**,
**new ways to play multiplayer**, a leveling system,
and lots of quality-of-life changes to make the server a lot more smooth.

You can join the server at `fillinthewall.ddns.net` on 1.21.7/1.21.8.

<iframe width="560" height="315" src="https://www.youtube.com/embed/TFlunc_4lis?si=4lpq4N8bkUP7RZgR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### New singleplayer modes:
**Endless**

Earn points to traverse through an endless amount of wall phases. Each phase has randomly generated
wall difficulty and speeds, and you'll occasionally encounter gimmicks from the multiplayer modes!

<img src="/assets/fitw2/build.png" alt="Star Trek build by TrollyLoki"/>
*Build by TrollyLoki*

**Sandbox**

Mess around with a variety of features in the game, including custom wall generation.

<img src="/assets/fitw2/sandbox.png" alt="Sandbox"/>

**Marathon (reworked)**

Aim to clear level 15 as fast as possible!
(The old Marathon has been renamed to **Survival**)

### Multiplayer Changes
**You can now pair up with another player to tackle the competition with a partner!**
Invite another player using /fitw pair \<username>, and you'll enter on the same playing field.

**Player collisions have been disabled** throughout the whole server as well, making it easier
to collaborate.

**The Meter has been replaced with "Charges",** allowing you to activate three wall freezes
at any time you want. Much less complex.

**Gimmickless mode** has been added for players who don't want to deal with the chaos. 
However, you'll score one less point per wall.

<img src="/assets/fitw2/gimmickless.png" alt="Gimmickless mode"/>

Don't want to play multiplayer but want to do the dripleaf parkour? You can now exclude yourself
from playing by running /fitw spectate.

### Leveling system

<img src="/assets/fitw2/levels.png" alt="Level leaderboard" width="50%">

The more you play, the more XP you get!

You can gain XP from most modes on the server, with Multiplayer Score Attack and Endless usually
giving the most.

Some features on the server have level requirements:
- Survival: Level 3
- Gimmickless mode for Multiplayer: Level 5
- Sandbox: Level 10

### Other changes

<img src="/assets/fitw2/pregame.png" alt="New pregame menu"/>

- Added leaderboards for playtime, perfect walls cleared, XP, and combined Multiplayer scores
- All gimmicks now wait for you to clear a wall before deactivating
- A back border has been added to the walls during the Finals and for Mega mode to make it easier to see
- The "Select a mode" menu has been redesigned, and now allows cycling backwards
- Added some new gimmicks:
  - Cheese: Spawns "cheesy" garbage walls on your queue
  - Speedup: Temporarily increases wall speed
  - Chain: Awards bonus points for maintaining a perfect wall chain (Endless exclusive)
  - Unsupported: Disables your support block (Endless exclusive)
- Made most database calls asynchronous, so they don't lag the entire server
- Some text elements now have gradients thanks to MiniMessage
- The petal effects from the singleplayer arena no longer obscure gameplay
- A gimmick now has a 50/50 chance of appearing during the Finals in multiplayer
- Added a command to restore your saved hotbar if you accidentally delete any items mid-game (/fitw hotbar)
- There is now a jingle when completing Sprint, Rush Score Attack, and Marathon





