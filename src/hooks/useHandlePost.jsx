/**
 * External dependencies
 */
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';

/**
 * Internal dependencies
 */
import { Context } from '@/components/ContextProvider/ContextProvider';

const useHandlePost = (popup) => {
	const { user } = useContext(Context);

	const [blogPost, setBlogPost] = useState('');
	const [editPostId, setEditPostId] = useState(null);
	const [image, setImage] = useState('');
	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState('');

	const handlePost = async (method, postId) => {
		let url = 'https://api.cyberlab24.pl/post';

		const isPut = method === 'PUT';
		const isPost = method === 'POST';
		const isDelete = method === 'DELETE';

		const toastOptions = {
			duration: 5000,
		};

		const errorToast = () =>
			toast.error(
				'Coś poszło nie tak, spróbuj ponownie później',
				toastOptions
			);

		const closeEditor = () => popup.close();

		if (isPut || isDelete) {
			url += `/${postId}`;
		}

		try {
			const response = await fetch(url, {
				method: method,
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
				body: JSON.stringify({
					title,
					blogPost,
					image,
				}),
			});

			if (response.ok) {
				!isDelete && resetStates();

				toast('Odśwież stronę żeby zobaczyć zmiany', toastOptions);

				toast.success(
					isPost
						? 'Post został dodany pomyślnie'
						: isPut
						? 'Post został zaktualizowany'
						: 'Post został usunięty',
					toastOptions
				);

				closeEditor();
			} else {
				errorToast();
				closeEditor();
			}
		} catch (error) {
			errorToast();
			closeEditor();
		}

		resetStates();
	};

	const resetStates = () => {
		setBlogPost('');
		setEditPostId(null);
		setImage('');
		setIsEditing(false);
		setTitle('');
	};

	const submitPost = (e) => {
		e.preventDefault();

		handlePost(isEditing ? 'PUT' : 'POST', editPostId);
	};

	return {
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
	};
};

export default useHandlePost;
