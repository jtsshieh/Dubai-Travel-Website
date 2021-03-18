import { useEffect, useState } from 'react';
import {
	CircularProgress,
	Grid,
	makeStyles,
	Typography,
	useMediaQuery,
	useTheme,
} from '@material-ui/core';
import { grey, orange } from '@material-ui/core/colors';
import {
	mdiMoonFull,
	mdiSnowflake,
	mdiWeatherCloudy,
	mdiWeatherLightningRainy,
	mdiWeatherPartlyCloudy,
	mdiWeatherPouring,
	mdiWeatherRainy,
	mdiWeatherWindy,
} from '@mdi/js';
import Icon from '@mdi/react';

const useStyles = makeStyles((theme) => ({
	card: {
		padding: theme.spacing(4),
		height: '100%',
	},
	icon: {
		fontSize: '8rem',
		[theme.breakpoints.down('xs')]: {
			fontSize: '4rem',
		},
	},
}));

export function WeatherCard() {
	const [data, setData] = useState<any>();
	const classes = useStyles();
	const theme = useTheme();
	const matched = useMediaQuery(theme.breakpoints.down('xs'));

	const iconMap: Record<string, string> = {
		'01': mdiMoonFull,
		'02': mdiWeatherPartlyCloudy,
		'03': mdiWeatherCloudy,
		'04': mdiWeatherCloudy,

		'09': mdiWeatherPouring,
		'10': mdiWeatherRainy,
		'11': mdiWeatherLightningRainy,
		'13': mdiSnowflake,
		'50': mdiWeatherWindy,
	};

	useEffect(() => {
		fetch('/api/getWeatherData')
			.then((data) => data.json())
			.then(setData);
	}, []);

	if (!data) return <CircularProgress />;
	return (
		<Grid container className={classes.card}>
			<Grid item xs={12}>
				<Typography variant="h6">
					Current Weather in Dubai, United Arab Emirates
				</Typography>
			</Grid>
			<Grid item xs={12} container spacing={4} justify="center">
				<Grid item>
					<Icon
						path={iconMap[(data.weather[0].icon as string).substring(0, 2)]}
						color={data.weather[0].icon.endsWith('d') ? orange[500] : grey[500]}
						size={matched ? '4rem' : '8rem'}
					/>
				</Grid>
				<Grid item>
					<Typography variant={matched ? 'h2' : 'h1'}>
						{data.main.temp.toFixed(0)}° F
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h6">{data.weather[0].main}</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
}
