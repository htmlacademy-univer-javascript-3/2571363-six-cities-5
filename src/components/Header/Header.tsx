import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { APP_ROUTES } from '@services/constants';
import { logout } from '@store/actions';

const Header = (): JSX.Element | null => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { authorizationStatus, userData } = useAppSelector(
    (state) => state.userSlice
  );

  const handleLogout: React.MouseEventHandler<HTMLAnchorElement> = () => {
    dispatch(logout());
  };
  const isLoginPage = window.location.pathname === APP_ROUTES.LOGIN;

  return isLoginPage ? null : (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to="/"
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          {authorizationStatus ? (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href={APP_ROUTES.FAVORITES}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      {userData?.name}
                    </span>
                    <span className="header__favorite-count">0</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" onClick={handleLogout}>
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          ) : (
            <nav className="header__nav">
              <li className="header__nav-item">
                <a
                  className="header__nav-link"
                  onClick={() => navigate(APP_ROUTES.LOGIN)}
                >
                  <span className="header__signout">Sign in</span>
                </a>
              </li>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
