import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Link,
	makeStyles,
	Typography,
} from '@material-ui/core';
import { Header } from '../../utils/RouteConstants';

const useStyles = makeStyles((theme) => ({
	media: {
		position: 'relative',
		height: 200,
	},
	credits: {
		position: 'absolute',
		color: 'white',
		bottom: 0,
		right: 0,
		backgroundColor: 'rgba(32,33,36,0.6)',
		padding: theme.spacing(2),
	},
	link: {
		color: theme.palette.primary.light,
	},
	card: {
		height: '100%',
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
	},
	cardContent: {
		flex: 1,
	},
	button: {
		marginLeft: 'auto',
	},
}));

export interface PlaceCardProps {
	name: string;
	header: Header;
	text: string;
	link?: string;
}

export function PlaceCard({ name, header, text, link }: PlaceCardProps) {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardMedia image={header.image} title={name} className={classes.media}>
				{header.credits && (
					<Typography variant="body2" className={classes.credits}>
						Photo by{' '}
						<Link href={header.credits.authorLink} className={classes.link}>
							{header.credits.author}
						</Link>{' '}
						on{' '}
						<Link href={header.credits.platformLink} className={classes.link}>
							{header.credits.platform}
						</Link>
					</Typography>
				)}
			</CardMedia>
			<CardContent className={classes.cardContent}>
				<Typography gutterBottom variant="h5" component="h2">
					{name}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{text}
				</Typography>
			</CardContent>
			{link && (
				<CardActions>
					<Button
						color="primary"
						target="_blank"
						rel="noopener"
						href={link}
						className={classes.button}
					>
						Learn More
					</Button>
				</CardActions>
			)}
		</Card>
	);
}
