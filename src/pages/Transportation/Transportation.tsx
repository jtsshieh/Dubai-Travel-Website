import ReactMarkdown from 'react-markdown';
import EtihadFlight from '../../images/etihad_flight.jpg';
import renderers from '../../MaterialMDRenderer';
import { Card, CardContent, CardMedia, makeStyles } from '@material-ui/core';
import { Flight as FlightIcon } from '@material-ui/icons';
import Airplane from '../../images/airplane.jpg';

const article = `Getting to Dubai is quite simple. The international airport, [Dubai International](https://www.dubaiairports.ae/), is a hub for Emirates, which flies to many destinations. There is a high likelihood that there will be a direct flight from your airport to Dubai.  

<br>

An alternative option to get to Dubai is to fly to [Abu Dhabi Airport](https://www.abudhabiairport.ae/en). Abu Dhabi is a neighboring city to Dubai and has its own International airport. Abu Dhabi International is a hub for Etihad, which also flies to many destinations. 

<br>

If you have the chance, book a flight that will arrive or leave Dubai during the day. You won't regret viewing Dubai from an aerial view. 
`;

const useStyles = makeStyles({
	card: {
		maxWidth: 345,
	},
	cardContent: {
		display: 'flex',
		justifyContent: 'center',
	},
});

export function Transportation() {
	const classes = useStyles();

	return (
		<div>
			<ReactMarkdown escapeHtml={false} renderers={renderers}>
				{article}
			</ReactMarkdown>

			<br />

			<Card className={classes.card}>
				<CardMedia
					component="img"
					alt="Etihad Flight"
					image={EtihadFlight}
					title="Etihad Flight"
				/>
				<CardContent className={classes.cardContent}>
					This is an Etihad Flight
				</CardContent>
			</Card>
		</div>
	);
}

export const TransportationRoute = {
	name: 'Transportation',
	path: '/transportation',
	component: Transportation,
	icon: FlightIcon,
	headerImage: Airplane,
};
