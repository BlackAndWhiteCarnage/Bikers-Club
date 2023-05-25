/**
 * Internal dependencies
 */
import { Title, Slider, Card } from '@/components';
import classes from './PostsSlider.module.scss';

const PostsSlider = ({ title, items }) => (
	<div className={classes.wrapper}>
		<div className={classes.inner}>
			<Title className={classes.title}>{title}</Title>
			<div className={classes.slider}>
				{console.log(items)}
				<Slider>
					{items?.data.map(
						({ id, image, title, excerpt: description }) => (
							<Card
								title={title}
								key={id}
								description={description}
								image={{
									src: image,
									alt: title,
								}}
							/>
						)
					)}
				</Slider>
			</div>
		</div>
	</div>
);

export default PostsSlider;
