import { NavLink, useLocation } from 'react-router-dom';
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
} from '@material-ui/core';
import { createElement } from 'react';
import { AppRoute } from '../RouteConstants';

interface Props {
	nestingLevel: number;
}

const useDrawerItemStyles = makeStyles((theme) => ({
	nested: (props: Props) =>
		props.nestingLevel - 1 > 0
			? {
					paddingLeft: theme.spacing((props.nestingLevel - 1) * 8),
			  }
			: {},
}));

interface DrawerItemProps {
	baseRoute: string;
	route: AppRoute;
	mobileOpen: boolean;
	toggleDrawer: () => void;
}

export function DrawerItem({
	baseRoute,
	route,
	mobileOpen,
	toggleDrawer,
}: DrawerItemProps) {
	const path = baseRoute + route.path;
	const location = useLocation();

	const classes = useDrawerItemStyles({
		nestingLevel: (path.match(/\//g) || []).length,
	});

	return (
		<ListItem
			selected={location.pathname === path}
			button
			component={NavLink}
			to={path}
			key={route.name}
			onClick={() => (mobileOpen ? toggleDrawer() : undefined)}
			className={classes.nested}
		>
			{route.icon && <ListItemIcon children={createElement(route.icon)} />}
			<ListItemText primary={route.name} />
		</ListItem>
	);
}
