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
	DRAWER_LINKS,
	DrawerLink,
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

	const parseDrawerLinks = (drawerLinks: DrawerLink[]) => {
		return drawerLinks.map((link) => {
			if (link.type === 'divider') {
				return <Divider />;
			} else if (link.type === 'subheader') {
				return <ListSubheader>{link.text}</ListSubheader>;
			} else if (link.type === 'link') {
				return generateListItem(link.route);
			}
			return <></>;
		});
	};

	const generateListItem = (route: AppRoute, baseRoute: string = '') => {
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
				<List>{parseDrawerLinks(DRAWER_LINKS)}</List>
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
