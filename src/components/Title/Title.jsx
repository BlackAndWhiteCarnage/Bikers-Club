/**
 * External dependencies
 */
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Title.module.scss';

const cx = classnames.bind(classes);

const Title = ({ className, children, level = 1 }) => {
	const H = level === 1 ? 'h1' : 'h2';

	return <H className={cx('title', className)}>{children}</H>;
};

export default Title;
