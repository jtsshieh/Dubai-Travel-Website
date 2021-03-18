import ReactMarkdown from 'react-markdown';
import renderers from '../../MaterialMDRenderer';
import { Card, makeStyles, Typography } from '@material-ui/core';
import { WeatherChart } from './WeatherChart';
import { WbSunny } from '@material-ui/icons';
import WeatherHeader from '../../images/weather.jpg';
import { useEffect, useState } from 'react';

const article = `The weather in Dubai is very warm. You'll find the most comfortable temperatures during the months of November to March. During those months, you can expect low temperatures of around 60 degrees Fahrenheit and highs of 80 to 90 degrees Fahrenheit. There is also little to no precipitation. 

<br>

If you do, however, choose to go to Dubai in the summer, you can expect temperatures upward of 110 degrees Fahrenheit and lows of around 90 degrees Fahrenheit. In these temperatures, it is recommended that you stay indoors.

<br>

Most buildings in Dubai have air conditioning so you are able to wear comfortable clothing. However, the United Arab Emirates does have clothing guidelines as they are a muslim country.
`;

const useStyles = makeStyles({
	card: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: 400,
	},
});

export function Weather() {
	const classes = useStyles();
	const [data, setData] = useState<any>();
	useEffect(() => {
		fetch('/api/getWeatherData')
			.then((data) => data.json())
			.then(setData);
	}, []);

	return (
		<div>
			{data && (
				<Typography variant="body1">
					Current Temperature: {data.main.temp.toFixed(0)}° Fahrenheit
				</Typography>
			)}
			<br />
			<ReactMarkdown escapeHtml={false} renderers={renderers}>
				{article}
			</ReactMarkdown>
			<br />
			<Card className={classes.card}>
				<WeatherChart />
			</Card>
		</div>
	);
}
export const WeatherRoute = {
	name: 'Weather',
	path: '/weather',
	component: Weather,
	icon: WbSunny,
	headerImage: WeatherHeader,
};
