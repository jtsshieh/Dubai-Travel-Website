import { Switch, Route } from 'react-router-dom';
import { Container, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { routes } from './RouteConstants';
import { createElement } from 'react';

const useStyles = makeStyles((theme) => ({
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		color: theme.palette.text.primary,
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	picture: {
		width: '100%',
		height: '30vh',
		objectFit: 'cover',
		border: '1px solid rgba(0, 0, 0, 0.12)',
	},
}));

export function Routes() {
	const classes = useStyles();

	return (
		<Container className={classes.content}>
			<Toolbar />
			<Switch>
				{routes.map((route) => (
					<Route exact path={route.path} key={route.name}>
						<img
							alt={route.name}
							src={route.headerImage}
							className={classes.picture}
						/>
						<Typography variant="h2" gutterBottom>
							{route.name}
						</Typography>

						{createElement(route.component)}
					</Route>
				))}
			</Switch>
		</Container>
	);
}
