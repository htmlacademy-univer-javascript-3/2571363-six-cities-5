import { City } from '../../typings/City/City';
import { TPlaceEntity } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';

const getActiveOffers = (
  allPlaces: TPlaceEntity[],
  newCity: City
): TPlaceEntity[] =>
  allPlaces.filter((offer: TPlaceEntity) => offer.city.title === newCity.title);

export default getActiveOffers;
