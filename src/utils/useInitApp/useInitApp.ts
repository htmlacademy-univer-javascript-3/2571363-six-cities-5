import { useEffect } from 'react';
import { useAppDispatch } from '@store/hooks';
import { getGlobalOffers, validateUser } from '@store/actions';

function useAppInit() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(validateUser());
    dispatch(getGlobalOffers());
  }, [dispatch]);
}

export default useAppInit;
