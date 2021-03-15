import {
	Drawer,
	Hidden,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Toolbar,
} from '@material-ui/core';
import { NavLink, useLocation } from 'react-router-dom';
import { routes } from '../RouteConstants';
import { createElement } from 'react';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	drawer: {
		[theme.breakpoints.up('sm')]: {
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
	handleDrawerToggle: () => void;
}

export function DrawerNav({ mobileOpen, handleDrawerToggle }: DrawerNavProps) {
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
							onClick={() => (mobileOpen ? handleDrawerToggle() : undefined)}
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
			<Hidden smUp implementation="css">
				<Drawer
					className={classes.drawer}
					variant="temporary"
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true,
					}}
					open={mobileOpen}
					onClose={handleDrawerToggle}
				>
					{drawer}
				</Drawer>
			</Hidden>
			<Hidden xsDown implementation="css">
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
