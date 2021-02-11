---
title: Fish Rules Day 44
date: 02-11-2021
published: true
---

## New Friction Log Podcast

Figma from a developer’s POV.

https://twitter.com/frictionlog/status/1359938308646780928

## Biz

Reviewed all the things we have in flight with Michael (ads, gov. Contract leads, photo competition, etc).

Put up a few new ads for the ProStaff subscription.

Talked to a former co-worker about doing conversion optimization for our advertisers since some of them have really great products but really terrible online stores.  We need them to be successful with their click throughs.

## Dev

After the nightmare that was yesterday, I’m now back and business and knocked out a ton of commercial stuff.  Had a great meeting with people in the agency that manages the commercial regs. and got some good feedback too.  It’s so close to being done.  The long list of things done include:

- Prohibited species now have red text in the species list and also on the species detail screen, accompanied by verbiage that we also display in the rec. app.
- I removed the search bar if there are \< 5 species in the list…but I reverted it tonight because it led to some weird UX issues I didn’t like.
- Added images to the pop up for total / fork length.  Outstanding: We need an image for Carapace  length (we actually need this for the rec. app too).  This will be easy to get and will automatically work once we upload the image.
- There now is a “remove” permit icon on the list rows.  
- On Android, long-pressing on a permit row will ask the user if it should be removed from their permits
- Add permit area now is it’s own screen and grouped by agency
- Several lists are now alphabetized
- Lots of back-button handling for Android
- Fixed crash when images on map page are missing and someone taps on it
- Change “General" to “Details"
- Change "Area Restrictions" to "Managed Areas"
- Hide info tile on pop up screens
- Hide gear restrictions
- Remove fishing year defaults if absent
- SERO link
- Tabs now have two lines
- Misc. text corrections

