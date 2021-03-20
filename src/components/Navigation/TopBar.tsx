import {
	AppBar,
	IconButton,
	makeStyles,
	Toolbar,
	Tooltip,
	Typography,
} from '@material-ui/core';
import { Brightness3, WbSunny, Menu } from '@material-ui/icons';
import { useContext } from 'react';
import { ThemeSwitcherContext } from '../ThemeSwitcherContext';
import Logo from '../../images/logo192.png';

const useStyles = makeStyles((theme) => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	menuButton: {
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	logo: {
		height: theme.spacing(6),
		marginRight: theme.spacing(2),
	},
	right: {
		marginLeft: 'auto',
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
				<img src={Logo} alt="logo" className={classes.logo} />
				<Typography variant="h6" noWrap>
					Dubai Travel
				</Typography>

				<Tooltip title="Toggle Dark/Light Theme" className={classes.right}>
					<IconButton
						onClick={() => setDarkTheme(!darkTheme)}
						aria-label="Toggle Dark/Light Theme"
					>
						{darkTheme ? <WbSunny /> : <Brightness3 />}
					</IconButton>
				</Tooltip>
			</Toolbar>
		</AppBar>
	);
}
