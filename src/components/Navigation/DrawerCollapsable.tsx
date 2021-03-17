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
import { AppRoute } from '../RouteConstants';

interface DrawerCollapsableProps {
	route: AppRoute;
	children: ReactNode;
}

const useStyles = makeStyles({
	listItem: {
		borderRadius: '0 2rem 2rem 0',
	},
});

export function DrawerCollapsable({ route, children }: DrawerCollapsableProps) {
	const [collapsed, setCollapsed] = useState(true);
	const classes = useStyles();

	return (
		<>
			<ListItem
				key={route.name}
				button
				onClick={() => setCollapsed(!collapsed)}
				className={classes.listItem}
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
