/**
 * External dependencies
 */
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Badge.module.scss';

const cx = classnames.bind(classes);

const Badge = ({ className, children = 'Twój wpis' }) => (
	<div className={cx('badge', 'is-style-label', className)}>{children}</div>
);

export default Badge;
