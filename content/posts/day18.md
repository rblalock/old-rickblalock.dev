---
title: Fish Rules Day 18
date: 01-04-2021
published: true
---

Handy way to reduce bias in prioritization: [https://uxdesign.cc/feature-prioritization-a089fd0af08][1]

## Misc.

I’m feeling a lot better.  Last week over the holidays I took it easy, did very little but rest.  I just have a lingering cough now (shakes fist).

I found an interesting plugin for this blog: [https://github.com/remark-embedder/core][2] - I think it will let me unfurl rich content like twitter links, right?  I’m going to try it some night this week.

I watched [“Before the startup”][3] by Paul Graham over lunch.  What a refreshing talk.

## Marketing

6 more days left before my little [branding experiment][4] ends.  I pulled out the big guns today and used a mobile push notification, which went to 515k devices.  We’ll see how that works.  Unfortunately, the current app doesn’t have a way to open a link from a push notification, so mileage will vary on how many people read the notification and go to the website from there. (Shrug).  I forgot about Firebase in-app messaging…thought I had implemented it at one time but I guess I didn’t.  Another thing to add to the v6 list.

Amazingly, the main marketing landing page didn’t have Google Analytics on it (facepalm).  Solved that quick. :-). Within about 1 min…the “real time” dashboard showed around 100 users on the marketing site. lolz.

## Sales

Worked on getting a list of industry related apps together, worked on a deck we’re going to use to target them too (which is really based off the API pricing stuff).

Reached out to several fishing foundations.  Got one reply instantly, about getting involved in one of their programs!

Went over the government and industry biz outreach plans with Michael.

I happened upon [this article][5] and was surprised to learn about NOAA’s MAFAC. So yet another group to try to get in touch with in the government!

## Dev

Over the weekend I made **huge** progress on v6 of the mobile app.  It’s soooo close (I’m entering the Pareto Principle realm).
- Setup the Firebase SDKs
- Implemented pulling down and using the SQLite regulations db
- Implemented pulling down the offline fish images zip
- Wired up the GPS handling to the boundary / zone Fish Rules logic (point-in-poly and all that stuff)
- Wired up the regulations list to the Fish Rules logic
- Wired up regulation detail screens to Fish Rules logic
- Wired up species data to Fish Rules logic
- Wired up the regulation tile information modal
- Started on the “first time” experience on boot (it’s meh so far but it works…)
- Started on the fish log wiring (The trip / fish log is the last big hurdle)

Pushed out new fish images, submitted by a bunch of folks in our community.  Check ‘em out [here][6].

[1]:	https://uxdesign.cc/feature-prioritization-a089fd0af08
[2]:	https://github.com/remark-embedder/core
[3]:	https://www.youtube.com/watch?v=ii1jcLg-eIQ&feature=emb_title&ab_channel=HowtoStartaStartup
[4]:	https://www.bonfire.com/fish-rules-swag/
[5]:	http://www.elementalmethods.com/news/2020/5/1/noaa-fisheries-appoints-11-members-to-new-recreational-electronic-reporting-task-force
[6]:	https://app.fishrulesapp.com/