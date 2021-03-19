import { PlaceCardProps } from '../PlaceCard';
import DubaiFountainsImage from '../../../images/dubai_fountains.jpg';

export const DubaiFountains: PlaceCardProps = {
	name: 'Dubai Fountains',
	header: {
		image: DubaiFountainsImage,

		credits: {
			authorLink:
				'https://unsplash.com/@raimondklavins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
			author: 'Raimond Klavin',
			platformLink:
				'https://unsplash.com/s/photos/dubai-fountains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
			platform: 'Unsplash',
		},
	},
	text: `The Dubai Fountains are the world's tallest performing fountains. They are situated right in front of the Burj Khalifa in a man made "lake". Every 30 minutes from 6pm to 10pm on weekdays and 6pm to 11pm on weekends (where weekends are Thursday, Friday, and Saturday), the fountains will light up and will put on a show synced with the music.  `,
	link: 'https://www.burjkhalifa.ae/en/downtown-dubai/the-dubai-fountain/',
};
