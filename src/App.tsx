import React, { useEffect, useState } from 'react';
import {
	createMuiTheme,
	CssBaseline,
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
		<StylesProvider jss={jss}>
			<ThemeProvider theme={theme}>
				<ThemeSwitcherContext.Provider value={{ darkTheme, setDarkTheme }}>
					<CssBaseline />
					<BrowserRouter>
						<RootPage />
					</BrowserRouter>
				</ThemeSwitcherContext.Provider>
			</ThemeProvider>
		</StylesProvider>
	);
}

export default App;
