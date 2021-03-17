import { Typography } from '@material-ui/core';
import { Home as HomeIcon } from '@material-ui/icons';
import DubaiFountains from '../../images/dubai_fountain.jpg';

export function Home() {
	return (
		<>
			<Typography variant="body1">
				Welcome to this website about Dubai
			</Typography>
		</>
	);
}

export const HomeRoute = {
	name: 'Home',
	path: '/',
	component: Home,
	icon: HomeIcon,
	headerImage: DubaiFountains,
};
