import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@components/Rating/Rating';
import BookmarkButton from '@components/BookmarkButton/BookmarkButton';
import { TPlaceEntity } from './PlaceCard.typings/PlaceCard.typings';

type TPlaceProps = {
  place: TPlaceEntity;
  onMouseOver?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  type: 'Main' | 'Favorites';
};

function PlaceCard({
  place,
  onMouseOver,
  onMouseLeave,
  type,
}: TPlaceProps): JSX.Element {
  const coverImage = place.images.filter((el) => el.isCoverImage);
  return (
    <article
      className={`${
        type === 'Main' ? 'cities__card' : 'favorites__card'
      } place-card`}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {place.mark ? (
        <div className="place-card__mark">
          <span>{place.mark}</span>
        </div>
      ) : null}
      <div
        className={`${
          type === 'Main' ? 'cities__image-wrapper' : 'favorites__image-wrapper'
        } place-card__image-wrapper`}
      >
        <Link to={`/offer/${place.id}`}>
          <img
            className="place-card__image"
            src={coverImage[0].src}
            width={type === 'Main' ? '260' : '150'}
            height={type === 'Main' ? '200' : '110'}
            alt={coverImage[0].alt}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price.value}</b>
            <span className="place-card__price-text">
              &#47;&nbsp;{place.price.period}
            </span>
          </div>
          <BookmarkButton marked={type !== 'Main'} />
        </div>
        <Rating
          starValue={place.rating.starValue}
          containerClassName={'place-card__rating'}
          starsClassName={'place-card__stars'}
        />
        <h2 className="place-card__name">
          <Link to={`/offer/${place.id}`}>{place.name}</Link>
        </h2>
        <p className="place-card__type">{place.features.placeType}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
