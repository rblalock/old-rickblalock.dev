import React from 'react';

interface CardProps {
	title: string;
	content: string;
}
const Card = (props: CardProps) => {
	return (
		<div className="w-full rounded-xl bg-white dark:bg-black shadow border border-gray-100 dark:border-gray-900">
			<h3 className="text-xl text-gray-700 dark:text-gray-300 font-bold px-6 pt-6 pb-4 border-b border-gray-100 dark:border-gray-900">
				{props.title}
			</h3>
			<div
				className="p-6 prose-sm prose-blue dark:text-gray-200"
				dangerouslySetInnerHTML={{
					__html: props.content || ''
				}}
			/>
		</div>
	);
};

export default Card;