import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { StylesProvider } from '@material-ui/core/styles';
import { jss } from './utils/createJss';
import { ThemingProvider } from './components/ThemingProvider';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
	<React.StrictMode>
		<StylesProvider jss={jss}>
			<ThemingProvider>
				<CssBaseline />
				<App />
			</ThemingProvider>
		</StylesProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorkerRegistration.register();
