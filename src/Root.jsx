/**
 * External dependencies
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * Internal dependencies
 */
import { ContextProvider, Navigation, Scrollbar } from '@/components';
import { Dashboard } from '@/pages';

const Root = () => (
	<ContextProvider>
		<Scrollbar>
			<Router>
				<Navigation />
				<Routes>
					<Route path="/" element={<Dashboard />} />
				</Routes>
			</Router>
		</Scrollbar>
	</ContextProvider>
);

export default Root;
