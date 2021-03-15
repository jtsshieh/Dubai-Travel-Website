import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({});

export function Home() {
	const classes = useStyles();

	return (
		<>
			<Typography variant="body1">
				Welcome to this website about Dubai
			</Typography>
		</>
	);
}
