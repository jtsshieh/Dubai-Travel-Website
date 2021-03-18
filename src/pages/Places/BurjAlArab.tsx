import ReactMarkdown from 'react-markdown';
import renderers from '../../MaterialMDRenderer';
import BurjAlArabImage from '../../images/burj_al_arab.jpg';
import { TopRoute } from '../../components/RouteConstants';

const article = `The Burj Al Arab is a luxury hotel in Dubai. It sits on its on artificial island and was built to look like a sail of a ship. This hotel is sometimes known as the world's only 7 star hotel.


`;

export function BurjAlArab() {
	return (
		<>
			<ReactMarkdown escapeHtml={false} renderers={renderers}>
				{article}
			</ReactMarkdown>
		</>
	);
}

export const BurjAlArabRoute: TopRoute = {
	name: 'Burj Al Arab',
	path: '/burj-al-arab',
	component: BurjAlArab,
	header: {
		image: BurjAlArabImage,
		credits: {
			authorLink:
				'https://unsplash.com/@mohdb1993?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
			author: 'Mohd 1993',
			platformLink:
				'https://unsplash.com/s/photos/burj-al-arab?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
			platform: 'Unsplash',
		},
	},
};
