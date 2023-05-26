/**
 * External dependencies
 */
import { createContext, useState, useEffect } from 'react';

/**
 * Internal dependencies
 */

export const Context = createContext({
	loading: true,
	posts: null,
	setPosts: () => {},
	setUser: () => {},
	user: null,
});

const ContextProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		const loggedInUser = localStorage.getItem('user');

		if (loggedInUser) {
			setUser(JSON.parse(loggedInUser));
		}
	}, [setUser]);

	const fetchData = async () => {
		try {
			const response = await fetch('https://api.cyberlab24.pl/posts');

			const jsonData = await response.json();

			setPosts(jsonData);
			setLoading(false);
		} catch (error) {
			console.error('Error message:', error);
		}
	};

	return (
		<Context.Provider
			value={{
				loading,
				posts,
				setPosts,
				setUser,
				user,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
