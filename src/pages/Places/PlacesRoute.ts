import { Place as PlaceIcon } from '@material-ui/icons';
import { PalmJumeirahRoute } from './PalmJumeirah';
import { BurjAlArabRoute } from './BurjAlArab';
import { RouteWithChildren } from '../../components/RouteConstants';
import { DowntownDubaiRoute } from './DowntownDubaiRoute';

export const PlacesRoute: RouteWithChildren = {
	name: 'Places',
	path: '/places',
	icon: PlaceIcon,
	children: [PalmJumeirahRoute, BurjAlArabRoute, DowntownDubaiRoute],
};
