---
title: Fish Rules Day 43
date: 02-10-2021
published: true
---

https://twitter.com/karrisaarinen/status/1358908828734038021?s=11

## Biz.

We got 20 subscribers in our first day with the new ProStaff plan.  :-)

Once I knew the subscription was working ok, I added lots of “ads” and in-app messaging that takes users to our new ProStaff subscription page in the app(s).  [Here’s][1] what the in-app message pop-up looks like.  Firebase has some nice targeting features so I set it up to show every 30 days for a user, once a user dismisses it.  We’ll see how those perform over the next week or so…maybe do some A/B testing after that on different ones.

## Dev

Had a whole day detour due to the Mac OS upgrade.  It totally destroyed my Ruby + Homebrew setup which meant running React native + CocoaPods didn’t work at all.  So terrible.  I had to re-install all of that only to find out BigSur had it’s own version of these things that conflicted…so rolled that back and then read 1,000 SO’s to figure out the best plan of action.

Then Facebook updated a dep around Flipper and broke things.  Ref. [This article][2] for what I had to fix.

Then, after I got all that working, the simulator and Android device I had could not talk to the dev server.  Come to find out the MacOS update changed the firewall settings and I had to whitelist a few things. 

Another thing it did, which I didn’t realize until I started seeing weird errors on `npm start`:  IT CHANGED MY NODE VERSION TO VERSION 8!!!  That was released 3 years ago…this laptop isn’t even a year old…I never installed that did I?!  It was really weird that it used that after I installed the MacOS update.

THEN (Oh no, I’m not done yet), the JS bundle was not being created by the React Native tooling.  Device and sims could connect to the dev server, launch the app, run some of the native bootstrap code but there was no JS bundle so nothing happened.  When I tried building a release, it would just hang at the last few tasks and never complete.  Total complete nightmare.  I opened up Xcode and decided to watch all the build logs (all 900,000,000,000 lines)…and it occurred to me that there had to be some C++ bindings or some ruby script that was erroring out but wasn’t outputting the problem.

I ran: `brew uninstall Watchman`
I re-installed the ruby linking lib via: `sudo arch -x86_64 gem install ffi`
I re-installed pods via: `arch -x86_64 pod install`

And for whatever reason…that was the magic combination.  Ultimately, I’m 99% positive it was watchman that was dying, but those were the last 3 steps.


[1]:	https://fishrulesapp.com/images/in-app-message.jpg
[2]:	https://exerror.com/event2-event-config-h-file-not-found/