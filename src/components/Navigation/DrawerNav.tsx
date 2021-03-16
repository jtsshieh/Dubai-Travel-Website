import {
	Drawer,
	Hidden,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	SwipeableDrawer,
	Toolbar,
} from '@material-ui/core';
import { NavLink, useLocation } from 'react-router-dom';
import { routes } from '../RouteConstants';
import { createElement } from 'react';

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
	const location = useLocation();

	const drawer = (
		<>
			<Toolbar />
			<div className={classes.drawerContainer}>
				<List>
					{routes.map((route) => (
						<ListItem
							selected={location.pathname === route.path}
							button
							component={NavLink}
							to={route.path}
							key={route.name}
							onClick={() => (mobileOpen ? toggleDrawer() : undefined)}
						>
							<ListItemIcon children={createElement(route.icon)} />
							<ListItemText primary={route.name} />
						</ListItem>
					))}
				</List>
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
