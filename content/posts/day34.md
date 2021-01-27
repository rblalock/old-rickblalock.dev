---
title: Fish Rules Day 34
date: 01-26-2021
published: true
---

Idea for the day: **LaaS** - [“Lava lamps as a service”][1]

## Business

A HUGE company in the outdoor industry wants to meet with us about ads in the app, on Thursday.

## Dev

[This][2] proved helpful today.  Firebase, when offline, was running crazy slow.  By toggling it’s network settings to offline, it made it work smoothly again.

The [other Firebase gotcha][3] with RN today revolves around the promise for save/delete, etc. not being returned when in offline mode.  I simply wrapped the check in an online check, if offline, then return a promise that doesn’t do anything.  Worked fine.

Work up early today to get some v6 done, because I don’t the commercial app was going to take up a lot of my day.  Some v6 progress:
- Handle offline use cases (see the above issues I ran in to)
- GPS is on check (which now I’m seeing doesn’t work the way I intended…argh)
- Fixed race condition on cold start of a fresh install
- Swapped out icon and splash screen

Lots of work on the commercial app this afternoon, based on beta users feedback within the fed. government:
- Alphabetize species
- Add top level menu to easily get to the area restrictions information
- Added messaging, analytics, etc.
- Removed species scientific names in additional information
- Temporarily leaving seasons in the additional information and hiding the seasons box until it is in fish management.
- Fuzzy search for species tweaked so the closer matching results appear at the top
- Fixed visual annoyance when tapping on a species that only is in one zone, would show that zone when navigating back
- Spelling Corrections
- Permits sorts alphabetically
- Made it more clear you can tap back when on the add a permit screen (cancel adding a permit)
- Fixed crashing issues with Spiny Lobster
- Added new Gear Constraints area in the “general information”


[1]:	https://www.zdnet.com/google-amp/article/how-lava-lamps-are-used-to-encrypt-the-internet/
[2]:	https://github.com/invertase/react-native-firebase/issues/3491#issuecomment-658245828
[3]:	https://github.com/invertase/react-native-firebase/issues/206#issuecomment-387015497