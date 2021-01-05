import fs from 'fs';
import path from 'path';
import remark from 'remark';
import matter from 'gray-matter';
import html from 'remark-html';
import remarkheadings from 'remark-autolink-headings';
import remarkEmbedder from '@remark-embedder/core';
import oembedTransformer, { Config } from '@remark-embedder/transformer-oembed';
import slug from 'remark-slug';

const contentDirectory = path.join(process.cwd(), 'content/posts');
export interface Post {
	id: string;
	date: string;
	timestamp: number;
	title: string;
	published: boolean;
	content?: string;
}

const processMarkdown = async (content: string) => {
	const processedContent = await remark()
		// .use(bracketedSpans)
		.use(slug)
		.use(remarkheadings, {
			behavior: 'wrap'
		})
		.use(remarkEmbedder, {
			transformers: [
				[
					oembedTransformer,
					{ params: { dnt: true, omit_script: false, widget_type: 'video' } } as Config,
				],
			],
		})
		.use(html)
		.process(content);

	return processedContent.toString();
};

export const getPosts = async () => {
	const fileNames = fs.readdirSync(contentDirectory);
	const allPostsData = [];

	for (const fileName of fileNames) {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '')

		// Read markdown file as string
		const fullPath = path.join(contentDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Parse the content data
		const processedContent = await processMarkdown(matterResult.content);

		// Combine the data with the id
		allPostsData.push({
			...matterResult.data as Post,
			id,
			timestamp: new Date(matterResult.data.date).getTime(),
			content: processedContent
		});
	}

	// Sort posts by date
	return allPostsData
		.filter((post) => post.published)
		.sort((a, b) => {
			if (a.timestamp < b.timestamp) {
				return 1
			} else {
				return -1
			}
		});
};

export const getPostById = async (id: string | string[]) => {
	const fullPath = path.join(contentDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = await processMarkdown(matterResult.content);
	const post = matterResult.data as Post;

	// Combine the data with the id
	return {
		...post,
		id,
		content: processedContent
	};
};
