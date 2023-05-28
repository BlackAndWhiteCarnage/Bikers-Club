/**
 * External dependencies
 */
import { useContext } from 'react';
import ReactPlayer from 'react-player/lazy';

/**
 * Internal dependencies
 */
import { Context } from '@/components/ContextProvider/ContextProvider';
import { Button, Title } from '@/components';
import classes from './Home.module.scss';
import video from '@/videos/hero.mp4';

const Home = () => {
	const { user } = useContext(Context);

	return (
		<>
			<div className={classes.hero}>
				<ReactPlayer
					url={video}
					muted
					playing
					loop
					width="100%"
					height="100%"
					playsinline
				/>
			</div>
			<div className={classes.wrapper}>
				<div className={classes.inner}>
					<Title className={classes.title}>
						{!user ? (
							<>
								Jedyny <br /> rowerowy <br /> blog którego{' '}
								<br /> potrzebujesz
							</>
						) : (
							`Witamy ponownie ${user.user.firstName}`
						)}
					</Title>
					<div className={classes.buttons}>
						{user && <Button to="twoje-wpisy">Twoje wpisy</Button>}
						<Button to="/posty">Zobacz wszystkie wpisy</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
