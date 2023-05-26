/**
 * External dependencies
 */
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Content.module.scss';

const cx = classnames.bind(classes);

const Content = ({ content }) => (
	<div
		className={cx('wrapper', 'is-style-text')}
		dangerouslySetInnerHTML={{ __html: content }}
	/>
);

export default Content;
