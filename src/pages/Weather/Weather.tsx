import ReactMarkdown from 'react-markdown';
import renderers from '../../utils/MaterialMDRenderer';
import { Card, Grid, makeStyles } from '@material-ui/core';
import { WeatherChart } from './WeatherChart';
import { WbSunny } from '@material-ui/icons';
import WeatherHeader from '../../images/weather.jpg';
import { WeatherCard } from './WeatherCard';
import { TopRoute } from '../../utils/RouteConstants';

const article = `The weather in Dubai is very warm. You'll find the most comfortable temperatures during the months of November to March. During those months, you can expect low temperatures of around 60 degrees Fahrenheit and highs of 80 to 90 degrees Fahrenheit. There is also little to no precipitation. 

<br>

If you do, however, choose to go to Dubai in the summer, you can expect temperatures upward of 110 degrees Fahrenheit and lows of around 90 degrees Fahrenheit. In these temperatures, it is recommended that you stay indoors.

<br>

Most buildings in Dubai have air conditioning so you are able to wear comfortable clothing. However, the United Arab Emirates does have clothing guidelines as they are a muslim country.
`;

const useStyles = makeStyles((theme) => ({
	card: {
		padding: theme.spacing(4),
		height: 400,
	},
}));

export function Weather() {
	const classes = useStyles();

	return (
		<>
			<ReactMarkdown escapeHtml={false} renderers={renderers}>
				{article}
			</ReactMarkdown>
			<br />
			<Grid container spacing={4}>
				<Grid item lg={6} md={12} xs={12}>
					<Card className={classes.card}>
						<WeatherChart />
					</Card>
				</Grid>
				<Grid item lg={6} md={12} xs={12}>
					<Card className={classes.card}>
						<WeatherCard />
					</Card>
				</Grid>
			</Grid>
		</>
	);
}
export const WeatherRoute: TopRoute = {
	name: 'Weather',
	path: '/weather',
	component: Weather,
	icon: WbSunny,
	header: { image: WeatherHeader },
};
