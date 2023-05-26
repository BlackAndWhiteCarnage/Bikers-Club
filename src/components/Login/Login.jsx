/**
 * External dependencies
 */
import { useState, useContext } from 'react';

/**
 * Internal dependencies
 */
import { Button } from '@/components';
import { Context } from '@/components/ContextProvider/ContextProvider';
import classes from './Login.module.scss';

const Login = () => {
	const { setUser } = useContext(Context);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			email: email,
			password: password,
		};

		fetch('https://api.cyberlab24.pl/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				localStorage.setItem('user', JSON.stringify(data));

				setUser(data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	return (
		<form onSubmit={handleSubmit} className={classes.wrapper}>
			<label className={classes.label}>Email:</label>
			<input
				className={classes.input}
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label className={classes.label}>Hasło:</label>
			<input
				className={classes.input}
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button type="submit" className={classes.button}>
				Zaloguj
			</Button>
		</form>
	);
};

export default Login;
