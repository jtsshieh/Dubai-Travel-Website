import {
	Button,
	Card,
	CardContent,
	makeStyles,
	Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	outer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: '100%',
	},
	card: {
		padding: theme.spacing(1),
		width: '40em',
		height: '15em',
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: '100%',
	},
	cardPart: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

export function NotFound() {
	const classes = useStyles();
	return (
		<div className={classes.outer}>
			<Card className={classes.card}>
				<CardContent className={classes.cardContent}>
					<div className={classes.cardPart}>
						<Typography variant="h4">Page not found</Typography>
					</div>
					<div className={classes.cardPart}>
						<Button component={Link} to="/" variant="contained" color="primary">
							Back to Home
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
