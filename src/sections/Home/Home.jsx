/**
 * External dependencies
 */
import ReactPlayer from 'react-player/lazy';

/**
 * Internal dependencies
 */
import { Button, Title } from '@/components';
import classes from './Home.module.scss';
import video from '@/videos/hero.mp4';

const Home = () => (
	<>
		<div className={classes.hero}>
			<ReactPlayer
				url={video}
				muted
				playing
				loop
				width="100%"
				height="100%"
			/>
		</div>
		<div className={classes.wrapper}>
			<div className={classes.inner}>
				<Title className={classes.title}>
					Jedyny <br /> rowerowy <br /> blog którego <br />{' '}
					potrzebujesz
				</Title>
				<div className={classes.buttons}>
					<Button>Zaloguj się</Button>
					<Button>Zobacz najnowsze wpisy</Button>
				</div>
			</div>
		</div>
	</>
);

export default Home;
