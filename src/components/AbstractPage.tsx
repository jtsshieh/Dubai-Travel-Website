import { Card, makeStyles, Typography } from '@material-ui/core';
import { createElement } from 'react';
import { TopRoute } from './RouteConstants';
import { Link } from '@material-ui/core';

interface AbstractPageProps {
	route: TopRoute;
}
interface Props {
	headerImage?: string;
}

const useStyles = makeStyles((theme) => ({
	card: {
		width: '100%',
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
	},
	picture: {
		backgroundImage: (props: Props) => `url(${props.headerImage})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,

		'&::before': {
			backgroundColor: 'rgba(32,33,36,0.6)',
			content: '""',
			height: '100%',
			width: '100%',
			top: 0,
			left: 0,
			position: 'absolute',
		},
	},
	inner: {
		width: '100%',
		height: '20rem',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardContent: {
		position: 'relative',
		color: 'white',
	},
	credits: {
		position: 'absolute',
		right: 0,
		bottom: 0,
	},
}));

export function AbstractPage({ route }: AbstractPageProps) {
	const classes = useStyles({ headerImage: route.header?.image });

	return (
		<>
			<Card className={classes.card}>
				<div className={classes.inner}>
					<div className={classes.picture} />
					<Typography variant="h3" className={classes.cardContent}>
						{route.name}
					</Typography>
					{route.header?.credits && (
						<Typography variant="body1" className={classes.credits}>
							Photo by{' '}
							<Link href={route.header.credits.authorLink}>
								{route.header.credits.author}
							</Link>{' '}
							on{' '}
							<Link href={route.header.credits.platformLink}>
								{route.header.credits.platform}
							</Link>
						</Typography>
					)}
				</div>
			</Card>

			{createElement(route.component)}
		</>
	);
}
