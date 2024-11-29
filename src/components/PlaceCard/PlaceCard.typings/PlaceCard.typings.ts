export type TPlacePriceType = 'night';

export type TPlaceType = 'Apartment' | 'Room';

export type TPlaceImage = {
  id: number;
  src: string;
  alt: string;
  isCoverImage?: boolean;
};

export type TPlaceMark = 'Premium';

export type TPlaceRating = {
  numericValue: number;
  starValue: number;
};

export type TPlaceFeatures = {
  placeType: TPlaceType;
  bedroomCount?: number;
  maxAdultOccupancy: number;
};

export type TPlacePrice = {
  value: number;
  period: 'night';
};

export type TPlaceInsideItem = {
  id: number;
  text: string;
};

export type TPlaceDescriptionItem = {
  id: number;
  text: string;
};

export type TPlaceReview = {
  id: string;
  stars: 1 | 2 | 3 | 4 | 5;
  text: string;
  datetime: string;
  readableDate: string;
};

export type TPlaceEntity = {
  id: string;
  city: string;
  images: TPlaceImage[];
  mark?: TPlaceMark;
  name: string;
  rating: TPlaceRating;
  features: TPlaceFeatures;
  price: TPlacePrice;
  insideList: TPlaceInsideItem[];
  description: TPlaceDescriptionItem[];
  reviews: TPlaceReview[];
};
