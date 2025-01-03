import { createSlice } from '@reduxjs/toolkit';
import {
  setCity,
  setCityOffers,
  setSortOrder,
  getGlobalOffers,
  setOfferActive,
} from './actions';
import { TPlaceEntity } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';
import { City } from '@typings/City/City';
import { SortOrder } from '@components/SortingFilter/SortingFilter.typings/SortingFilter.typings';
import { cities } from '@mocks/Cities/Cities';

type OffersState = {
  globalOffers: TPlaceEntity[];
  loading: boolean;
  error: string | null;
  cityOffers: TPlaceEntity[];
  city: City;
  sortOrder: SortOrder;
  activeOffer: TPlaceEntity | null;
};

const initialState: OffersState = {
  globalOffers: [],
  loading: true,
  error: null,
  cityOffers: [],
  city: cities.Paris,
  sortOrder: SortOrder.POPULAR,
  activeOffer: null,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setCityOffers, (state, action) => {
        state.cityOffers = action.payload;
      })
      .addCase(setCity, (state, action) => {
        state.city = action.payload;
      })
      .addCase(setSortOrder, (state, action) => {
        state.sortOrder = action.payload;
      })
      .addCase(getGlobalOffers.fulfilled, (state, action) => {
        state.globalOffers = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getGlobalOffers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGlobalOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(setOfferActive, (state, action) => {
        state.activeOffer = action.payload;
      });
  },
});

export default offersSlice.reducer;
