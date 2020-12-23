---
title: Fish Rules Day 14
date: 12-23-2020
published: true
---

I set up an “emphasis” for every day of the week, meant to highlight a focused effort on a particular part of Fish Rules:
- Sales Mondays
- Mobile App Tuesdays
- Marketing / Outreach Wednesdays
- Web / Internal App Thursdays
- Strategy Fridays

Of course other things will happen those days, this just helps me bucket certain to-do’s and drop them in on those days so I know I can get to them on that day.

Thus, today was “Marketing Wednesday”!
- Upgraded the marketing website to the latest versions of NextJS, Tailwind, React, etc.
- Added some fresh water features to the marketing site.
- Believe it or not, we didn’t have a Google Search Console account set up.  After I did that I registered the new sitemap and started poking around.  Fun fact: We showed up in Cobia regulations a lot yesterday.
- Planned out how we’re going to do our “news” section on our website.

In thinking about how I give updates daily, like this blog, I happened upon [https://supernormal.app][1] … I love the idea!

Found out that React Native’s Geo implementation uses a really old and bad Android API for location.  Switched to [this one][2], which is mostly a drop in replacement.  In the process that helped me get the location handling much more refined in the new v6 of Fish Rules I’m working on.

One major friction in all this React Native stuff:  Getting configuration to work just right can be really frustrating, especially for Android…but then I realize…Android config is frustrating regardless.  The rabbit hole today was the Google Map API key … which worked … then didn’t…then worked again.

[1]:	https://supernormal.app
[2]:	https://github.com/Agontuk/react-native-geolocation-service