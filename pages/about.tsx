import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import remark from 'remark';
import html from 'remark-html';
import remarkheadings from 'remark-autolink-headings';
import slug from 'remark-slug';

import Card from '../components/Card';
import Layout from '../components/Layout';

const AboutPage = (props: {
	content: string;
}) => {
	return (
		<>
			<Head>
				<title>About Rick Blalock</title>
				<meta name="title" content="About Rick Blalock" />
				<meta name="description" content="About Rick Blalock" />

				<meta property="og:type" content="website" />
				<meta property="og:title" content="About Rick Blalock" />
				<meta property="og:description" content="About Rick Blalock" />
				<meta property="og:image" content="https://images.unsplash.com/photo-1456023054428-0f2118ef3180?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80" />

				<meta property="twitter:card" content="" />
				<meta property="twitter:url" content="About Rick Blalock" />
				<meta property="twitter:title" content="About Rick Blalock" />
				<meta property="twitter:description" content="About Rick Blalock" />
				<meta property="twitter:image" content="https://images.unsplash.com/photo-1456023054428-0f2118ef3180?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80" />
			</Head>
			<Layout>
				<div className="mx-auto px-5 lg:px-0 w-full lg:w-1/2">
					<div className="flex flex-col space-y-10 mb-5">
						<Card
							title="About this site (and me)"
							content={props.content}
						/>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
	const processedContent = remark()
		.use(slug)
		.use(html)
		.processSync(content);

	return {
		props: {
			content: processedContent.toString()
		},
	}
};

const content = `
This site is a random journal of things I do during a given day.  Don't expect excellent spell check,
don't expect amazing writing composition, etc.  It's literally a log of my day in almost a bulleted list form. 
I do, however supply interesting things I've read, insight in to day to day things that have happened while working on
...all the things.

----

- 🚀  [Friction Log](https://frictionlog.com/)
- 🐠  [Fish Rules](https://fishrulesapp.com/)
- [Twitter](https://twitter.com/rblalock)
- [LinkedIn](https://www.linkedin.com/in/rickblalock/)

----

### 🚀  Some places I've been

- [Appcelerator](https://appcelerator.com)
- [Pinpoint](https://pinpoint.com)
- [IBM](https://ibm.com)
- [Levatas](https://levatas.com)

----

### 🔬  Fun things I'm using right now

- [Vercel](https://vercel.com)
- [NextJS](https://nextjs.com)
- [GraphCMS](https://graphcms.com)
- [Swift & SwiftUI](https://developer.apple.com/xcode/swiftui/)
- [Firebase](https://firebase.com)

----

### 🗺️  Fun things I've done

#### 🐠 Fish Rules

[Fish Rules](https://fishrulesapp.com) simplifies saltwater fishing regulations into an easy to understand format. With a glance, know if a fish is in season, how many you can keep, how big they have to be, and more.

Fish Rules has grown to 200,000 MAU's (monthly active users) and is the official app of NOAA and a few state agencies.

#### 🐉  Dragon Shout App

Dragon Shout App was a fun project turned viral and featured on most major gaming websites and magazines. The app was a companion app for Skyrim and the Elder Scrolls games.

The app was downloaded over 500,000 times and over 100,000 registered users contributed to the community every day with stories and comments about their adventures.

#### 👨‍💻  1st Place - Palm Beach Hackathon

The goal for this entry is to creatively solve the River Center's and the Science Center's need to have interactive, interesting exhibits while getting feedback from visitors.

The entry walks visitors through a guided tour of exhibits, using artificial intelligence (IBM Watson), to best choose which exhibits match visitors' interests. Visitors are able to talk to a virtual guide and be directed to their interest, audibly. The virtual guide can also ask the visitor questions while at an exhibit, thus getting valuable feedback. The virtual guide will store the feedback along with a tone analysis of the visitor to determine if they were confused, happy, intrigued, angry, while at the exhibit.

#### 👨‍🚀  Winner & International Honorable Mention - NASA Space Apps Challenge

1 of 4 winners of the 170 virtual projects submitted to NASA's space app challenge.

- [NASA Link](https://open.nasa.gov/blog/virtual-winners/)
- [Video of the project](https://vimeo.com/64515087)
- [The Verge article](https://www.theverge.com/2013/4/29/4270734/nasa-space-apps-challenge-hackers-2013)

#### 🪓  1st place - Wufoo API Competition

WuFoo API 1st place winner (I won a battle axe!)
`;
