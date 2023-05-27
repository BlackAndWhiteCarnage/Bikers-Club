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
import { useScrollTop } from '@/hooks';

const Dashboard = () => {
	const { posts, loading } = useContext(Context);

	useScrollTop();

	return (
		<>
			<Home />
			{!loading ? (
				<PostsSlider title="Najnowsze" items={posts.slice(0, 5)} />
			) : (
				<Loader />
			)}
			{!loading ? <PostsGrid title="Inne" /> : <Loader />}
		</>
	);
};

export default Dashboard;
