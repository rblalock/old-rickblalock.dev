---
title: Fish Rules Day 50
date: 02-23-2021
published: true
---

It’s really frustrating when organizations say they’re in to ocean sustainability efforts and conservation but when asked how  one can get involved, they provide a link to something that has nothing to do about getting involved.

## Biz & Marketing

All sorts of digital property updates today:

- Blog post on 6.4 [here][1]
- First iteration of the citizen science page [here][2]
- Minor tweaks to the marketing site [here][3] (still not happy with that first pic)
- Updated [fish.management][4] with the new product offerings

Met with some students of U. Of Alabama around a cool app project that will use Fish Rules’ regulation API.

Spent a lot of time socializing the updates with contacts.  Also used [NewsWire][5] to send out Ye Olde Press Release on the updates. 

The HIMS ad campaign just started running today (the hair loss ad).  We’ll see how it goes.

## Dev

Welp, I found out about the [Interaction manager][6] today and boy is it helpful.  I wrapped some of our expensive code that was causing frame drops and it solved the frame drops instantly.

We had several Android users complaining that the list of species weren’t showing up.  One user sent a screenshot and come to find out if you set the text/font scaling too high…it’s SO large it’s out of the viewport so you never see it.  I quickly added handling for text scaling and disabling it in some places too.

I also fixed a minor issue with logging Red Tide and made sure when logging a prohibited species, we only have an option to “Release” and not “Harvest” the species.

[1]:	https://app.fishrulesapp.com/news/citizen-science
[2]:	https://fishrulesapp.com/citizenscience
[3]:	https://fishrulesapp.com/
[4]:	https://fish.management/
[5]:	newswire.com
[6]:	https://reactnative.dev/docs/interactionmanager