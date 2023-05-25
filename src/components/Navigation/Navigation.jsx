/**
 * External dependencies
 */
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { paths, rankings, user } from '@/config';
import { Popover } from '@/components';
import { ReactComponent as ArrowIcon } from '@/icons/arrow.svg';
import { ReactComponent as LogoIcon } from '@/icons/logo.svg';
import { ReactComponent as UserIcon } from '@/icons/user.svg';
import classes from './Navigation.module.scss';

const cx = classnames.bind(classes);

const Navigation = () => (
	<div className={classes.wrapper}>
		<nav className={classes.inner}>
			<a className={classes.logo} href="/">
				<LogoIcon />
			</a>
			<div className={classes.links}>
				<Popover
					button={
						<button
							data-target="popup-element"
							className={cx(
								'dropdownButton',
								'is-style-text-small'
							)}
						>
							Rankingi <ArrowIcon className={classes.arrow} />
						</button>
					}
				>
					<div className={classes.dropdownLinks}>
						{rankings.map(({ url, label }, index) => (
							<a
								href={url}
								key={index}
								className={classes.dropdownLink}
							>
								{label}
							</a>
						))}
					</div>
				</Popover>
				{paths.map(({ url, label }, index) => (
					<a
						key={index}
						className={cx('link', 'is-style-text-small')}
						href={url}
					>
						{label}
					</a>
				))}
			</div>
			<Popover
				button={
					<button
						data-target="popup-element"
						className={classes.user}
					>
						<UserIcon className={classes.userIcon} />
					</button>
				}
			>
				<div className={classes.dropdownLinks}>
					{user.map(({ url, label }, index) => (
						<a
							href={url}
							key={index}
							className={classes.dropdownLink}
						>
							{label}
						</a>
					))}
				</div>
			</Popover>
		</nav>
	</div>
);

export default Navigation;
