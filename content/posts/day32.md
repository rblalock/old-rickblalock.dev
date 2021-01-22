---
title: Fish Rules Day 32
date: 01-22-2021
published: true
---

One of the things I like about working on Fish Rules is it is tech that relates to real world problems in a large industry that doesn’t revolve around just tech.  What I mean is, the work I’m doing isn’t detached from the physical world.  Much of the tech I follow revolves around products and ideas and businesses focused on solving other tech problems for other tech people.  It can be very detached from the physical world.  Fish Rules is fun because it is tech that helps solve physical-world problems.

# This week in review

Lots done this week, here are some highlights:

- Several calls with potential partners in the fishing industry
- Investor info deck sent out, had a few pitches
- 5 state agencies reached out with interest on our government  products, based on the outreach effort we put out the last week
- Mobile app v6: Trip screens done, fish log done, trip basket concepts done, location aware and rotating ads done
- Feedback from our beta testing for the new Commercial App came in and started tweaking this.

# Today

## Business

Created a 90 second video of Albrey and I talking about Fish Rules.  Some of the investors want a short video so figured we get it done over lunch.  Other than that it was all dev today…

## Dev

This week I’ve intentionally been off the daily theme’d emphasis because it’s 100% all in on v6 of the mobile app this week.  I don’t want to kill momentum on where we are.  It’s almost ready to launch.

Big things done today around ads:

- Regulation details now has ad. handling
- Ads are now location specific
- Ads now rotate if there are multiple in the same spot.  Ads have a weight now and we use that as a multiplier on the changes it shows up over the others.
- The API now spits back all boundary data, when needed (used in our internal app).
- Our internal app for managing things like ads, now have the ability to select multiple locations for ads and the weight of the ads.