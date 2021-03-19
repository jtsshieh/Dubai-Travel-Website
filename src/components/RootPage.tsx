import { makeStyles } from '@material-ui/core';
import { Routes } from './Routes';
import React from 'react';
import { Navbar } from './Navigation/Navbar';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		backgroundColor: theme.palette.background.default,
		minHeight: '100vh',
		paddingBottom: theme.spacing(4),
	},
}));

export function RootPage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Navbar />
			<Routes />
		</div>
	);
}
