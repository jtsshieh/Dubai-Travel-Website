import ReactMarkdown from 'react-markdown';
import renderers from '../../MaterialMDRenderer';
import {
	Card,
	CircularProgress,
	makeStyles,
	useTheme,
} from '@material-ui/core';
import { Chart } from 'react-google-charts';
import { ChartWrapperOptions } from 'react-google-charts/dist/types';

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

const chartData = [
	['Month', 'Temperature', '', '', ''],
	['Jan', 61, 61, 76, 76],
	['Feb', 63, 63, 79, 79],
	['Mar', 67, 67, 84, 84],
	['Apr', 74, 74, 92, 92],
	['May', 80, 80, 101, 101],
	['Jun', 85, 85, 104, 104],
	['Jul', 89, 89, 106, 106],
	['Aug', 89, 89, 107, 107],
	['Sep', 84, 84, 103, 103],
	['Oct', 78, 78, 97, 97],
	['Nov', 71, 71, 87, 87],
	['Dec', 64, 64, 80, 80],
];

export function Weather() {
	const classes = useStyles();
	const theme = useTheme();

	const chartTextStyle = {
		color: theme.palette.text.primary,
		italic: false,
		fontName: theme.typography.fontFamily,
	};

	const options: ChartWrapperOptions['options'] = {
		colors: [theme.palette.primary.main],
		chartArea: {
			width: '85%',
		},
		backgroundColor: 'transparent',
		hAxis: {
			title: 'Month',
			titleTextStyle: chartTextStyle,
			gridlines: {
				color: theme.palette.text.primary,
			},
			textStyle: chartTextStyle,
		},
		vAxis: {
			title: 'Temperature (Fahrenheit)',
			titleTextStyle: chartTextStyle,
			gridlines: {
				color: theme.palette.text.primary,
			},
			textStyle: chartTextStyle,
		},
		title: 'Weather history for Dubai, United Arab Emirates',

		titleTextStyle: {
			...chartTextStyle,
			fontSize: 18,
		},
		legend: 'none',
	};

	return (
		<div>
			<ReactMarkdown escapeHtml={false} renderers={renderers}>
				{article}
			</ReactMarkdown>
			<br />
			<Card className={classes.card}>
				<Chart
					width="100%"
					height="100%"
					chartType="CandlestickChart"
					loader={<CircularProgress />}
					data={chartData}
					options={options}
				/>
			</Card>
		</div>
	);
}
