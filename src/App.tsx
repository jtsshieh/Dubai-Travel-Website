import React, { useEffect, useState } from 'react';
import {
	createMuiTheme,
	ThemeProvider,
	useMediaQuery,
} from '@material-ui/core';
import { RootPage } from './components/RootPage';
import { BrowserRouter } from 'react-router-dom';
import { ThemeSwitcherContext } from './components/ThemeSwitcherContext';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import jssComposes from 'jss-plugin-compose';

const jss = create({
	plugins: [...jssPreset().plugins, jssComposes()],
});

function App() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const [darkTheme, setDarkTheme] = useState(prefersDarkMode);

	useEffect(() => {
		setDarkTheme(prefersDarkMode);
	}, [prefersDarkMode]);

	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					primary: {
						light: '#3394ff',
						main: '#007aff',
						dark: '#0055b2',
						contrastText: '#fff',
					},
					secondary: {
						light: '#ff9c33',
						main: '#ff8400',
						dark: '#b25c00',
						contrastText: '#fff',
					},
					type: darkTheme ? 'dark' : 'light',
				},
			}),
		[darkTheme]
	);

	return (
		<StylesProvider jss={jss}>
			<ThemeProvider theme={theme}>
				<ThemeSwitcherContext.Provider value={{ darkTheme, setDarkTheme }}>
					<BrowserRouter>
						<RootPage />
					</BrowserRouter>
				</ThemeSwitcherContext.Provider>
			</ThemeProvider>
		</StylesProvider>
	);
}

export default App;
