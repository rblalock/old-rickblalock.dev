---
title: Fish Rules Day 19
date: 01-05-2021
published: true
---

On Startup Culture and being “Data Driven”:

https://twitter.com/mattwensing/status/1342852488119115776?s=11

## Personal

I added the [oembed plugin][1] I mentioned the other day to this blog.  Seems to work well.

Interesting read of the day, _[“Commoditize your complement”][2]_.

## Biz.

Ooof. Today went by SO FAST.

Some of the outreach I did yesterday proved profitable.  I have a handful of meetings that have come out of the effort.  In fact, two of them happened today, ad-hoc, with some major potential to partner with federal government agencies.  Stay tuned…

A major app in the industry reached out to chat about partnership too.  Not quite sure where it will go but we shall see.

First I’ve heard of _“The 40% rule”_.  [Interesting take][3].

## Dev

Got a lot of maintenance and UX nits done today on v6:
- Prohibited area and species messages
- Handle changing current species screen regulations when the location changes
- Local \<-\> Federal toggle
- Favorite handling
- No Data state(s)
- Fixed a few race condition crashes while the db and images were downloading
- Grid tile placeholders when things don’t add up to 6
- Fixed a few image sizing issues

Only thing on the list I didn’t get to was the login … but that’s because I have social and magic email login handling I need to do.  That’ll be a large effort…maybe tomorrow.

[1]:	https://github.com/remark-embedder/transformer-oembed
[2]:	https://www.gwern.net/Complement#
[3]:	https://avc.com/2015/02/the-40-rule/