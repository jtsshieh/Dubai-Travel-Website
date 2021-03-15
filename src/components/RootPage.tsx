import { makeStyles } from '@material-ui/core';
import { Routes } from './Routes';
import React from 'react';
import { Navbar } from './Navigation/Navbar';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		backgroundColor: theme.palette.background.default,
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
