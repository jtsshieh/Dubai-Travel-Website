import {
	SvgIconComponent,
	Home as HomeIcon,
	WbSunny,
	Flight as FlightIcon,
} from '@material-ui/icons';
import { Home } from '../pages/Home/Home';
import { Weather } from '../pages/Weather/Weather';
import { Transportation } from '../pages/Transportation/Transportation';
import DubaiFountains from '../images/dubai_fountain.jpg';
import Airplane from '../images/airplane.jpg';
import WeatherHeader from '../images/weather.jpg';

interface Route {
	name: string;
	path: string;
	component: () => JSX.Element;
	icon: SvgIconComponent;
	headerImage?: string;
}

export const routes: Route[] = [
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
];
