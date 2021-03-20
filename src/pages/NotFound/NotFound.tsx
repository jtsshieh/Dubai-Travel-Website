import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
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
		display: 'flex',
		flexDirection: 'column',
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
		<div className={classes.root}>
			<Paper className={classes.card} variant="outlined">
				<div className={classes.cardPart}>
					<Typography variant="h4">Page not found</Typography>
				</div>
				<div className={classes.cardPart}>
					<Button component={Link} to="/" variant="contained" color="primary">
						Back to Home
					</Button>
				</div>
			</Paper>
		</div>
	);
}
