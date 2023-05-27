/**
 * External dependencies
 */
import { useContext } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';

/**
 * Internal dependencies
 */
import { useHandlePost, usePopup, useScrollTop } from '@/hooks';
import { Context } from '@/components/ContextProvider/ContextProvider';
import { Loader, Title, Button, Popup } from '@/components';
import classes from './YourPosts.module.scss';

const YourPosts = () => {
	const popup = usePopup();

	useScrollTop();

	const { user, loading, posts } = useContext(Context);

	const {
		blogPost,
		handlePost,
		image,
		isEditing,
		resetStates,
		setBlogPost,
		setEditPostId,
		setImage,
		setIsEditing,
		setTitle,
		submitPost,
		title,
	} = useHandlePost(popup);

	if (loading) {
		return <Loader />;
	}

	const userPosts = posts.filter(
		({ user: postUser }) => postUser.id === user.user.id
	);

	const hasPosts = userPosts.length;

	return (
		<div className={classes.wrapper}>
			<Title>
				{user.user.firstName}
				{hasPosts
					? ' poniżej znajdziesz wszystkie swoje wpisy.'
					: ' nie masz jeszcze żadnych wpisów.'}
			</Title>
			<div className={classes.separator} />
			<Button
				className={classes.button}
				onClick={() => {
					popup.open();
					setIsEditing(false);
				}}
			>
				Dodaj wpis
			</Button>
			<Popup {...popup}>
				<div className={classes.editor}>
					<form className={classes.editorInner} onSubmit={submitPost}>
						<label htmlFor="image">Link do zdjęcia</label>
						<input
							className={classes.input}
							type="text"
							id="image"
							value={image}
							onChange={(e) => setImage(e.target.value)}
						/>
						<label htmlFor="title">Tytuł</label>
						<input
							className={classes.input}
							type="text"
							id="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<label htmlFor="content">Treść</label>
						<textarea
							className={classes.textarea}
							id="content"
							value={blogPost}
							onChange={(e) => setBlogPost(e.target.value)}
						/>
						<div className={classes.buttons}>
							<Button type="submit">
								{isEditing ? 'Zaktualizuj wpis' : 'Dodaj wpis'}
							</Button>
							<Button
								onClick={(e) => {
									e.preventDefault();
									resetStates();
									popup.close();
								}}
							>
								Anuluj
							</Button>
						</div>
					</form>
				</div>
			</Popup>
			<ol className={classes.posts}>
				{userPosts.map(({ id, image, blogPost, title }) => (
					<li className={classes.post} key={id}>
						<img
							src={image}
							alt={title}
							className={classes.image}
						/>
						<h4 className="is-style-text">{title}</h4>
						<div className={classes.postContent}>
							<Scrollbars>{blogPost}</Scrollbars>
						</div>
						<div className={classes.buttons}>
							<Button
								onClick={() => {
									setBlogPost(blogPost);
									setEditPostId(id);
									setIsEditing(true);
									setTitle(title);
									setImage(image);
									popup.open();
								}}
							>
								Edytuj
							</Button>
							<Button onClick={() => handlePost('DELETE', id)}>
								Usuń
							</Button>
						</div>
					</li>
				))}
			</ol>
		</div>
	);
};

export default YourPosts;
