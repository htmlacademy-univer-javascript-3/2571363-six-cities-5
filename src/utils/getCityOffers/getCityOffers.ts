import { City } from '@typings/City/City';
import { TPlaceEntity } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';
import { allOffers } from '@mocks/offers/offers';

const getCityOffers = (city: City): TPlaceEntity[] =>
  allOffers.filter((offer: TPlaceEntity) => offer.city === city);

export default getCityOffers;
