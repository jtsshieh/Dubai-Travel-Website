import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline } from '@material-ui/core';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
	<React.StrictMode>
		<CssBaseline />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorkerRegistration.register();
