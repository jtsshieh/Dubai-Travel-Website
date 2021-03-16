import { Link, Typography } from '@material-ui/core';
import { ReactNode } from 'react';

const renderers = {
	paragraph: function ({ children }: { children: ReactNode }) {
		return <Typography variant="body1" children={children} />;
	},
	link: function ({ href, children }: { href: string; children: ReactNode }) {
		return (
			<Link href={href} target="_blank" rel="noopener" children={children} />
		);
	},

	heading: function ({
		level,
		children,
	}: {
		level: 1 | 2 | 3 | 5 | 6;
		children: ReactNode;
	}) {
		return <Typography variant={`h${level}` as const} children={children} />;
	},
};

export default renderers;
