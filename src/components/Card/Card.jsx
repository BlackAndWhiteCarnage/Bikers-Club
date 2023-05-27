/**
 * External dependencies
 */
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import placeholder from '@/images/placeholder.jpg';
import { Button, Badge } from '@/components';
import classes from './Card.module.scss';

const cx = classnames.bind(classes);

const Card = ({
	className,
	description,
	image: { src, alt },
	loggedUserPost,
	postSlug,
	title,
	variant = 'large',
}) => (
	<div>
		<div className={cx('wrapper', className, `is-${variant}-variant`)}>
			<img src={src || placeholder} alt={alt} className={classes.image} />
			<div className={classes.inner}>
				<h3 className={classes.title}>{title}</h3>
				<p className={classes.description}>{description}</p>
				{loggedUserPost && <Badge />}
			</div>
		</div>
		<div className={classes.buttons}>
			<Button to={`/post/${postSlug}`}>Czytaj dalej</Button>
		</div>
	</div>
);

export default Card;
