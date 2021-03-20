import { createElement, ReactNode, useState } from 'react';
import {
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { AppRoute } from '../../utils/RouteConstants';
import clsx from 'clsx';

interface DrawerCollapsableProps {
	route: AppRoute;
	children: ReactNode;
	baseRoute: string;
}

interface Props {
	nestingLevel: number;
}

const useStyles = makeStyles((theme) => ({
	nested: (props: Props) =>
		props.nestingLevel - 1 > 0
			? {
					paddingLeft: theme.spacing((props.nestingLevel - 1) * 4),
			  }
			: {},
	listItem: {
		borderRadius: '0 2rem 2rem 0',
	},
}));

export function DrawerCollapsable({
	route,
	children,
	baseRoute,
}: DrawerCollapsableProps) {
	const path = baseRoute + route.path;
	const [collapsed, setCollapsed] = useState(true);
	const classes = useStyles({ nestingLevel: (path.match(/\//g) || []).length });

	return (
		<>
			<ListItem
				key={route.name}
				button
				onClick={() => setCollapsed(!collapsed)}
				className={clsx(classes.listItem, classes.nested)}
			>
				{route.icon && <ListItemIcon children={createElement(route.icon)} />}
				<ListItemText primary={route.name} />
				{!collapsed ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={!collapsed} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{children}
				</List>
			</Collapse>
		</>
	);
}
