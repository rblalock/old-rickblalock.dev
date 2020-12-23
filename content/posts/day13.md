---
title: Fish Rules Day 13
date: 12-22-2020
published: true
---

Sent out that email I mentioned yesterday to 80k email subscribers, about new web app features.  We’ll see how that impacts things on the web app.

This morning consisted entirely of updating the Commercial app Alpha based on feedback from a call a week ago.  [Here’s a video][1] of it in its current state.  Release notes:
- Area locations now are grouped by a state/region and those without one are lumped in a "General" group
- Search bars are now full width
- Add fuzzy search to species list
- Empty-state instructions on main screen
- Layout tweaks

Built out our sitemap for the web app and was expecting it to take a little longer.  However, I found this [super sweet package][2] for NextJS that makes this so easy.

Our first lead from our new advertiser’s form came in today!

For v6 of the mobile app, got to flesh out more of the location selection UI and functionality:
- React context around the location selection, lat/lon settings, etc.
- UI handling of the location selection
- Caching via AsyncStorage

[1]:	https://twitter.com/rblalock/status/1341385020896927745
[2]:	https://github.com/iamvishnusankar/next-sitemap