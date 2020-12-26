import React from 'react';

interface CardProps {
	title: string;
	content: string;
	date: string;
}
const Card = (props: CardProps) => {
	return (
		<div className="w-full rounded-xl bg-white dark:bg-black shadow border border-gray-100 dark:border-gray-900">
			<h3 className="text-3xl text-gray-700 dark:text-gray-300 font-bold px-6 pt-6 pb-4 border-b border-gray-100 dark:border-gray-900 md:flex content-center align-middle items-center">
				<span className="flex-1">{props.title}</span>
				<span className="text-sm text-gray-400 block">{props.date}</span>
			</h3>
			<div
				className="p-6 prose prose-yellow dark:text-gray-200 break-words"
				dangerouslySetInnerHTML={{
					__html: props.content || ''
				}}
			/>
		</div>
	);
};

export default Card;