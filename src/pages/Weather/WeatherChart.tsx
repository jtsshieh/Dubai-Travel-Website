import { Chart } from 'react-google-charts';
import {
	CircularProgress,
	makeStyles,
	Typography,
	useTheme,
} from '@material-ui/core';
import { ChartWrapperOptions } from 'react-google-charts/dist/types';

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

const useStyles = makeStyles((theme) => ({
	mainContent: {
		width: '100%',
		height: '100%',
	},
	loader: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

export function WeatherChart() {
	const theme = useTheme();
	const classes = useStyles();

	const chartTextStyle = {
		color: theme.palette.text.primary,
		italic: false,
		fontName: theme.typography.fontFamily,
	};

	const axisOptions = {
		titleTextStyle: chartTextStyle,
		gridlines: {
			color: theme.palette.text.primary,
		},
		textStyle: chartTextStyle,
	};

	const options: ChartWrapperOptions['options'] = {
		colors: [theme.palette.primary.main],
		chartArea: {
			width: '90%',
			top: 20,
		},
		backgroundColor: 'transparent',
		hAxis: {
			...axisOptions,
			title: 'Month',
		},
		vAxis: {
			...axisOptions,
			title: 'Temperature (Fahrenheit)',
		},
		legend: 'none',
	};

	return (
		<>
			<Typography variant="h6">Weather History for Dubai</Typography>
			<div className={classes.mainContent}>
				<Chart
					width="100%"
					height="100%"
					chartType="CandlestickChart"
					loader={
						<div className={classes.loader}>
							<CircularProgress />
						</div>
					}
					data={chartData}
					options={options}
				/>
			</div>
		</>
	);
}
