import { useEffect } from 'react';
import { useAppDispatch } from '@store/hooks';
import { getGlobalOffers } from '@store/actions';

function useAppInit() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGlobalOffers());
  }, [dispatch]);
}

export default useAppInit;
