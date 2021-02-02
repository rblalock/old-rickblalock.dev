---
title: Fish Rules Day 38
date: 02-01-2021
published: true
---

False-consensus Effect - [You are not the user][1]

_“The False-Consensus Effect is a tendency to assume that others share your beliefs and will behave similarly in a given context. Many professionals suffer from the false-consensus effect, including designers.”_ [Link to quote][2]

## Focus

Where to focus?  Arrrrrgh.  It’s literally an every day struggle.  Even though I know what needs to be done every day by the time I’m done with my morning prioritization routine…it’s still always a struggle.  There’s things I want to do and need to do and they’re not always the same thing. I have sales things to do, marketing things, business things, and lots of dev things.  The dev things are winning right now because we have to  shipppppp noooowwwwww.

## Beta Testing v6.

Wow we’ve received a lot of interest to beta test.  So excited to see all the activity and excitement.  [Here’s the link][3] to get started, in case you’re interested.

## Business

Lots of follow up emails to NOAA, FWC, etc. to keep conversations going but also invite them to the beta (or watch the video of the beta).

Pushed back on an IT department saying “no” to Fish Rules integration.  We’ll see how that goes.  :-)

Had a great brainstorm and planning session (including some white boarding) with Albrey today.

One of our advertisers decided the millions of views they get “might not be worth it”, lol.  “It’s not selling until someone says ‘no’!”.  :-) One thing I’ve noticed with the outdoor industry: Most of their e-commerce sites are grossly behind on best practices.  I wouldn’t buy most things from these sites because they look shady: Broken links, distorted pictures, non-https (i.e. not secure), etc.  On a bigger picture view (eco-system thinking) - we need their e-commerce efforts to work in order for us to be successful too, even though it’s not our job to help people through their shopping carts.  I started working on that today by reaching out to a few people I think can help.  More on that soon, hopefully.

## Dev

I sent another build out to beta testers today.  Here were some of the notes:
- Share regulations
- Starting a trip will remind users to stop the trip after a few hours
- Trip list now shows the current trip
- The fish list is now searchable by synonyms
- Tapping on fish log photos now opens in the photo viewer
- Haptic feedback (vibration) on some interactions
- Crash reporting
- You can now log fish anonymously (without logging in)
- Better messaging in some places

I ran in to a build snag after adding the local notification library, that took me too long to debug.  [This issue][4] helped me figure it out.

[1]:	https://www.nngroup.com/articles/false-consensus/
[2]:	https://www.shopify.com/partners/blog/ux-laws
[3]:	https://www.notion.so/fishrules/Beta-Testing-31e7f5651de544f2be1c32857b196af0
[4]:	https://github.com/wix/react-native-notifications/issues/662