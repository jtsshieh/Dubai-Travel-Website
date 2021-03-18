import fetch from 'node-fetch';
import { VercelRequest, VercelResponse } from '@vercel/node';

const API_KEY = process.env.OWM_API_KEY;

export default async (req: VercelRequest, res: VercelResponse) => {
	const city = 'Dubai,UAE';
	const result = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
	);

	const data = await result.json();

	res.status(200).json(data);
};
