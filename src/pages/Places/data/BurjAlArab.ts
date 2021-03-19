import BurjAlArabImage from '../../../images/burj_al_arab.jpg';
import { PlaceCardProps } from '../PlaceCard';

export const BurjAlArab: PlaceCardProps = {
	name: 'Burj Al Arab',
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
	text: `The Burj Al Arab is a luxury hotel in Dubai. It sits on its on
artificial island and was built to look like a sail of a ship. This
hotel is sometimes known as the world's only 7 star hotel. In addition
to being a hotel, the building also houses several luxury restaurants
that anyone who has a reservation may dine at.`,
	link: 'https://www.jumeirah.com/en/Stay/Dubai/Burj-Al-Arab-Jumeirah',
};
