import { TPlaceEntity } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';
import { Point } from '@typings/City/City';

const offersToPoints = (allPlaces: TPlaceEntity[]): Point[] => {
  const points: Point[] = [];
  allPlaces.map((offer) =>
    points.push({
      title: offer.name,
      lat: offer.latitude,
      lng: offer.longitude,
    })
  );
  return points;
};

export default offersToPoints;
