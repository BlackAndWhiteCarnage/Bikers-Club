/**
 * External dependencies
 */
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Internal dependencies
 */
import classes from './Scrollbar.module.scss';

const Scrollbar = ({ children }) => {
	const ref = useRef();
	const { pathname } = useLocation();

	useEffect(() => {
		ref.current && ref.current.scrollToTop();
	}, [pathname]);

	return (
		<div className={classes.wrapper}>
			<Scrollbars
				ref={ref}
				autoHide
				renderView={(props) => (
					<div
						{...props}
						style={{ ...props.style, overflowX: 'hidden' }}
					/>
				)}
				renderTrackVertical={(props) => (
					<div {...props} className={classes.track} />
				)}
				renderThumbVertical={(props) => (
					<div {...props} className={classes.thumb} />
				)}
				renderTrackHorizontal={(props) => (
					<div {...props} style={{ display: 'none' }} />
				)}
				renderThumbHorizontal={(props) => (
					<div {...props} style={{ display: 'none' }} />
				)}
			>
				{children}
			</Scrollbars>
		</div>
	);
};

export default Scrollbar;
