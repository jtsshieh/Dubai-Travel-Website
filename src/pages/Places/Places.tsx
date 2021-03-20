import { Place as PlaceIcon } from '@material-ui/icons';
import { BurjAlArab } from './data/BurjAlArab';
import { TopRoute } from '../../utils/RouteConstants';
import { Grid, makeStyles } from '@material-ui/core';
import { PlaceCard, PlaceCardProps } from './PlaceCard';
import { BurjKhalifa } from './data/BurjKhalifa';
import { PalmJumeirah } from './data/PalmJumeirah';
import DubaiImage from '../../images/dubai.jpg';
import { DubaiFountains } from './data/DubaiFountains';
import { SheikhZayedMosque } from './data/SheikhZayedMosque';

const useStyles = makeStyles({
	gridItem: {
		display: 'flex',
		flexDirection: 'column',
	},
});

export function Places() {
	const classes = useStyles();

	const places: PlaceCardProps[] = [
		BurjAlArab,
		BurjKhalifa,
		PalmJumeirah,
		DubaiFountains,
		SheikhZayedMosque,
	];

	return (
		<Grid container spacing={4} alignItems="stretch">
			{places.map(({ name, header, text, link }) => (
				<Grid
					item
					md={4}
					sm={6}
					xs={12}
					className={classes.gridItem}
					key={name}
				>
					<PlaceCard name={name} header={header} text={text} link={link} />
				</Grid>
			))}
		</Grid>
	);
}

export const PlacesRoute: TopRoute = {
	name: 'Places',
	path: '/places',
	icon: PlaceIcon,
	component: Places,
	header: {
		image: DubaiImage,
		credits: {
			authorLink:
				'https://unsplash.com/@david__r?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
			author: 'David Rodrigo',
			platformLink:
				'https://unsplash.com/s/photos/dubai?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
			platform: 'Unsplash',
		},
	},
};
