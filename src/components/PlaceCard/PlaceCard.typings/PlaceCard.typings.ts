import { City } from '@typings/City/City';
import { TReviewItem } from '@typings/Review/Review';
import { TUserEntity } from '@typings/User/User';

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

export type TPlaceEntityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TPlaceEntityOld = {
  id: string;
  city: City;
  latitude: number;
  longitude: number;
  images: TPlaceImage[];
  mark?: TPlaceMark;
  name: string;
  host: TUserEntity;
  rating: TPlaceRating;
  features: TPlaceFeatures;
  price: TPlacePrice;
  insideList: TPlaceInsideItem[];
  description: TPlaceDescriptionItem[];
  reviews: TReviewItem[];
};

export type TPlaceEntity = {
  id: string;
  city: City;
  isFavorite: boolean;
  isPremium: false;
  location: TPlaceEntityLocation;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: 'string';
};
