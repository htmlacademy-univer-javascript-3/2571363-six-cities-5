import {
  TPlaceEntity,
  TPlaceEntityFull,
} from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';
import { Point } from '@typings/City/City';

const offersToPoints = (
  allPlaces: TPlaceEntity[] | TPlaceEntityFull[]
): Point[] => {
  const points: Point[] = [];
  allPlaces.map((offer) =>
    points.push({
      title: offer.title,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    })
  );
  return points;
};

export default offersToPoints;
