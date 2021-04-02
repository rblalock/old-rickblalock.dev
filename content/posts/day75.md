---
title: Fish Rules Day 75
date: 04-02-2021
published: true
---

I love simple iteration:

https://twitter.com/puf/status/1378009829629952006?s=11

## Misc.

Did some cool “protected species” reports.  Check out a screenshot:

https://twitter.com/rblalock/status/1378101417664208908

## Sales 

Met with Michael to go over accounts in flight, photo competition, who needs following up, etc.

## Dev

#### Web App
Albrey updated some of the measurement instructional images.  We serve this off the web app so I updated those.  In the process though I took some time to try to optimize the static generation NextJS does.  I actually removed the pre-build files for the reg. Detail screens because we have like 7,000 of them now and the build takes FOREVER.  However, you can add the fancy `fallback` flag to the generation and it’ll server side generate the page on demand but then cache them, it’s still super fast.  [Check it out][1].  I’m not sure how to get past the 30 min build times on Vercel so I did this and things work great.

Had to fix a Ye Olde JavaScript “falsey” bug with bag limit == 0 not showing … bag limit of 0.  :-)

Added the new empty state messaging and instructions from yesterday, to the location selection screen too, since it’s relevant.

#### Commercial App
- Order managed areas
- map image download
- Color code quota tiles based on %
- Misc. visual bug fixes / tweaks.
- Testing on android

[1]:	https://app.fishrulesapp.com/