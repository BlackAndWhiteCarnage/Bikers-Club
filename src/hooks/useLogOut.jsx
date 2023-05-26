/**
 * External dependencies
 */
import { useContext } from 'react';

/**
 * Internal dependencies
 */
import { Context } from '@/components/ContextProvider/ContextProvider';

const useLogout = () => {
	const { setUser } = useContext(Context);

	const logout = () => {
		localStorage.removeItem('user');
		setUser(null);
	};

	return logout;
};

export default useLogout;
