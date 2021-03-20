import {
	createMuiTheme,
	ThemeProvider,
	useMediaQuery,
} from '@material-ui/core';
import { ThemeSwitcherContext } from './ThemeSwitcherContext';
import { ReactNode, useEffect, useMemo, useState } from 'react';

export function ThemingProvider({ children }: { children: ReactNode }) {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const [darkTheme, setDarkTheme] = useState(prefersDarkMode);
	useEffect(() => {
		setDarkTheme(prefersDarkMode);
	}, [prefersDarkMode]);

	const theme = useMemo(
		() =>
			createMuiTheme({
				palette: {
					primary: {
						light: '#768fff',
						main: '#2962ff',
						dark: '#0039cb',
						contrastText: '#fff',
					},
					type: darkTheme ? 'dark' : 'light',
				},
				shape: {
					borderRadius: 10,
				},
			}),
		[darkTheme]
	);

	return (
		<ThemeProvider theme={theme}>
			<ThemeSwitcherContext.Provider value={{ darkTheme, setDarkTheme }}>
				{children}
			</ThemeSwitcherContext.Provider>
		</ThemeProvider>
	);
}
