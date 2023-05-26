/**
 * External dependencies
 */
import { Routes, Route, HashRouter } from 'react-router-dom';

/**
 * Internal dependencies
 */
import { ContextProvider, Navigation, Scrollbar } from '@/components';
import { Dashboard, Post } from '@/pages';

const Root = () => (
	<ContextProvider>
		<Scrollbar>
			<HashRouter>
				<Navigation />
				<Routes>
					<Route index path="/" element={<Dashboard />} />
					<Route path="/post/:slug" element={<Post />} />
				</Routes>
			</HashRouter>
		</Scrollbar>
	</ContextProvider>
);

export default Root;
