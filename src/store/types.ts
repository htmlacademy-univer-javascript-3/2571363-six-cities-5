import { City } from '@typings/City/City';
import { TPlaceEntity } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';
import { store } from '.';

export type State = {
  city: City;
  offers: TPlaceEntity[];
};

export type AppDispatch = typeof store.dispatch;
