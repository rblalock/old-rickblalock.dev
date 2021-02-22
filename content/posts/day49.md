---
title: Fish Rules Day 49
date: 02-22-2021
published: true
---

On [effort][1]:

“if someone’s much better than you at something, they probably try much harder. You probably underestimate how much harder they try. I’m not saying that talent isn’t a meaningful differentiator, because it certainly is, but I think people generally underestimate how effort needs to be poured into talent in order to develop it. So much of getting good at anything is just pure labor: figuring out how to try and then offering up the hours. If you’re doing it wrong you can do it a thousand times and not produce any particularly interesting results. So you have to make sure you’re trying the right way.”

## Biz.

15 or so follow-up conversations around monetizing the app, with potential customers, etc.

Had a good lunch meeting with Albrey.

We’re at 108 subscribers today.  That’s something at least. :-)

The citizen science and agency messaging initiatives are ready to go!

Reviewed a contract for a government agency.

## Dev.

Over the weekend we discovered a critical bug that gave users the white-screen-of-death, when new regulations were pushed out.  The database file was being corrupted in the scenario when the app was closed, opened, downloaded the file, etc.  Took about 2 hours to troubleshoot, fix, test, submit to the App Store.  It’s now live.  Nice turn around on mobile considering a few years ago it’d take weeks.

Apart from that:

- Wrapped all new features in feature flags
- Opt-in to feature notifications, also opts you in to beta features

[1]:	https://ava.substack.com/p/effort