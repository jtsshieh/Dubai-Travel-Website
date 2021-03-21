import fetch from 'node-fetch';
import { VercelRequest, VercelResponse } from '@vercel/node';

const API_KEY = process.env.OWM_API_KEY;

export default async (req: VercelRequest, res: VercelResponse) => {
	const city = 'Dubai,UAE';
	const result = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
	);

	const data: WeatherResponse = await result.json();

	const response: GetWeatherDataResponse = {
		temp: Math.trunc(data.main.temp),
		icon: data.weather[0].icon,
		condition: data.weather[0].main,
		time: data.dt,
	};

	res.status(200).json(response);
};

interface GetWeatherDataResponse {
	temp: number;
	icon: WeatherIcon;
	condition: string;
	time: number;
}

type IconType = '01' | '02' | '03' | '04' | '09' | '10' | '11' | '13' | '50';
type IconTime = 'd' | 'n';
type WeatherIcon = `${IconType}${IconTime}`;

interface WeatherResponse {
	coord: {
		lon: number;
		lat: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: WeatherIcon;
	}[];
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	clouds: { all: number };
	sys: {
		country: string;
		sunrise: number;
		sunset: number;
	};
	dt: number;
	timezone: number;
	name: string;
}
