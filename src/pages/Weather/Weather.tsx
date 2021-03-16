import ReactMarkdown from 'react-markdown';
import renderers from '../../MaterialMDRenderer';
import { Card, makeStyles, useTheme } from '@material-ui/core';

const article = `The weather in Dubai is very warm. You'll find the most comfortable temperatures during the months of November to March. During those months, you can expect low temperatures of around 60 degrees Fahrenheit and highs of 80 to 90 degrees Fahrenheit. There is also little to no precipitation. 

<br>

If you do, however, choose to go to Dubai in the summer, you can expect temperatures upward of 110 degrees Fahrenheit and lows of around 90 degrees Fahrenheit. In these temperatures, it is recommended that you stay indoors.

<br>

Most buildings in Dubai have air conditioning so you are able to wear comfortable clothing. However, the United Arab Emirates does have clothing guidelines as they are a muslim country.
`;

const useStyles = makeStyles({
	card: {
		width: 600,
		height: 371,
	},
});

const lightGraph =
	'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhcMfG2xuYYJ6LY9Ygf5RXdJm4-Yloqkf3MXaYTdt0sdpdVu-xUUHgO6X9sP2hqZkYFXczGkZeaKs1/pubchart?oid=2100013551&amp;format=interactive';
const darkGraph =
	'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhcMfG2xuYYJ6LY9Ygf5RXdJm4-Yloqkf3MXaYTdt0sdpdVu-xUUHgO6X9sP2hqZkYFXczGkZeaKs1/pubchart?oid=2032549317&amp;format=interactive';

export function Weather() {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<div>
			<ReactMarkdown escapeHtml={false} renderers={renderers}>
				{article}
			</ReactMarkdown>
			<br />
			<Card className={classes.card}>
				<iframe
					title="Weather history for Dubai, United Arab Emirates"
					width="600"
					height="371"
					seamless
					frameBorder="0"
					scrolling="no"
					src={theme.palette.type === 'light' ? lightGraph : darkGraph}
				/>
			</Card>
		</div>
	);
}
