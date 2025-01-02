import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Rating from '@components/Rating/Rating';
import BookmarkButton from '@components/BookmarkButton/BookmarkButton';
import { TPlaceEntity } from './PlaceCard.typings/PlaceCard.typings';
import { Point } from '@typings/City/City';
import offersToPoints from '@utils/offersToPoints/offersToPoints';

type TPlaceProps = {
  place: TPlaceEntity;
  type: 'Main' | 'Favorites' | 'Nearby';
  onOfferSelect?: (point: Point | undefined) => void;
};

const offerViewConfig = {
  Main: {
    cardClassName: 'cities__card',
    imageWrapperClassName: 'cities__image-wrapper',
    imageWidth: '260',
    imageHeight: '200',
  },
  Favorites: {
    cardClassName: 'favorites__card',
    imageWrapperClassName: 'favorites__image-wrapper',
    imageWidth: '150',
    imageHeight: '110',
  },
  Nearby: {
    cardClassName: 'near-places__card',
    imageWrapperClassName: 'near-places__image-wrapper',
    imageWidth: '260',
    imageHeight: '200',
  },
};

function PlaceCard({ place, type, onOfferSelect }: TPlaceProps): JSX.Element {
  const offerPoint = offersToPoints([place])[0];

  const viewConfig = offerViewConfig[type];

  return (
    <article
      className={classNames(viewConfig.cardClassName, 'place-card')}
      onMouseOver={onOfferSelect ? () => onOfferSelect(offerPoint) : undefined}
      onMouseLeave={onOfferSelect ? () => onOfferSelect(undefined) : undefined}
    >
      {place.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div
        className={classNames(
          viewConfig.imageWrapperClassName,
          'place-card__image-wrapper'
        )}
      >
        <Link to={`/offer/${place.id}`}>
          <img
            className="place-card__image"
            src={place.previewImage}
            width={viewConfig.imageWidth}
            height={viewConfig.imageHeight}
            alt={place.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton marked={type === 'Favorites'} />
        </div>
        <Rating
          starValue={place.rating}
          containerClassName={'place-card__rating'}
          starsClassName={'place-card__stars'}
        />
        <h2 className="place-card__name">
          <Link to={`/offer/${place.id}`}>{place.title}</Link>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
