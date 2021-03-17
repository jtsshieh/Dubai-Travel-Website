import { createElement, ReactNode, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { AppRoute } from '../RouteConstants';

interface DrawerCollapsableProps {
	route: AppRoute;
	children: ReactNode;
}

export function DrawerCollapsable({ route, children }: DrawerCollapsableProps) {
	const [collapsed, setCollapsed] = useState(true);

	return (
		<>
			<ListItem
				key={route.name}
				button
				onClick={() => setCollapsed(!collapsed)}
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
