/**
 * External dependencies
 */
import { cloneElement, useState } from 'react';
import { usePopper } from 'react-popper';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Portal } from '@/components';
import { useClickOutside } from '@/hooks';
import classes from './Popover.module.scss';

const cx = classnames.bind(classes);

const Popover = ({ button, children, placement = 'bottom' }) => {
	const [popperRef, setPopperRef] = useState(null);
	const [buttonRef, setButtonRef] = useState(null);

	const [isOpen, setIsOpen] = useState(false);

	useClickOutside(popperRef, () => setIsOpen(false), 'popup-element');

	const { styles, attributes, update } = usePopper(buttonRef, popperRef, {
		placement,
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 12],
				},
			},
			{
				name: 'preventOverflow',
				options: {
					padding: 15,
				},
			},
		],
	});

	return (
		<>
			{cloneElement(button, {
				onClick: () => {
					setIsOpen(!isOpen);
					update?.();
				},
				ref: setButtonRef,
			})}
			<Portal>
				<div
					className={cx('popover', {
						isOpen,
					})}
					ref={setPopperRef}
					style={styles.popper}
					{...attributes.popper}
				>
					{children}
				</div>
			</Portal>
		</>
	);
};

export default Popover;
