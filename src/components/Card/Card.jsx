/**
 * External dependencies
 */
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Button } from '@/components';
import classes from './Card.module.scss';

const cx = classnames.bind(classes);

const Card = ({
	className,
	description,
	image: { src, alt },
	loggedUserPost,
	postId,
	title,
}) => (
	<>
		<div className={cx('wrapper', className)}>
			<img src={src} alt={alt} />
			<div className={classes.inner}>
				<h3 className={classes.title}>{title}</h3>
				<p className={cx('description', 'is-style-text-small')}>
					{description}
				</p>
				<span className={cx('label', 'is-style-label')}>Twój wpis</span>
			</div>
		</div>
		<div className={classes.buttons}>
			<Button href={`post/${postId}`}>Czytaj dalej</Button>
			{loggedUserPost && <Button href={`edit/${postId}`}>Edytuj</Button>}
		</div>
	</>
);

export default Card;
