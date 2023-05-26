/**
 * External dependencies
 */
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import placeholder from '@/images/placeholder.jpg';
import { Button } from '@/components';
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
				{loggedUserPost && (
					<span className={cx('label', 'is-style-label')}>
						Twój wpis
					</span>
				)}
			</div>
		</div>
		<div className={classes.buttons}>
			<Button to={`/post/${postSlug}`}>Czytaj dalej</Button>
			{loggedUserPost && (
				<Button href={`/edit/${postSlug}`}>Edytuj</Button>
			)}
		</div>
	</div>
);

export default Card;
