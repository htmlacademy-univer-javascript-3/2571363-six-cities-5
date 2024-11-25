import { useState } from 'react';
import PlaceCard from '@components/PlaceCard/PlaceCard';
import { TPlaceEntity } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';

type TOffersListProps = {
  offers: TPlaceEntity[];
};

const OffersList = ({ offers }: TOffersListProps): JSX.Element => {
  const [, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
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
          type={'Main'}
        />
      ))}
    </div>
  );
};

export default OffersList;
