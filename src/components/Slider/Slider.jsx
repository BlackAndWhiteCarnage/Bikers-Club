/**
 * External dependencies
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Slider.module.scss';

const cx = classnames.bind(classes);

const Slider = ({ children, className, ...props }) => (
	<div className={cx('wrapper', className)}>
		<Swiper
			className={classes.swiperWrapper}
			slidesPerView="auto"
			centeredSlides
			spaceBetween={48}
			slideToClickedSlide
			{...props}
		>
			{children.map((item, index) => (
				<SwiperSlide key={index} className={classes.slideWrapper}>
					{item}
				</SwiperSlide>
			))}
		</Swiper>
	</div>
);

export default Slider;
