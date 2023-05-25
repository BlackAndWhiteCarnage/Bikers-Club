import { Navigation } from '@/components';
import { Home, RecommendedPosts, PostsGrid } from '@/sections';

const Root = () => (
	<div>
		<Navigation />
		<Home />
		<RecommendedPosts />
		<PostsGrid title="Inne" />
	</div>
);

export default Root;
