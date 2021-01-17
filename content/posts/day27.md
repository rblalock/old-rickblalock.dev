---
title: Fish Rules Day 27
date: 01-15-2021
published: true
---

The YCOM video I watched today was on pitches.  The mock pitches were hilarious (and cringe worthy)

https://www.youtube.com/watch?v=SHAh6WKBgiE&feature=emb\_title&ab\_channel=HowtoStartaStartup

## Business

Met with NOAA today on some feedback and tweaks of the commercial app.  Spiny lobster was looking like it was going to cause us some issues but in the end, it is going to be an easy content approach, vs. new code.

Got a good intro to a popular news site for some potential dealings.  We’ll see where that goes. 

Had a working lunch with Albrey and Michael:
- Gov. Outreach update
- API outreach update
- Photo competition planning and sync.
- Investor info feedback and what we’re going to tweak

## Dev

Fixed a race condition around database updates while the app was trying to get regulation info.

I’m continuing to run in to performance problems with React Native on android.  It’s such a stark and noticeable difference than the current native app.  For example, I have a point-in-poly algo. that takes lat/lon and checks to see if the point is inside a polygon of coordinates.  One of the larger polygons takes iOS 200ms to check.  It takes 1.4s+ on Android.  What’s interesting is I use a JS layer in the current natively written app (Swift/Kotlin), and run the exact same code.  It’s less than 500ms on Android.  Same JS runtime (JSCore), on the same device.  It has to be something with how and when React Native runs this code.  Interestingly enough, on a smaller server less function with NodeJS (which is what the web app hits), it’s a little less than 200ms.