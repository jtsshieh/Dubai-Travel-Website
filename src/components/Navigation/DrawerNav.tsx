import {
	Divider,
	Drawer,
	Hidden,
	List,
	ListSubheader,
	makeStyles,
	SwipeableDrawer,
	Toolbar,
} from '@material-ui/core';
import {
	AppRoute,
	DRAWER_ITEMS,
	DrawerItem,
	isDivider,
	isLink,
	isRouteWithChildren,
	isSubheader,
	isTopRoute,
} from '../../utils/RouteConstants';
import { DrawerCollapsable } from './DrawerCollapsable';
import { DrawerItem as DrawerItemComponent } from './DrawerItem';

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

	const parseDrawerItems = (drawerLinks: DrawerItem[]) => {
		return drawerLinks.map((item, index) => {
			if (isDivider(item)) {
				return <Divider key={index} />;
			} else if (isSubheader(item)) {
				return (
					<ListSubheader disableSticky key={index}>
						{item.text}
					</ListSubheader>
				);
			} else if (isLink(item)) {
				return generateListItem(item.route);
			}
			return <></>;
		});
	};

	const generateListItem = (route: AppRoute, baseRoute: string = '') => {
		if (isTopRoute(route)) {
			return (
				<DrawerItemComponent
					baseRoute={baseRoute}
					route={route}
					mobileOpen={mobileOpen}
					toggleDrawer={toggleDrawer}
					key={route.name}
				/>
			);
		} else if (isRouteWithChildren(route)) {
			return (
				<DrawerCollapsable route={route} key={route.name} baseRoute={baseRoute}>
					{route.children.map((subRoute) => {
						return generateListItem(subRoute, baseRoute + route.path);
					})}
				</DrawerCollapsable>
			);
		}
	};

	const drawer = (
		<>
			<Toolbar />
			<div className={classes.drawerContainer}>
				<List>{parseDrawerItems(DRAWER_ITEMS)}</List>
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
