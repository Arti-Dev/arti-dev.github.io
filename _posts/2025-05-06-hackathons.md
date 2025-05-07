## Rocks and Helicopters: HooHacks + Science Olympiad 2025

It's the end of the college academic year again, so you know what that means!
I've got some stories to write about here.

HooHacks, our university's premier hackathon, took place on March 29. 
Last year I used it as an excuse to start work on 
[FillInTheWall](https://arti-dev.github.io/2024/08/08/fillinthewall.html),
which didn't win any prizes but did become one of my biggest projects over the summer.
And in Fall 2024, I was part of a group of 4 who worked on 
[SeeBoard](https://devpost.com/software/cvoard) at VTHacks 12, which won
Best DEI Hack sponsored by Fidelity.

<img src="/assets/hoohacks25/fidelity.jpg" alt="fidelity charger" width="50%"/>

*A wireless charger/power bank we won at VTHacks 12*

For HooHacks '25, I was working with my roommate Ethan who was on the team at VTHacks 12,
and since we won something last hackathon, we decided we didn't care about prizes this time
around and just wanted to make a simple project.

So what did we make?

<iframe width="560" height="315" src="https://www.youtube.com/embed/2Hp-QDvSeE8?si=p9D1UpUa0Zt1FaDI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Yeah. We literally made a pet rock.

### Coming up with ideas

We were looking to do something that was small, fun to do, and was new to us.
On the day of the hackathon, we bounced back and forth on several ideas, like:

- an elevator simulator where you devise algorithms for efficient transport
- a youtube stock market
- an ascii spinning donut
- maybe more, i forgot

The problem with most of these were that either an idea didn't have enough content to be presentable,
or that it would take more work than we were willing to put in (the project wouldn't be "chill").

- the elevator sim was good, just we didn't have a concrete idea on how to implement it...
- the youtube stock market was too big in scope
- there wasn't a lot we could do with the donut (a chrome extension, maybe?)

Also, I was throwing around the elevator idea with some other friends, 
and the more we talked about it, the more I felt that the idea might have been a bit silly...

Later in the afternoon we decided on making the pet rock in the end, as it fulfilled most of the criteria.

### Making the project

We were making a "desktop pet" - an application that always stays on top of the screen,
no matter what window you were focused on.

In order to do this, we made a Windows Forms application in Visual Studio, something that we hadn't worked with before.

We started by using ChatGPT for research. Ethan got the basic framework working, where a completely transparent window
would stay on top of the screen at all times, and you could drag it around and it would "fall" from the top of the screen onto the taskbar.
I added some extra sound effects and improved some of the falling code, but that was about it for the majority of the day because...

### Science Olympiad

Science Olympiad is a STEM competition for elementary, middle, and high schoolers
(Division A, B, and C respectively). I participated in Science Olympiad my junior and senior
years of high school, and did pretty well in them, winning a few medals at Regional and State competitions.
This year, my sister made the team for the States competition.

Well, the University of Virginia has been the venue for the States competition for a long time,
*and it was happening at the same time as HooHacks*, so my family was at UVA that day.
I had picked my sister up from the train station the night before.

<img src="/assets/hoohacks25/kitty.jpg" alt="kitty on the tracks" width="50%"/>

*a kitty we saw on the tracks*

One of the events that my sister was competing in was called **Helicopters**. 
Students construct a helicopter that's powered only by a twisted rubberband,
and the goal is to have the device airborne for the most amount of time.

<img src="/assets/hoohacks25/heli.gif" alt="helicopter"/>

My sister was also competing in **Air Trajectory**, an event where you build a device
that uses the compression of air to launch a ball onto targets to score points.

<img src="/assets/hoohacks25/airtraj.jpg" alt="air trajectory" width="75%"/>

One of my friends from high school tagged along with the Science Olympiad team,
so me and some other friends (including Ethan) got together to have lunch:

<img src="/assets/hoohacks25/sushi.jpg" alt="sushi" width="75%"/>

Overall, I had a great time watching and supporting the Science Olympiad team as an alumnus.

<img src="/assets/hoohacks25/team.jpg" alt="the team" width="75%"/>

### Back to HooHacks...

Well, the fact that I was spectating Science Olympiad, spending time with my family, 
and constantly being in and out of the dorm meant that I wasn't able to 
devote that much time to our HooHacks project. 

By the end of the day both Ethan and I were a bit worn out.

Ethan went to bed, and I decided to knock out some final features on the project.
Specifically:
- being able to rename the rock
- drawing/implementing costumes for the rock
- adding a context (right-click) menu to access those features

<img src="/assets/hoohacks25/rocks.png" alt="rocks"/>

In the end, we didn't submit the project, as I felt that there wasn't enough *stuff* we could present.
But that's okay - Ethan and I agreed that we both had fun and learned something new; that's what matters.

In the future I think it's better if I chose one major event to bring my attention 
to rather than trying to juggle two at once, but I still felt I had a lot of fun that day.

You can view our work here: https://github.com/ethancoon/pet-rock

<img src="/assets/hoohacks25/cybertruck.jpg" alt="cybertruck"/>

*A presumed-to-be Air Trajectory build in the trunk of a Cybertruck (point and laugh)*