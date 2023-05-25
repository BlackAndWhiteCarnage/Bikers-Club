/**
 * Internal dependencies
 */
import { Home, PostsSlider, PostsGrid } from '@/sections';

const Dashboard = () => (
	<>
		<Home />
		<PostsSlider title="Polecane" />
		<PostsGrid title="Inne" />
	</>
);

export default Dashboard;
