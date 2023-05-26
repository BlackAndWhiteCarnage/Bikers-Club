/**
 * Internal dependencies
 */
import { Title, Card } from '@/components';
import classes from './PostsGrid.module.scss';

const PostsGrid = ({ title, items }) => (
	<div className={classes.wrapper}>
		<Title className={classes.title}>{title}</Title>
		<div className={classes.grid}>
			{items.data.map(
				({ id, image, title, excerpt: description, slug }) => (
					<Card
						key={id}
						variant="small"
						title={title}
						description={description}
						image={{
							src: image,
							alt: '',
						}}
						postSlug={slug}
					/>
				)
			)}
		</div>
	</div>
);

export default PostsGrid;
