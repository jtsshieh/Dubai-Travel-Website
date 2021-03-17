import {
	SvgIconComponent,
	Home as HomeIcon,
	WbSunny,
	Flight as FlightIcon,
	Place as PlaceIcon,
} from '@material-ui/icons';
import { Home } from '../pages/Home/Home';
import { Weather } from '../pages/Weather/Weather';
import { Transportation } from '../pages/Transportation/Transportation';
import DubaiFountains from '../images/dubai_fountain.jpg';
import Airplane from '../images/airplane.jpg';
import WeatherHeader from '../images/weather.jpg';
import { PalmJumeirah } from '../pages/Places/PalmJumeirah';
import PalmJumeirahImage from '../images/palm_jumeirah.jpg';

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
	{
		name: 'Home',
		path: '/',
		component: Home,
		icon: HomeIcon,
		headerImage: DubaiFountains,
	},
	{
		name: 'Weather',
		path: '/weather',
		component: Weather,
		icon: WbSunny,
		headerImage: WeatherHeader,
	},
	{
		name: 'Transportation',
		path: '/transportation',
		component: Transportation,
		icon: FlightIcon,
		headerImage: Airplane,
	},

	{
		name: 'Places',
		path: '/places',
		icon: PlaceIcon,
		children: [
			{
				name: 'Palm Jumeirah',
				path: '/palm',
				component: PalmJumeirah,
				headerImage: PalmJumeirahImage,
			},
		],
	},
];
