import LoginPage from '@pages/LoginPage/LoginPage';

type AuthorizedRouteProps = {
  element: JSX.Element;
  isAuthorized: boolean;
};

const AuthChecker = ({
  element,
  isAuthorized,
}: AuthorizedRouteProps): JSX.Element =>
  isAuthorized ? element : <LoginPage />;

export default AuthChecker;
