/**
 * External dependencies
 */
import { useContext } from 'react';

/**
 * Internal dependencies
 */
import { Context } from '@/components/ContextProvider/ContextProvider';
import { Title, Slider, Card } from '@/components';
import classes from './PostsSlider.module.scss';

const PostsSlider = ({ title, items }) => {
	const { user } = useContext(Context);

	return (
		<div className={classes.wrapper}>
			<div className={classes.inner}>
				<Title className={classes.title}>{title}</Title>
				<div className={classes.slider}>
					<Slider>
						{items.map(
							({
								id,
								image,
								title,
								excerpt: description,
								slug,
								user: postUser,
							}) => (
								<Card
									title={title}
									key={id}
									description={description}
									image={{
										src: image,
										alt: title,
									}}
									postSlug={slug}
									loggedUserPost={
										postUser.id === user?.user.id
									}
								/>
							)
						)}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default PostsSlider;
