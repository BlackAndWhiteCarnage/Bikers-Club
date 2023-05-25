/**
 * External dependencies
 */
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Button.module.scss';

const cx = classnames.bind(classes);

const Button = ({ children, className, ...props }) => {
	const buttonClassName = cx(className, 'button', 'is-style-text');

	return !!props.href ? (
		<a {...props} className={buttonClassName}>
			{children}
		</a>
	) : !props.href ? (
		<button {...props} className={buttonClassName}>
			{children}
		</button>
	) : null;
};

export default Button;
