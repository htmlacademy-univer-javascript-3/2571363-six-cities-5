import { City } from '../../types/City/City';
import { TPlaceEntity } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';

export const getActiveOffers = (
  allPlaces: TPlaceEntity[],
  newCity: City
): TPlaceEntity[] =>
  allPlaces.filter((offer: TPlaceEntity) => offer.city.title === newCity.title);
