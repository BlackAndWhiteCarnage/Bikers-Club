/**
 * External dependencies
 */
import { useContext } from 'react';

/**
 * Internal dependencies
 */
import { Context } from '@/components/ContextProvider/ContextProvider';
import { Home, PostsSlider, PostsGrid } from '@/sections';
import { Loader } from '@/components';

const Dashboard = () => {
	const { posts, loading } = useContext(Context);

	return (
		<>
			<Home />
			{!loading ? (
				<PostsSlider title="Polecane" items={posts} />
			) : (
				<Loader />
			)}
			<PostsGrid title="Inne" />
		</>
	);
};

export default Dashboard;
