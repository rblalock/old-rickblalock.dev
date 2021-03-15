---
title: Fish Rules Day 61
date: 03-15-2021
published: true
---

Good thoughts on the dev community:

https://twitter.com/swyx/status/1367518496326709251?s=11

## Misc.

Took a lead-gen type call with a company that is trying to do founder meeting groups (kind of like YCOM’s startup school).  The problem is I immediately shut the sales person down because it sounded like the same ole’ same ole’. I expressed the problems inherit in those groups in hopes he’d tell me they address that and they’re doing something better.  He attempted to but it didn’t address them at all and really sounded like they embrace the problems and waste of time those groups often generate.  $199/month to sit in a group and listen to other people complain or ask questions…yikes.

Speaking of…today I Sat through a decent session on “Launching an MVP” with a startup group, for free.  :-)

## Business

We launched our local listing for bait and tackles over the weekend.  Check out the marketing page [here][1].  We did this campaign where users could nominate their favorite local shop and if we picked them for a free listing, they’d get a free ProStaff subscription.  It worked quite well, we got 300 nominations in less than 24hr.  It’s great because it’s free lead-gen for us!  Now Michael has an initial list of companies we can sell to :-)

Sent some semi-warm emails out around Fish Rules API product.  Got 2 instant replies.  Nice.

Worked on a few strategic initiatives…🤫

## Dev

Over the weekend and today I worked on our analytics a lot.  Google Analytics is great but sometimes we need more complex ways to slice the data.  I stumbled upon [Rockset][2] in a podcast a while back (Software Engineering Daily Podcast) and decided to try it as a way to query our mongo raw data.  It works really well and is crazy fast!  I’m really impressed.  I managed to get a few of our important queries in and will be adding it to our internal app this week:
- Regulation views
	- by location
	- by location and species
	- by species
- Fish logs
	- by location
	- by species
	- by location and species
	- by species and tag
	- by trip
- Ads
	- by campaign (name)
	- by campaign and location


[1]:	https://fishrulesapp.com/locallisting
[2]:	https://rockset.com/