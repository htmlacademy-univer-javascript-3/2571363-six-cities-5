export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type CityName =
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

export type City = {
  title: CityName;
  lat: number;
  lng: number;
  zoom: number;
};
