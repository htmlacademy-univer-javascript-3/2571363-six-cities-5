import { City, CityName } from '../../typings/City/City';

export const cities: Record<CityName, City> = {
  Paris: {
    title: 'Paris',
    lat: 48.856667,
    lng: 2.352222,
    zoom: 10,
  },
  Cologne: {
    title: 'Cologne',
    lat: 50.936389,
    lng: 6.952778,
    zoom: 10,
  },
  Brussels: {
    title: 'Brussels',
    lat: 50.846667,
    lng: 4.3525,
    zoom: 10,
  },
  Amsterdam: {
    title: 'Amsterdam',
    lat: 52.372778,
    lng: 4.893611,
    zoom: 10,
  },
  Hamburg: {
    title: 'Hamburg',
    lat: 53.55,
    lng: 10,
    zoom: 10,
  },
  Dusseldorf: {
    title: 'Dusseldorf',
    lat: 51.233333,
    lng: 6.783333,
    zoom: 10,
  },
};
