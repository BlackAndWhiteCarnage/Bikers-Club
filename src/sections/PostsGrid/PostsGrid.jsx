/**
 * External dependencies
 */
import { useContext } from 'react';

/**
 * Internal dependencies
 */
import { Context } from '@/components/ContextProvider/ContextProvider';
import { Title, Card } from '@/components';
import classes from './PostsGrid.module.scss';

const PostsGrid = ({ title, items }) => {
	const { user } = useContext(Context);

	return (
		<div className={classes.wrapper}>
			<Title className={classes.title}>{title}</Title>
			<div className={classes.grid}>
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
							key={id}
							variant="small"
							title={title}
							description={description}
							image={{
								src: image,
								alt: '',
							}}
							postSlug={slug}
							loggedUserPost={postUser.id === user?.user.id}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default PostsGrid;
