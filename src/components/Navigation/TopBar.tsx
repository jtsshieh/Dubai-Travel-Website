import {
	AppBar,
	IconButton,
	makeStyles,
	Toolbar,
	Tooltip,
	Typography,
} from '@material-ui/core';
import { Brightness3, WbSunny, Menu } from '@material-ui/icons';
import React, { useContext } from 'react';
import { ThemeSwitcherContext } from '../ThemeSwitcherContext';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		backgroundColor: theme.palette.background.default,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	menuButton: {
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	navbarPart: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
	},
	left: {
		composes: '$navbarPart',
		justifyContent: 'flex-start',
	},
	right: {
		composes: '$navbarPart',
		justifyContent: 'flex-end',
	},
}));

interface TopBarProps {
	toggleDrawer: () => void;
}

export function TopBar({ toggleDrawer }: TopBarProps) {
	const classes = useStyles();

	const { darkTheme, setDarkTheme } = useContext(ThemeSwitcherContext);
	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<div className={classes.left}>
					<Tooltip title="Open Drawer">
						<IconButton
							color="inherit"
							aria-label="Open Drawer"
							edge="start"
							onClick={toggleDrawer}
							className={classes.menuButton}
						>
							<Menu />
						</IconButton>
					</Tooltip>
					<Typography variant="h6" noWrap>
						Dubai
					</Typography>
				</div>
				<div className={classes.right}>
					<Tooltip title="Toggle Dark/Light Theme">
						<IconButton
							onClick={() => setDarkTheme(!darkTheme)}
							aria-label="Toggle Dark/Light Theme"
						>
							{darkTheme ? <WbSunny /> : <Brightness3 />}
						</IconButton>
					</Tooltip>
				</div>
			</Toolbar>
		</AppBar>
	);
}
