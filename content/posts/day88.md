---
title: Fish Rules Day 88
date: 04-26-2021
published: true
---

## Misc.

iOS 14.5 launched with the new privacy notice that an app wants to “track you”.  Well first app I opened was Facebook and it didn’t show up.  Tried Twitter, nope.  Google apps, nope.  If it doesn’t show up for them then when would it EVER show up???

Tried to update Xcode with the new Mac update.  Of course it didn’t work.  Stuck in loading mode in the App Store app.  Seems like this happens every time.

## Biz & Marketing

- Follow up with folks in our pipeline
- Follow up with a few partners
- Michael has been blitzing the emails to local businesses.  Got a few local business signups today.

## Dev

Completely revamped how we download regulations, unzip, open, init, etc. for both the commercial and recreational app.

Commercial app:  Minor UX logic changes when there’s very little or a lot of species data.  Also added an intro walkthrough

Reviewed the commercial version of our Fish Management product for last minute things.  We also got in a lot of feedback from our beta testers so looked over that and addressed some things too.

iOS 14.5 has broken some of our geolocation functionality.  For some reason only on this version, with a cold start, the app doesn’t get the initial GPS locations.  If you tap refresh it works.  Waiting for all the new updates to happen so I can debug this…