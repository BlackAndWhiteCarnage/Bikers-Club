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

const Popup = ({
	children,
	landscapeBackround: Landscape,
	portraitBackround: Portrait,
	close,
	isOpen = true,
	title,
}) => {
	useEffect(() => {
		document.documentElement.style.overflowY = isOpen ? 'hidden' : 'auto';

		return () => {
			document.documentElement.style.overflowY = 'auto';
		};
	}, [isOpen]);

	return (
		<Portal>
			<div
				className={cx('popup', {
					'is-open': isOpen,
				})}
				onClick={({ target }) => {
					console.log(target.classList.contains(classes.popup));
					target.classList.contains(classes.popup) && close();
				}}
			>
				<div className={classes.content}>{children}</div>
			</div>
		</Portal>
	);
};

export default Popup;
