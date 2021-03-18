import { TopRoute } from '../../components/RouteConstants';
import BurjKhalifaImage from '../../images/burj_khalifa.jpg';

export function BurjKhalifa() {
	return <h1>Hi</h1>;
}

export const BurjKhalifaRoute: TopRoute = {
	name: 'Burj Khalifa',
	path: '/burj-khalifa',
	component: BurjKhalifa,
	header: {
		image: BurjKhalifaImage,
		credits: {
			authorLink:
				'https://unsplash.com/@jeremybishop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
			author: 'Jeremy Bishop',
			platformLink:
				'https://unsplash.com/s/photos/burj-khalifa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
			platform: 'Unsplash',
		},
	},
};
