import { createAction } from '@reduxjs/toolkit';
import { City } from '@typings/City/City';
import { TPlaceEntity } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';

export const Actions = {
  SET_CITY: 'SET_CITY',
  SET_OFFERS: 'SET_OFFERS',
};

export const setCity = createAction<City>(Actions.SET_CITY);

export const setOffers = createAction<TPlaceEntity[]>(Actions.SET_OFFERS);
