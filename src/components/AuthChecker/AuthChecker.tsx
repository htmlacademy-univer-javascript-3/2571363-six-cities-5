import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { APP_ROUTES } from '@services/constants';
import { useAppSelector } from '@store/hooks';

type TAuthCheckerProps = {
  element: JSX.Element;
};

const AuthChecker = ({ element }: TAuthCheckerProps): JSX.Element => {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(
    (state) => state.userSlice.authorizationStatus
  );

  useEffect(() => {
    if (!authorizationStatus) {
      navigate(APP_ROUTES.LOGIN);
    }
  }, [navigate, authorizationStatus]);

  return element;
};

export default AuthChecker;
