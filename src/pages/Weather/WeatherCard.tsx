import { useEffect, useState } from 'react';
import {
	CircularProgress,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';
import { blue, grey, orange } from '@material-ui/core/colors';
import {
	mdiMoonFull,
	mdiMoonWaningCrescent,
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
	icon: {
		fontSize: '8rem',
		[theme.breakpoints.down('xs')]: {
			fontSize: '4rem',
		},
	},
	grid: {
		width: '100%',
		height: '100%',
	},
}));

const iconMap: Record<string, { icon: string; color: string }> = {
	'01d': { icon: mdiMoonFull, color: orange[500] },
	'01n': { icon: mdiMoonWaningCrescent, color: grey[700] },

	'02d': { icon: mdiWeatherPartlyCloudy, color: grey[700] },
	'02n': { icon: mdiWeatherPartlyCloudy, color: grey[700] },

	'03d': { icon: mdiWeatherCloudy, color: grey[700] },
	'03n': { icon: mdiWeatherCloudy, color: grey[700] },

	'04d': { icon: mdiWeatherCloudy, color: grey[700] },
	'04n': { icon: mdiWeatherCloudy, color: grey[700] },

	'09d': { icon: mdiWeatherPouring, color: grey[700] },
	'09n': { icon: mdiWeatherPouring, color: grey[700] },

	'10d': { icon: mdiWeatherRainy, color: grey[700] },
	'10n': { icon: mdiWeatherRainy, color: grey[700] },

	'11d': { icon: mdiWeatherLightningRainy, color: grey[700] },
	'11n': { icon: mdiWeatherLightningRainy, color: grey[700] },

	'13d': { icon: mdiSnowflake, color: grey[700] },
	'13n': { icon: mdiSnowflake, color: blue[200] },

	'50d': { icon: mdiWeatherWindy, color: grey[500] },
	'50n': { icon: mdiWeatherWindy, color: grey[500] },
};

export function WeatherCard() {
	const [data, setData] = useState<any>();
	const classes = useStyles();

	useEffect(() => {
		fetch('/api/getWeatherData')
			.then((data) => data.json())
			.then(setData);
	}, []);

	const time = data ? new Date(data.dt * 1000) : undefined;

	return (
		<>
			<Typography variant="h6">Current Weather in Dubai</Typography>
			<div className={classes.mainContent}>
				{data ? (
					<Grid container spacing={4} className={classes.grid} justify="center">
						<Grid item xs={12}>
							<Typography variant="h6">
								{new Intl.DateTimeFormat('en-US', {
									weekday: 'long',
									hour: 'numeric',
									minute: 'numeric',
									timeZone: 'Asia/Dubai',
								}).format(time)}
								, {data.weather[0].main}
							</Typography>
						</Grid>
						<Grid item>
							<Icon
								path={iconMap[data.weather[0].icon as string].icon}
								color={iconMap[data.weather[0].icon as string].color}
								size="8rem"
							/>
						</Grid>
						<Grid item>
							<Typography variant="h1">
								{data.main.temp.toFixed(0)}° F
							</Typography>
						</Grid>
					</Grid>
				) : (
					<div className={classes.loader}>
						<CircularProgress />
					</div>
				)}
			</div>
		</>
	);
}
