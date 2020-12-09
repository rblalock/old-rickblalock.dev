import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import { getPosts, Post } from '../data/posts';
import { truncateString } from '../utils';

interface IndexPageProps {
	post?: Post;
	previous?: Post;
}
const IndexPage = (props: IndexPageProps) => {
	return (
		<>
			<Head>
				<title>{props.post?.title}</title>
				<meta name="title" content={props.post?.title} />
				<meta name="description" content={truncateString(props.post?.content || '', 200)} />

				<meta property="og:type" content="website" />
				<meta property="og:url" content={`/post/${props.post?.id}`} />
				<meta property="og:title" content={props.post?.title} />
				<meta property="og:description" content={truncateString(props.post?.content || '', 200)} />
				<meta property="og:image" content="https://images.unsplash.com/photo-1456023054428-0f2118ef3180?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80" />

				<meta property="twitter:card" content="" />
				<meta property="twitter:url" content={`/post/${props.post?.id}`} />
				<meta property="twitter:title" content={props.post?.title} />
				<meta property="twitter:description" content={truncateString(props.post?.content || '', 200)} />
				<meta property="twitter:image" content="https://images.unsplash.com/photo-1456023054428-0f2118ef3180?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80" />
			</Head>
			<Layout>
				<div className="mx-auto w-1/2">
					<div className="flex flex-col space-y-10 mb-5">
						<Card
							title={props.post?.title}
							content={props.post?.content}
						/>
					</div>

					<div className="flex">
						<div className="w-full text-left">
							<Link key={props.previous.id} href="/post/[id]" as={`/post/${props.previous.id}`}>
								<a href={`/post/${props.previous.id}`} className="p-3 text-blue-500 font-bold">
									Previous: <span className="text-blue-300">{props.previous?.title}</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getPosts();

	return {
		props: {
			post: posts[0] || null,
			previous: posts[1] || null
		},
		revalidate: 120
	}
};
