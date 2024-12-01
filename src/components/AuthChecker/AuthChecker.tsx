import LoginPage from '@pages/LoginPage/LoginPage';

type TAuthCheckerProps = {
  element: JSX.Element;
  isAuthorized: boolean;
};

const AuthChecker = ({
  element,
  isAuthorized,
}: TAuthCheckerProps): JSX.Element => (isAuthorized ? element : <LoginPage />);

export default AuthChecker;
