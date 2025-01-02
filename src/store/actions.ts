import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ROUTES, errorHandler } from '@services/index';
import { AppThunk, AsyncThunkConfig } from '@store/types';
import { SortOrder } from '@components/SortingFilter/SortingFilter.typings/SortingFilter.typings';
import filterOffers from '@utils/filterOffers/filterOffers';
import sortOffers from '@utils/sortOffers/sortOffers';
import { City } from '@typings/City/City';
import { TPlaceEntity } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';

export const Actions = {
  SET_CITY: 'city/set',
  SET_SORT_ORDER: 'sortOrder/set',
  SET_CITY_OFFERS: 'cityOffers/set',
  SET_GLOBAL_OFFERS: 'globalOffers/set',
  APPLY_CITY: 'city/apply',
  APPLY_SORT_ORDER: 'sortOrder/apply',
  UPDATE_CITY_OFFERS: 'cityOffers/update',
  FETCH_GLOBAL_OFFERS: 'globalOffers/fetch',
};

export const setCity = createAction<City>(Actions.SET_CITY);

export const setCityOffers = createAction<TPlaceEntity[]>(
  Actions.SET_CITY_OFFERS
);

export const setSortOrder = createAction<SortOrder>(Actions.SET_SORT_ORDER);

export const setGlobalOffers = createAction<SortOrder>(
  Actions.SET_GLOBAL_OFFERS
);

export function applyCity(newCity: City): AppThunk {
  return function applySortOrderThunk(dispatch, getState) {
    const state = getState();
    let newCityOffers = filterOffers(state.offersSlice.globalOffers, newCity);
    newCityOffers = sortOffers(newCityOffers, state.offersSlice.sortOrder);
    dispatch(setCity(newCity));
    dispatch(setCityOffers(newCityOffers));
  };
}

export function applySortOrder(newSortOrder: SortOrder): AppThunk {
  return function applySortOrderThunk(dispatch, getState) {
    const state = getState();
    const newCityOffers = sortOffers(
      state.offersSlice.cityOffers,
      newSortOrder
    );
    dispatch(setSortOrder(newSortOrder));
    dispatch(setCityOffers(newCityOffers));
  };
}

export function updateCityOffers(): AppThunk {
  return function updateCityOffersThunk(dispatch, getState) {
    const state = getState();
    let newCityOffers = filterOffers(
      state.offersSlice.globalOffers,
      state.offersSlice.city
    );
    newCityOffers = sortOffers(newCityOffers, state.offersSlice.sortOrder);
    dispatch(setCityOffers(newCityOffers));
  };
}

export const getGlobalOffers = createAsyncThunk<
  TPlaceEntity[],
  void,
  AsyncThunkConfig
>(Actions.FETCH_GLOBAL_OFFERS, async (_, thunkApi) => {
  try {
    const response = await thunkApi.extra.api.get<TPlaceEntity[]>(
      API_ROUTES.OFFERS.GET_GLOBAL
    );

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(errorHandler(error));
  }
});
