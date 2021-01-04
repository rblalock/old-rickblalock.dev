import fs from 'fs';
import path from 'path';
import remark from 'remark';
import matter from 'gray-matter';
import html from 'remark-html';
import remarkheadings from 'remark-autolink-headings';
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

const processMarkdown = (content: string) => {
	const processedContent = remark()
		// .use(bracketedSpans)
		.use(slug)
		.use(remarkheadings, {
			behavior: 'wrap'
		})
		.use(html)
		.processSync(content);

	return processedContent.toString();
};

export const getPosts = async () => {
	const fileNames = fs.readdirSync(contentDirectory);

	const allPostsData = fileNames.map(fileName => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '')

		// Read markdown file as string
		const fullPath = path.join(contentDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Parse the content data
		const processedContent = processMarkdown(matterResult.content);

		// Combine the data with the id
		return {
			...matterResult.data as Post,
			id,
			timestamp: new Date(matterResult.data.date).getTime(),
			content: processedContent
		};
	});

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

export const getPostById = (id: string | string[]) => {
	const fullPath = path.join(contentDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = processMarkdown(matterResult.content);
	const post = matterResult.data as Post;

	// Combine the data with the id
	return {
		...post,
		id,
		content: processedContent
	};
};
