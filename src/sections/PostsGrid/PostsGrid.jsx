/**
 * External dependencies
 */
import { useContext, useEffect, useState } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Context } from '@/components/ContextProvider/ContextProvider';
import { Title, Card, Button, Loader } from '@/components';
import classes from './PostsGrid.module.scss';

const cx = classnames.bind(classes);

const PostsGrid = ({ title }) => {
	const [page, setPage] = useState(2);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const { user, getData, totalPages } = useContext(Context);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			const result = await getData(page);

			setData(result || []);

			setLoading(false);
		};

		fetchData();
	}, [getData, page]);

	return (
		<div className={classes.wrapper}>
			<Title className={classes.title}>{title}</Title>
			<div className={classes.grid}>
				{loading ? (
					<Loader />
				) : (
					data.map(
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
								image={{ src: image, alt: '' }}
								postSlug={slug}
								loggedUserPost={postUser?.id === user?.user?.id}
							/>
						)
					)
				)}
			</div>
			<div className={classes.pagination}>
				<Button
					onClick={() => setPage(page - 1)}
					className={cx({
						'is-disabled': page === 1,
					})}
				>
					Poprzednie
				</Button>
				<Button
					onClick={() => setPage(page + 1)}
					className={cx({
						'is-disabled': page === totalPages,
					})}
				>
					Następne
				</Button>
			</div>
		</div>
	);
};

export default PostsGrid;
