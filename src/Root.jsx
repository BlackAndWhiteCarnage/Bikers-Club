/**
 * Internal dependencies
 */
import { ContextProvider, Navigation, Scrollbar } from '@/components';
import { Dashboard } from '@/pages';

const Root = () => (
	<ContextProvider>
		<Scrollbar>
			<Navigation />
			<Dashboard />
		</Scrollbar>
	</ContextProvider>
);

export default Root;
