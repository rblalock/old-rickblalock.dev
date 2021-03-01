---
title: Fish Rules Day 53
date: 03-01-2021
published: true
---

Thread of the day:

https://twitter.com/shreyas/status/1365732851732209668?s=11

## Business

Had some back and forth with some investors and incubator type folks.  I’ve learned I have to do a lot more education on the outdoors and fishing space first, before getting in to the Fish Rules opportunity.

Reviewed a few government fish logging apps to see how Fish Rules can better help what they’re doing.  Man alive they’re all so 🤢.

Got to try out our new in-app messaging / user engagement feature on a few species notices today.  It works great but noticed a limitation: The message has to be assigned to regulation boundary where a species actually has a regulation record (i.e. it doesn’t bubble up or down to a parent or child boundary when not present in the actual one).  Gotta think through that for an enhancement.

All our business cards have a QR code that makes you pay to redirect the link 🤦‍♂️.  Solved that immediately.

Hung out at a [speaker’s session][1] for a Florida incubator.  Pretty good session.

## Dev

Did a quick form for our fish mounting promotions / ads.

The commercial app now is using the sqlite DB that is pulled from Fish Management.  Which means this thing is almost ready to go!

We had some pretty harsh feedback from a user about taking up too much real estate.  It was mostly over-the-top but did expose a potential optimization we could do with the top location bar on smaller-height devices.  So I adjusted that today.  The customer seemed very pleased too.  🤷‍♂️

Tweaked the search settings to not be so permissive on the type of search results.

We now save notification channels to the user’s profile, if they’re logged in and upon log in, we’ll re-subscribe to those saved channels.

Cleaned up the basket image area when in offline mode.

[1]:	https://www.onesixonegroup.com/