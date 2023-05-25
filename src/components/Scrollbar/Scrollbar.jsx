/**
 * External dependencies
 */
import { Scrollbars } from 'react-custom-scrollbars-2';

/**
 * Internal dependencies
 */
import classes from './Scrollbar.module.scss';

const Scrollbar = ({ children }) => (
	<div className={classes.wrapper}>
		<Scrollbars
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

export default Scrollbar;
