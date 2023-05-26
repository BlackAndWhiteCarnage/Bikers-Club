/**
 * External dependencies
 */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Context } from '@/components/ContextProvider/ContextProvider';
import { paths, rankings, user as userLinks } from '@/config';
import { Popover, Login, Button } from '@/components';
import { ReactComponent as ArrowIcon } from '@/icons/arrow.svg';
import { ReactComponent as LogoIcon } from '@/icons/logo.svg';
import { ReactComponent as UserIcon } from '@/icons/user.svg';
import { useLogOut } from '@/hooks';
import classes from './Navigation.module.scss';

const cx = classnames.bind(classes);

const Navigation = () => {
	const { user } = useContext(Context);

	const logout = useLogOut();

	return (
		<div className={classes.wrapper}>
			<nav className={classes.inner}>
				<Link className={classes.logo} to="/">
					<LogoIcon />
				</Link>
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
								<Link
									to={url}
									key={index}
									className={classes.dropdownLink}
								>
									{label}
								</Link>
							))}
						</div>
					</Popover>
					{paths.map(({ url, label }, index) => (
						<Link
							key={index}
							className={cx('link', 'is-style-text-small')}
							to={url}
						>
							{label}
						</Link>
					))}
				</div>
				<Popover
					button={
						<button
							data-target="popup-element"
							className={classes.user}
							to="/login"
						>
							<UserIcon className={classes.userIcon} />
						</button>
					}
				>
					{user ? (
						<div className={classes.userButtons}>
							{userLinks.map(({ url, label }, index) => (
								<Button
									to={url}
									key={index}
									className={classes.userButton}
								>
									{label}
								</Button>
							))}
							<Button
								onClick={logout}
								className={classes.userButton}
							>
								Wyloguj
							</Button>
						</div>
					) : (
						<Login />
					)}
				</Popover>
			</nav>
		</div>
	);
};

export default Navigation;
