import { Place as PlaceIcon } from '@material-ui/icons';
import { PalmJumeirah } from './PalmJumeirah';
import PalmJumeirahImage from '../../images/palm_jumeirah.jpg';

export const PlacesRoute = {
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
};
