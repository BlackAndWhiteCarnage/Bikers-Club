/**
 * External dependencies
 */
import { useEffect } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Portal } from '@/components';
import classes from './Popup.module.scss';

const cx = classnames.bind(classes);

const Popup = ({ children, close, isOpen = true }) => {
	useEffect(() => {
		document.documentElement.style.overflowY = isOpen ? 'hidden' : 'auto';

		return () => (document.documentElement.style.overflowY = 'auto');
	}, [isOpen]);

	return (
		<Portal>
			<div
				className={cx('popup', {
					'is-open': isOpen,
				})}
				onClick={({ target }) => {
					target.classList.contains(classes.popup) && close();
				}}
			>
				<div className={classes.content}>{children}</div>
			</div>
		</Portal>
	);
};

export default Popup;
