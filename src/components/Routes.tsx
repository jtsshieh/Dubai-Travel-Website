import { Switch, Route } from 'react-router-dom';
import { Container, makeStyles, Toolbar } from '@material-ui/core';
import {
	APP_ROUTES,
	AppRoute,
	isRouteWithChildren,
	isTopRoute,
} from './RouteConstants';
import { AbstractPage } from './AbstractPage';
import { NotFound } from '../pages/NotFound/NotFound';

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
}));

export function Routes() {
	const classes = useStyles();

	const generateRoutes = (
		routes: AppRoute[],
		basePath: string = ''
	): JSX.Element[] => {
		let result: JSX.Element[] = [];

		routes.forEach((route) => {
			const path = basePath + route.path;
			if (isTopRoute(route)) {
				result.push(
					<Route exact path={path} key={route.name}>
						<AbstractPage route={route} />
					</Route>
				);
			} else if (isRouteWithChildren(route)) {
				result = result.concat(generateRoutes(route.children, path));
			}
		});
		return result;
	};

	return (
		<Container className={classes.content}>
			<Toolbar />
			<Switch>
				{generateRoutes(APP_ROUTES)}
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</Container>
	);
}
