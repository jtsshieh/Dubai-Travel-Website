import {
	Drawer,
	Hidden,
	List,
	makeStyles,
	SwipeableDrawer,
	Toolbar,
} from '@material-ui/core';
import {
	APP_ROUTES,
	AppRoute,
	isRouteWithChildren,
	isTopRoute,
} from '../RouteConstants';
import { DrawerCollapsable } from './DrawerCollapsable';
import { DrawerItem } from './DrawerItem';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	drawer: {
		[theme.breakpoints.up('md')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: 'auto',
	},
}));

interface DrawerNavProps {
	mobileOpen: boolean;
	toggleDrawer: () => void;
}

export function DrawerNav({ mobileOpen, toggleDrawer }: DrawerNavProps) {
	const classes = useStyles();

	const generateListItems = (routes: AppRoute[], baseRoute: string = '') => {
		return routes.map((route) => {
			if (isTopRoute(route)) {
				return (
					<DrawerItem
						baseRoute={baseRoute}
						route={route}
						mobileOpen={mobileOpen}
						toggleDrawer={toggleDrawer}
					/>
				);
			} else if (isRouteWithChildren(route)) {
				return (
					<DrawerCollapsable route={route}>
						{generateListItems(route.children, baseRoute + route.path)}
					</DrawerCollapsable>
				);
			}
			return <></>;
		});
	};

	const drawer = (
		<>
			<Toolbar />
			<div className={classes.drawerContainer}>
				<List>{generateListItems(APP_ROUTES)}</List>
			</div>
		</>
	);

	return (
		<>
			<Hidden mdUp implementation="css">
				<SwipeableDrawer
					className={classes.drawer}
					variant="temporary"
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true,
					}}
					open={mobileOpen}
					onOpen={toggleDrawer}
					onClose={toggleDrawer}
				>
					{drawer}
				</SwipeableDrawer>
			</Hidden>
			<Hidden smDown implementation="css">
				<Drawer
					className={classes.drawer}
					classes={{
						paper: classes.drawerPaper,
					}}
					variant="permanent"
				>
					{drawer}
				</Drawer>
			</Hidden>
		</>
	);
}
