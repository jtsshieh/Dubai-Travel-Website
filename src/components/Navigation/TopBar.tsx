import {
	AppBar,
	IconButton,
	makeStyles,
	Toolbar,
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
		[theme.breakpoints.up('sm')]: {
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
	handleDrawerToggle: () => void;
}

export function TopBar({ handleDrawerToggle }: TopBarProps) {
	const classes = useStyles();

	const { darkTheme, setDarkTheme } = useContext(ThemeSwitcherContext);
	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<div className={classes.left}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<Menu />
					</IconButton>
					<Typography variant="h6" noWrap>
						Dubai
					</Typography>
				</div>
				<div className={classes.right}>
					<IconButton onClick={() => setDarkTheme(!darkTheme)}>
						{darkTheme ? <WbSunny /> : <Brightness3 />}
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	);
}
