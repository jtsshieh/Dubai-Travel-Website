import { makeStyles, Theme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const scrollbarStyles = (theme: Theme) => ({
	active: grey[500],
	thumb: theme.palette.type === 'dark' ? grey[700] : grey[300],
	track: theme.palette.background.default,
});

export const useScrollbarStyles = makeStyles((theme) => ({
	'@global': {
		'::-webkit-scrollbar': {
			backgroundColor: scrollbarStyles(theme).track,
		},

		'::-webkit-scrollbar-track': {
			backgroundColor: scrollbarStyles(theme).track,
		},

		/* Handle */
		'::-webkit-scrollbar-thumb': {
			borderRadius: 8,
			backgroundColor: scrollbarStyles(theme).thumb,
			border: `3px solid ${scrollbarStyles(theme).track}`,
		},

		/* Handle on hover */
		'::-webkit-scrollbar-thumb:focus': {
			backgroundColor: scrollbarStyles(theme).active,
		},
		'::-webkit-scrollbar-thumb:active': {
			backgroundColor: scrollbarStyles(theme).active,
		},
		'::-webkit-scrollbar-thumb:hover': {
			backgroundColor: scrollbarStyles(theme).active,
		},
	},
}));
