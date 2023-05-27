/**
 * External dependencies
 */
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

/**
 * Internal dependencies
 */
import {
	ContextProvider,
	Navigation,
	Scrollbar,
	PrivateRoute,
} from '@/components';
import { Dashboard, Post, YourPosts } from '@/pages';

const Root = () => (
	<ContextProvider>
		<HashRouter>
			<Navigation />
			<Toaster />
			<Routes>
				<Route
					path="/"
					element={
						<Scrollbar>
							<Dashboard />
						</Scrollbar>
					}
				/>
				<Route
					path="/post/:slug"
					element={
						<Scrollbar>
							<Post />
						</Scrollbar>
					}
				/>
				<Route
					path="/twoje-wpisy"
					element={
						<Scrollbar>
							<PrivateRoute>
								<YourPosts />
							</PrivateRoute>
						</Scrollbar>
					}
				/>
			</Routes>
		</HashRouter>
	</ContextProvider>
);

export default Root;
