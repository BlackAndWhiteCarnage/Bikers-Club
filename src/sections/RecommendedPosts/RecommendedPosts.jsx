/**
 * Internal dependencies
 */
import { Title, Slider, Card } from '@/components';
import classes from './RecommendedPosts.module.scss';

const RecommendedPosts = () => (
	<div className={classes.wrapper}>
		<div className={classes.inner}>
			<Title className={classes.title}>Polecane</Title>
			<div className={classes.slider}>
				<Slider>
					<Card
						title="Ekstremalne trasy rowerowe."
						description="Ekstremalne trasy rowerowe to wyjątkowe wyzwania dla każdego miłośnika jazdy na rowerze. Są to trasy wymagające nie tylko dużej kondycji, ale..."
						image={{
							src: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1722&q=80',
							alt: '',
						}}
					/>
					<Card
						title="Ekstremalne trasy rowerowe."
						description="Ekstremalne trasy rowerowe to wyjątkowe wyzwania dla każdego miłośnika jazdy na rowerze. Są to trasy wymagające nie tylko dużej kondycji, ale..."
						image={{
							src: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1722&q=80',
							alt: '',
						}}
					/>
					<Card
						title="Ekstremalne trasy rowerowe."
						description="Ekstremalne trasy rowerowe to wyjątkowe wyzwania dla każdego miłośnika jazdy na rowerze. Są to trasy wymagające nie tylko dużej kondycji, ale..."
						image={{
							src: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1722&q=80',
							alt: '',
						}}
					/>
					<Card
						title="Ekstremalne trasy rowerowe."
						description="Ekstremalne trasy rowerowe to wyjątkowe wyzwania dla każdego miłośnika jazdy na rowerze. Są to trasy wymagające nie tylko dużej kondycji, ale..."
						image={{
							src: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1722&q=80',
							alt: '',
						}}
					/>
					<Card
						title="Ekstremalne trasy rowerowe."
						description="Ekstremalne trasy rowerowe to wyjątkowe wyzwania dla każdego miłośnika jazdy na rowerze. Są to trasy wymagające nie tylko dużej kondycji, ale..."
						image={{
							src: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1722&q=80',
							alt: '',
						}}
					/>
				</Slider>
			</div>
		</div>
	</div>
);

export default RecommendedPosts;
