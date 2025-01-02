import { City } from '@typings/City/City';
import { TPlaceEntity } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';

function filterOffers(offers: TPlaceEntity[], city: City) {
  return offers.filter((offer) => offer.city.name === city.name);
}

export default filterOffers;
