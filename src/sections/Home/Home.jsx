/**
 * External dependencies
 */
import classes from './Home.module.scss';
import ReactPlayer from 'react-player/lazy';
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
		<div className={classes.wrapper}></div>
	</>
);

export default Home;
