/**
 * External dependencies
 */
import { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	const [posts, setPosts] = useState(null);
	const [totalPages, setTotalPages] = useState(null);

	useEffect(() => {
		const loggedInUser = localStorage.getItem('user');

		loggedInUser && setUser(JSON.parse(loggedInUser));
	}, [setUser]);

	const getData = async (page) => {
		const response = await fetch(
			`https://api.cyberlab24.pl/posts?page=${page}`
		);

		const jsonData = await response.json();

		return jsonData.data;
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				let allPosts = [];

				const totalPagesResponse = await fetch(
					'https://api.cyberlab24.pl/posts'
				);

				const totalPagesData = await totalPagesResponse.json();

				const totalPages = totalPagesData.totalPages;

				for (let i = 1; i <= totalPages; i++) {
					const jsonData = await getData(i);

					allPosts = allPosts.concat(jsonData);
				}

				setTotalPages(totalPages);
				setPosts(allPosts);
				setLoading(false);
			} catch (error) {
				console.error('Error message:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<Context.Provider
			value={{
				loading,
				posts,
				setPosts,
				setUser,
				user,
				getData,
				totalPages,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
