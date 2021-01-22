---
title: Fish Rules Day 31
date: 01-21-2021
published: true
---

[Strategy turns][1], by _@swyx_ was a great today. _"What got you here won't get you there.”_

## Business

Updated a few existing ads with a new image from an advertiser that re-up’ed for another 6 months.

Met with a non-profit in DC about some ways to get more anglers in 2021 and also potential partnership opportunities.

Reviewed the pipeline with Michael.  Pretty great progress.  $31k in the pipeline at the “negotiation” stage, and that’s with only 30 days-ish worth of effort.

## Dev

Our “report only” species (e.g. Humpback Whale), have to be handled a certain way.  Those logging features are now in (distressed, health, contact #, etc.), which means the v6 re-write has parity with existing features now.

I started wiring up how we do ads.  It was all straightforward until I got to the interstitial ads inside the species list.  Logging impressions was harder than I thought it would be because of how React Native + ListViews re-render the list and rows over and over.  Ok actually it’s not hard, just have to know what to use…there’s a handy dandy _onViewableItemsChanged_ property on the ListView that lets you see what rows are on your screen, so I can use that.  I was a little worried about performance of it though but it really runs smooth on Android and iOS.  I’m going to continue the ad work tomorrow: location specific ads and rotating ad options.

Fixed our social media previews (meta-tags and such)

Fixed a minor trip bug in mobile v6: The “Region” for the map view wasn’t being set right.


[1]:	https://www.swyx.io/strategy-turns/