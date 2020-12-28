---
title: Fish Rules Day 15
date: 12-28-2020
published: true
---

## Inspiration 

I gleaned two lessons from this post [https://www.value.app/feed/zero-to-one-million][1]:
1. Make complex things easy to understand
2. A narrow focus and a commitment to solve specific problem(s), is crucial.

## Random

It was a simple, sad feeling on Monday, getting back to work after Christmas: _I have no idea what I’m doing._. lol.  At least I can take comfort in the fact that everybody I admire has seemed to say that at some point…maybe…?

## Da’ Biz

This government pitch deck is coming along.  Just need a few design elements tweaked and we’ll be good to go.

Speaking of, today is “Sales / Outreach Monday”, so a few focused things around that happened today:

1. I setup a simple swag shop via [Bonefire][2].  It was up and running in 15 min.  This is really meant to be a preliminary swag shop to test our brand and see if people are willing to buy apparel associated with it.  It’s not that great but for this one purpose, it’s ok.  It’s a limited time run that ends in 14 days.  We’ll see what the response is!  Check out the campaign [here][3].
2. Worked on compiling a list of key contacts for our government outreach / campaign for later in Jan. (all 50 states).  It’s a lot to consume.  Going to be a multi-day effort.
3. Reached out to several potential ad inventory suppliers

I went to 17 wildlife / commission agency websites today to research out some things for the outreach campaign.  A new idea / offering came up while going through all of them.  More on that in a future post (hopefully).

Had a discussion with Michael today on a potential partner. They want us to be a reseller of sorts but it might be too much of a distraction for the time being.  They’d fit in well when we do our photo competitions and longer term, in the fish log…but giving up an ad spot to take users to a page we manage, to re-sell their product, is a bit much right now.

## Dev.

Another big portion of effort today: Working on more of v6 of the mobile app.  See a video of progress [here][4].
- Added the filters for the list view(s) (favorites, prohibited, text vs image view)
- Location view is fully wired up to GPS and/or map and/or manual Lat/Lon
- Started on the regulation detail (species) screens

The react native navigation library is fairly obtuse when you’re trying to use something as simple as a modal.  It’s much more complicated than doing it natively, unfortunately.  That or the docs just don’t make it clear.  In fact, I couldn’t get it working!  Check out what I’m talking about [here][5], it’s a little absurd.

For our “additional information” area of the regulation detail screen, some parts have to be mixed with indeterminate HTML.  I found [https://github.com/archriss/react-native-render-html][6] very helpful for this.  In fact, I found it much more easy to use than other libraries and approaches I’ve used in the past (be it Titanium, RN, or Swift / Kotlin).

[1]:	https://www.value.app/feed/zero-to-one-million
[2]:	https://www.bonfire.com/welcome/524402939b6c4/
[3]:	https://www.bonfire.com/fish-rules-swag/
[4]:	https://twitter.com/rblalock/status/1343671601125085184
[5]:	https://reactnavigation.org/docs/modal
[6]:	https://github.com/archriss/react-native-render-html