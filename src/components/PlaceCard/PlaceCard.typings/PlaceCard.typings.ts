export type TPlaceMark = 'Premium';

export type TPlacePriceType = 'night';

export type TPlaceType = 'Apartment' | 'Room';

export type TPlaceCardEntity = {
  mark?: TPlaceMark;
  imageSrc: string;
  priceValue: number;
  priceType: TPlacePriceType;
  starRating: 1 | 2 | 3 | 4 | 5;
  name: string;
  type: TPlaceType;
};
