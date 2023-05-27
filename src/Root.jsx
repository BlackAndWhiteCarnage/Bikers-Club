/**
 * External dependencies
 */
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

/**
 * Internal dependencies
 */
import { ContextProvider, Navigation, Scrollbar } from '@/components';
import { Dashboard, Post, YourPosts } from '@/pages';

const Root = () => (
	<ContextProvider>
		<Scrollbar>
			<HashRouter>
				<Navigation />
				<Toaster />
				<Routes>
					<Route index path="/" element={<Dashboard />} />
					<Route path="/post/:slug" element={<Post />} />
					<Route path="/twoje-wpisy" element={<YourPosts />} />
				</Routes>
			</HashRouter>
		</Scrollbar>
	</ContextProvider>
);

export default Root;
