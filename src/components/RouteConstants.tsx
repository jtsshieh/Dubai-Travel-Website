import { SvgIconComponent } from '@material-ui/icons';

import { HomeRoute } from '../pages/Home/Home';
import { WeatherRoute } from '../pages/Weather/Weather';
import { TransportationRoute } from '../pages/Transportation/Transportation';
import { PlacesRoute } from '../pages/Places/PlacesRoute';

export type AppRoute = RouteWithChildren | TopRoute;

interface BaseRoute {
	name: string;
	path: string;
	icon?: SvgIconComponent;
	headerImage?: string;
}

export interface TopRoute extends BaseRoute {
	component: () => JSX.Element;
}

export interface RouteWithChildren extends BaseRoute {
	children: AppRoute[];
}

export function isTopRoute(route: AppRoute): route is TopRoute {
	return (route as TopRoute).component !== undefined;
}

export function isRouteWithChildren(
	route: AppRoute
): route is RouteWithChildren {
	return (route as RouteWithChildren).children !== undefined;
}

export const APP_ROUTES: AppRoute[] = [
	HomeRoute,
	WeatherRoute,
	TransportationRoute,
	PlacesRoute,
];

export interface Divider {
	type: 'divider';
}
export interface Subheader {
	type: 'subheader';
	text: string;
}
export interface Link {
	type: 'link';
	route: AppRoute;
}
export type DrawerLink = Divider | Subheader | Link;

export const DRAWER_LINKS: DrawerLink[] = [
	{ type: 'link', route: HomeRoute },
	{ type: 'divider' },
	{ type: 'subheader', text: 'Getting Ready' },
	{ type: 'link', route: WeatherRoute },
	{ type: 'link', route: TransportationRoute },
	{ type: 'divider' },
	{ type: 'subheader', text: 'Things to Do' },
	{ type: 'link', route: PlacesRoute },
];
