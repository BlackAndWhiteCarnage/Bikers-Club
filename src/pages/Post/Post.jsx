/**
 * External dependencies
 */
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Context } from '@/components/ContextProvider/ContextProvider';
import { Loader, Title } from '@/components';
import { PostsGrid } from '@/sections';
import classes from './Post.module.scss';

const cx = classnames.bind(classes);

const Post = () => {
	const { posts, loading } = useContext(Context);
	const { slug } = useParams();

	const currentPost = posts?.data.find(
		({ slug: postSlug }) => slug === postSlug
	);

	if (loading) {
		return <Loader />;
	}

	const { title, image, blogPost } = currentPost;

	return (
		<>
			<div className={classes.wrapper}>
				<img src={image} alt={title} className={classes.image} />
				<Title>{title}</Title>
				<div className={classes.separator} />
				<div
					dangerouslySetInnerHTML={{ __html: blogPost }}
					className={cx('content', 'is-style-text')}
				/>
				<div className={classes.separator} />
				<Title level={2}>Inne:</Title>
			</div>
			<PostsGrid items={posts} />
		</>
	);
};

export default Post;
