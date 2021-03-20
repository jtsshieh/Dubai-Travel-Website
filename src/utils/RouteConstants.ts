import { SvgIconComponent } from '@material-ui/icons';

import { HomeRoute } from '../pages/Home/Home';
import { WeatherRoute } from '../pages/Weather/Weather';
import { TransportationRoute } from '../pages/Transportation/Transportation';
import { PlacesRoute } from '../pages/Places/Places';
export type AppRoute = RouteWithChildren | TopRoute;

interface BaseRoute {
	name: string;
	path: string;
	icon?: SvgIconComponent;
	header?: Header;
}

export interface Header {
	image: string;
	credits?: ImageCredits;
}

interface ImageCredits {
	author: string;
	authorLink: string;
	platform: string;
	platformLink: string;
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
export type DrawerItem = Divider | Subheader | Link;

export function isDivider(link: DrawerItem): link is Divider {
	return link.type === 'divider';
}

export function isSubheader(link: DrawerItem): link is Subheader {
	return link.type === 'subheader';
}

export function isLink(link: DrawerItem): link is Link {
	return link.type === 'link';
}

export const DRAWER_ITEMS: DrawerItem[] = [
	{ type: 'link', route: HomeRoute },
	{ type: 'divider' },
	{ type: 'subheader', text: 'Getting Ready' },
	{ type: 'link', route: WeatherRoute },
	{ type: 'link', route: TransportationRoute },
	{ type: 'divider' },
	{ type: 'subheader', text: 'Things to Do' },
	{ type: 'link', route: PlacesRoute },
];

export const APP_ROUTES: AppRoute[] = DRAWER_ITEMS.filter(isLink).map(
	(link) => link.route
);
