import { useState } from 'react';
import classNames from 'classnames';
import PlaceCard from '@components/PlaceCard/PlaceCard';
import { TPlaceEntity } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';

type TOffersListProps = {
  offers: TPlaceEntity[];
  type: 'Main' | 'Nearby';
};

const OffersList = ({ offers, type }: TOffersListProps): JSX.Element => {
  const [, setActiveOfferId] = useState<string | null>(null);

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
    <div className={classNames(containerClassName, 'places__list')}>
      {offers.map((offer) => (
        <PlaceCard
          place={offer}
          key={offer.id}
          onMouseOver={() => {
            setActiveOfferId(offer.id);
          }}
          onMouseLeave={() => {
            setActiveOfferId(null);
          }}
          type={type}
        />
      ))}
    </div>
  );
};

export default OffersList;
