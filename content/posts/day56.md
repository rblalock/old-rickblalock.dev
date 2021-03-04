---
title: Fish Rules Day 56
date: 03-04-2021
published: true
---

“Salary, a drug they give you to forget your dreams”

https://twitter.com/rblalock/status/1367484587836911622?s=20

## Biz

Worked on some new partnership offerings we might put in a subscription plan for users.

Worked on how we might do “classifieds” (For lack of a better term) for local stores, fish guides, and more.

Worked on the investment deck a little for a meeting tomorrow.

Albrey is going fishing with his brother (Deer Meat for Dinner YouTube guy) tomorrow.  We snuck an in-app message on a certain species they’re fishing for, just for him.  Hopefully it makes it on the show.  :-)

## Marketing / Customer Management

Ohhhhh the woes of ratings and review management.  Lots of 5 star reviews…and then there’s that 1 star review and I’m not sure how to make the customer happy yet…and it just eats at me all day.

## Dev

Lots of work in our admin area, getting our app ready for the new version, etc.  

Here are the internal notes for everything new in this version that was submitted to the App Store today:

In this build:
- A fixed in-app message where no location is applied.  To test, go to African Pompano
- Classifieds.  To test: set location to Jupiter, tap on G. or L. Amberjack.  Go to admin to change classifieds, add new ones, etc.  change location and classifieds in Jupiter shouldn't show up (50km radius of user is where we search)
- Make some things bounce (animation improvements)
- Tag disclaimer
- How we tell the user there's a db update has changed UI wise
- Tweaks to how we download db
- List optimizations (please test the list with images and scroll really fast all the way down and up)
- In app messages now read from our database so we can update on the fly.  To try a new message, go to admin app and add a message.
- In app messages now can have multiple messages for one reg/species/location
- Update SDK's and analytics sdks
- Delete confirmation dialog for deleting a trip and log
- Add missing synonyms in the species list when logging a fish
- Add keyboard button to dismiss
- Scroll to top when searching list
- Fix email login overlap and trip notes overlap
- Fix keyboard spacing / padding in some cases
- Hide image of fish log if offline and can't retrieve them
- Channels / notifications now will be saved to profile when tapping on them
- Adjust when location bar is visible for smaller screens
- Reduce feature flag cache time
- Adjust search threshold weighting