/**
 * External dependencies
 */
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

/**
 * Internal dependencies
 */
import { Context } from '@/components/ContextProvider/ContextProvider';
import { Loader, Title, Content, Badge } from '@/components';
import { PostsGrid } from '@/sections';
import { useScrollTop } from '@/hooks';
import classes from './Post.module.scss';

const Post = () => {
	const { user, posts, loading } = useContext(Context);

	const { slug } = useParams();

	useScrollTop();

	const currentPost = posts?.find(({ slug: postSlug }) => slug === postSlug);

	if (loading) {
		return <Loader />;
	}

	const { title, image, blogPost, user: postUser } = currentPost;

	return (
		<>
			<div className={classes.wrapper}>
				<div className={classes.imageWrap}>
					{postUser.id === user?.user.id && <Badge />}
					<img src={image} alt={title} className={classes.image} />
				</div>
				<Title>{title}</Title>
				<div className={classes.separator} />
				<Content content={blogPost} />
				<div className={classes.separator} />
				<Title level={2}>Inne:</Title>
			</div>
			<PostsGrid items={posts} />
		</>
	);
};

export default Post;
