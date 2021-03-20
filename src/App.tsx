import { RootPage } from './components/RootPage';
import { BrowserRouter } from 'react-router-dom';
import { useScrollbarStyles } from './utils/useScrolbarStyles';

function App() {
	useScrollbarStyles();

	return (
		<BrowserRouter>
			<RootPage />
		</BrowserRouter>
	);
}

export default App;
