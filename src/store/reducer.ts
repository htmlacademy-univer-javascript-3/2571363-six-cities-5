import { createReducer } from '@reduxjs/toolkit';
import { cities } from '@mocks/Cities/Cities';
import getCityOffers from '@utils/getCityOffers/getCityOffers';
import { setCity, setOffers } from './actions';
import { State } from './types';

const initialState: State = {
  city: cities.Paris,
  offers: getCityOffers(cities.Paris),
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
);

export default reducer;
