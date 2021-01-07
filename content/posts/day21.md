---
title: Fish Rules Day 21
date: 01-07-2021
published: true
---

Quote of the day goes to Sun Tzu: "Opportunities multiply as they are seized."

## Misc.

UGH…Gusto…c’mon…sometimes they do a great job hand holding…other times not so much.  Had no idea we had to pay the health care provider directly, everything in Gusto seemed to indicate they handle that for you.  Blah.  On top of that, I have no idea what the login is for the health care provider! (Shakes fist).  Had to call them and jump through the hoops.

## Business

Had a great intro call with the CMO of a large lobby group.  The convo. was around getting more people to fish, removing barriers for new anglers, etc.  It immediately spun off several intro emails to other groups, had a chance to talk about Fish Rules and how it fits in with their org, potential advertising opportunities, and more.  She was one of the most pleasant people in this industry I’ve spoken to, to date.

## Dev

Launched a new landing page for [fish.management][1].  This is a website targeted for state agencies and regulation API customers.  Nothing too special but uses our new branding approach.  I’ll swap out the product image once we launch the new fish.management version + v6 of the mobile app.

I got to finally start on the new login stuff in v6.  Started with the biggest bit - magic link auth.  I found [this stack overflow][2] helpful for React native + Firebase.  Things seemed to work without a hitch on iOS.  I haven’t had a chance to test Android but I will tonight.  The web is so much easier to handle than how the mobile platforms handle this.  I think mainly just because the web doesn’t feel so convoluted and proprietary.

[1]:	https://fish.management/
[2]:	https://stackoverflow.com/questions/61564203/how-to-setup-sendsigninlinktoemail-from-firebase-in-react-native