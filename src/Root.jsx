import { Navigation } from '@/components';
import { Home, PostsSlider, PostsGrid } from '@/sections';

const Root = () => (
	<div>
		<Navigation />
		<Home />
		<PostsSlider title="Polecane" />
		<PostsGrid title="Inne" />
	</div>
);

export default Root;
