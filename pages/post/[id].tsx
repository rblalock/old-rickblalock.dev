import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { getPosts, Post } from '../../data/posts';
import { truncateString } from '../../utils';

interface PostPageProps {
	post?: Post;
	previous?: Post;
	next?: Post;
}
const PostPage = (props: PostPageProps) => {
	const { post, next, previous } = props;
	const router = useRouter();
	let loading = false;

	if (router.isFallback) {
		loading = true;
	}

	return (
		<>
			<Head>
				<title>{post?.title}</title>
				<meta name="title" content={post?.title} />
				<meta name="description" content={truncateString(post?.content.replace(/(<([^>]+)>)/ig, '') || '', 200)} />

				<meta property="og:type" content="website" />
				<meta property="og:url" content={`/post/${post?.id}`} />
				<meta property="og:title" content={post?.title} />
				<meta property="og:description" content={truncateString(post?.content.replace(/(<([^>]+)>)/ig, '') || '', 200)} />
				<meta property="og:image" content="https://images.unsplash.com/photo-1456023054428-0f2118ef3180?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80" />

				<meta property="twitter:card" content="" />
				<meta property="twitter:url" content={`/post/${post?.id}`} />
				<meta property="twitter:title" content={post?.title} />
				<meta property="twitter:description" content={truncateString(post?.content.replace(/(<([^>]+)>)/ig, '') || '', 200)} />
				<meta property="twitter:image" content="https://images.unsplash.com/photo-1456023054428-0f2118ef3180?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80" />
			</Head>
			<Layout>
				<div className="mx-auto px-5 lg:px-0 w-full lg:w-1/2">
					{!loading && (
						<>
							<div className="flex flex-col space-y-10 mb-5">
								<Card
									title={post?.title}
									content={post?.content}
								/>
							</div>

							<div className="flex">
								{previous && (
									<div className="w-full text-left">
										<Link key={previous.id} href="/post/[id]" as={`/post/${previous.id}`}>
											<a href={`/post/${previous.id}`} className="p-3 text-yellow-500 font-bold">
												Back
											</a>
										</Link>
									</div>
								)}

								{next && (
									<div className="w-full text-right">
										<Link key={next.id} href="/post/[id]" as={`/post/${next.id}`}>
											<a href={`/post/${next.id}`} className="p-3 text-yellow-500 font-bold">
												Next
											</a>
										</Link>
									</div>
								)}
							</div>
						</>
					)}
				</div>
			</Layout>
		</>
	)
}

export default PostPage;

export const getStaticProps: GetStaticProps = async (context) => {
	let data, next, previous;
	const posts = await getPosts();

	if (context?.params?.id) {
		console.log('Generating article page: ' + context?.params?.id);
		const id = context?.params?.id;
		data = posts.find((post, idx) => {
			next = posts[idx + 1];
			previous = posts[idx - 1];

			return post.id === id;
		});
	}

	return {
		props: {
			post: data || null,
			next: next || null,
			previous: previous || null,
		},
		revalidate: 120
	}
};

export const getStaticPaths = async () => {
	const posts = await getPosts();

	return {
		paths: posts.map((post) => {			
			return {
				params: {
					id: post.title
				}
			};
		}),
		fallback: true
	};
};
