/**
 * Internal dependencies
 */
import { Dashboard } from '@/pages';
import { Navigation, Scrollbar } from '@/components';

const Root = () => (
	<Scrollbar>
		<Navigation />
		<Dashboard />
	</Scrollbar>
);

export default Root;
