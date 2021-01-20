---
title: Fish Rules Day 29
date: 01-19-2021
published: true
---

Quote of the day goes to Warren Buffet:

_“You only find out who is swimming naked when the tide goes out.”_
_— Warren Buffett in 2001_

## Business

Albrey and I had a working lunch going over exactly how we’re going to approach some high level strategic things and how it feeds in to where we put effort and focus with government business and PRO plans.

Michael reported several state agencies reached out due to our campaign last week, as well as some advertisers, whom he’s been following up on.  Tenacity pays off.

Practiced the investment deck.  Met with a few people to go over it and get feedback.

## Dev

Regarding the performance issues on Android when running the point-in-poly algo. to figure out the current regulation zones…I fixed it in the most terrible annoying way ever…

https://twitter.com/rblalock/status/1351645885080494081

I continued my blitz on the mobile app, v6 today:
- Fixed some minor things based on Andrew’s feedback
- Added a new total length / fork length to the fish log measurements
- Empty trip state logic for the basket
- Fixed issue with favorites filter
- Android filter buttons are now easier to press on some devices
- Android’s federal/local buttons work now
- Added photo upload and management for fish logs

Frustratingly, if you leave comments in your React markup code, an error _Error: Text strings must be rendered within a \<Text\> component._ …which took me way too long to figure out what the exact issue was…….a code comment!

Another gotcha I ran in to today: The geo coordinates from EXIF data is different on iOS and Android…

[Flipper][1] is super helpful for debugging React Native apps.

I just learned about the web [“share API”][2].  So great.  How did I not know about this?!

[1]:	https://fbflipper.com/
[2]:	https://web.dev/web-share/