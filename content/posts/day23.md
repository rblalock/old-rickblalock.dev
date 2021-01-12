---
title: Fish Rules Day 23
date: 01-11-2021
published: true
---

## Misc.

Switching around the theme’d days this week since Michael is coming in to town.  Moved “sales Mondays” to Wednesday, and marketing to Thursday.  Today is the internal app theme (API’s, website, console, etc.).  Tomorrow will be mobile Tuesday as usual (which will be almost entirely Commercial app work).

## Business

Got a notification from GCP that we’re 90% at our budget for the month (around $500).  [Our biggest cloud expense][1] is image bandwidth and regulation database downloads, believe it or not.  I wish Firebase or GCP would let you see the specifics of the file storage bandwidth.  They just have this really generic “This bucket is at 11TB of bandwidth”.  They also don’t make it easy to determine the size of buckets without reading endless, [super boring docs][2].  I couldn’t figure out how to get in to nested “folder” sizes too.  Really what I’m looking for is which files are using up that bandwidth because it helps me know which version(s) of the app are downloading these files.

Our Fish Rules apparel experiment ended over the weekend.  We put up an ad inside the Fish Rules app (inside a few species pages that aren’t well travelled).  Some info:
- 108 users tapped the ad
- 15 of those users bought something

## Dev

I needed to build out an API documentation site for our customers.  Fortunately, I found Postman’s “public workspace” stuff.  It’s perfect for what I need.  Here are the regulation API docs I whipped up in an hour or two: [http://bit.ly/3oyWNaI][3].  It needs more copy and instruction and some spell check (cringe), but I’ll wrap that up before it’s “official”. :-)

Finally got to use the Vercel integration features.  I installed Sentry and [Lambda.store][4].  Worked fairly well.  There were a few kinks but not bad overall.

I’m now using this cool Redis service called [Lambda.store][5], for our API request rate limiting for 3rd parties.  Really easy to get up and running and works flawlessly.  Going to deploy it tonight and see how it does with our web traffic for a few days before applying it to our 3rd party API consumers.

[1]:	https://twitter.com/rblalock/status/1348630155510624256?s=20
[2]:	https://cloud.google.com/storage/docs/getting-bucket-information
[3]:	http://bit.ly/3oyWNaI
[4]:	lambda.store
[5]:	lambda.store