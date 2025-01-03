import classNames from 'classnames';
import PlaceCard from '@components/PlaceCard/PlaceCard';
import { TPlaceEntity } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';
import { Point } from '@typings/City/City';

type TOffersListProps = {
  offers: TPlaceEntity[];
  type: 'Main' | 'Nearby';
  onOfferSelect?: (point: Point | undefined) => void;
};

const OffersList = ({
  offers,
  type,
  onOfferSelect,
}: TOffersListProps): JSX.Element => {
  let containerClassName: string;

  switch (type) {
    case 'Main':
      containerClassName = 'cities__places-list tabs__content';
      break;
    case 'Nearby':
      containerClassName = 'near-places__list';
      break;
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      <div className={classNames(containerClassName, 'places__list')}>
        {offers.map((offer) => (
          <PlaceCard
            place={offer}
            key={offer.id}
            onOfferSelect={onOfferSelect}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersList;
