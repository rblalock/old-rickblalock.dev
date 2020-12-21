import Link from 'next/link';
import React from 'react';

interface LayoutProps {
	children: React.ReactChild;
}
const Layout = (props: LayoutProps) => {
	return (
		<div className="mb-20">
			<div className="my-10">
				<h1 className="text-4xl text-center text-gray-700 dark:text-gray-300 flex flex-col m-5">
					<a href="/">Rick Blalock</a>
					<span className="mt-5 text-sm text-gray-300">
						<Link href="/about" as={`/about`}>
							<a href={`/about`} className="text-gray-400">
								About
							</a>
						</Link>
						<span className="mx-2">-</span>
						<a className="text-gray-400" href="https://github.com/rblalock">GitHub</a>
						<span className="mx-2">-</span>
						<a className="text-gray-400" href="https://twitter.com/rblalock">Twitter</a>
					</span>
				</h1>
			</div>

			{props.children}
		</div>
	);
};

export default Layout;
