import BurjKhalifaImage from '../../../images/burj_khalifa.jpg';
import { PlaceCardProps } from '../PlaceCard';

export const BurjKhalifa: PlaceCardProps = {
	name: 'Burj Khalifa',
	header: {
		image: BurjKhalifaImage,

		credits: {
			authorLink:
				'https://unsplash.com/@waelhneini?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
			author: 'Wael Hneini',
			platformLink:
				'https://unsplash.com/s/photos/dubai?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
			platform: 'Unsplash',
		},
	},
	text: `The Burj Khalifa is the tallest building in the world. It is located an area called Downtown Dubai, which also contains the Dubai Fountains, and the Dubai Mall. `,
	link: 'https://www.burjkhalifa.ae/en/index.aspx',
};
