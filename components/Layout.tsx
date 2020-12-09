import React from 'react';

interface LayoutProps {
	children: React.ReactChild;
}
const Layout = (props: LayoutProps) => {
	return (
		<div className="font-mono">
			<div className="my-10">
				<h1 className="text-5xl text-center text-gray-700 dark:text-gray-300 flex flex-col m-5">
					<a href="/">Rick Blalock</a>
					<span className="mt-3 text-sm text-gray-300">
						<a className="text-gray-400" href="https://github.com/rblalock">GitHub</a> - <a className="text-gray-400" href="https://twitter.com/rblalock">Twitter</a>
					</span>
				</h1>
			</div>

			{props.children}
		</div>
	);
};

export default Layout;
