/**
 * External dependencies
 */

import { useEffect } from 'react';

const useClickOutside = (element, onClickOutside, dataTarget) =>
	useEffect(() => {
		const toggle = (e) => {
			if (element) {
				const target = e.target;

				!element.contains(target) &&
					element !== target &&
					(!dataTarget || target.dataset.target !== dataTarget) &&
					onClickOutside();
			}
		};

		window.addEventListener('click', toggle);

		return () => window.removeEventListener('click', toggle);
	}, [element, onClickOutside, dataTarget]);

export default useClickOutside;
