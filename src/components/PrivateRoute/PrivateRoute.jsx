/**
 * External dependencies
 */
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

/**
 * Internal dependencies
 */
import { Context } from '@/components/ContextProvider/ContextProvider';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(Context);

	if (!user && !loading) {
		return <Navigate to="/" replace />;
	}

	return children;
};

export default PrivateRoute;
