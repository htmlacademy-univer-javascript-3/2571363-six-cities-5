// import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
// import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';
// import Rating from '@components/Rating/Rating';
// import CommentForm from '@components/CommentForm/CommentForm';
import Header from '@components/Header/Header';
// import ReviewList from '@components/ReviewList/ReviewList';
// import Map from '@components/Map/Map';
// import OffersList from '@components/OffersList/OffersList';
// import { TPlaceEntity } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';
// import { Point, City } from '@typings/City/City';
// import offersToPoints from '@utils/offersToPoints/offersToPoints';

const OfferPage = (): JSX.Element => {
  const { id } = useParams();
  // eslint-disable-next-line no-console
  console.log(id);

  // const place = useMemo(
  //   () => allOffers.find(({ id: offerId }) => offerId === id),
  //   [id]
  // );

  // if (!place) {
  //   return <NotFoundPage />;
  // }

  // const currentCity: City = place.city;

  // const nearbyOffers: TPlaceEntity[] = allOffers.filter(
  //   (offer: TPlaceEntity) => offer.id !== place.id && offer.city === currentCity
  // );

  // const nearbyPoints: Point[] = offersToPoints(nearbyOffers);

  return (
    <div className="page">
      <Header isAuth />
      <p>
        Заглушка до выполнения задания Добро пожаловать, или посторонним вход
        воспрещён часть 2
      </p>
      {/* <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {place.images.map((image) => (
                <div className="offer__image-wrapper" key={image.id}>
                  <img
                    className="offer__image"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {place.mark ? (
                <div className="offer__mark">
                  <span>{place.mark}</span>
                </div>
              ) : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{place.name}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <Rating
                starValue={place.rating.starValue}
                numericValue={place.rating.numericValue}
                containerClassName="offer__rating"
                starsClassName="offer__stars"
              />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {place.features.placeType}
                </li>
                {place.features.bedroomCount ? (
                  <li className="offer__feature offer__feature--bedrooms">
                    {`${place.features.bedroomCount} Bedrooms`}
                  </li>
                ) : null}
                <li className="offer__feature offer__feature--adults">
                  {`Max ${place.features.maxAdultOccupancy} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{place.price.value}</b>
                <span className="offer__price-text">
                  &nbsp;{place.price.period}
                </span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {place.insideList.map((item) => (
                    <li className="offer__inside-item" key={item.id}>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={place.host.avatarImageSrc}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{place.host.name}</span>
                  {place.host.status ? (
                    <span className="offer__user-status">
                      {place.host.status}
                    </span>
                  ) : null}
                </div>
                <div className="offer__description">
                  {place.description.map((item) => (
                    <p className="offer__text" key={item.id}>
                      {item.text}
                    </p>
                  ))}
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">
                    {place.reviews.length}
                  </span>
                </h2>
                <ReviewList reviews={place.reviews} />
                <CommentForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={currentCity} points={nearbyPoints} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList offers={nearbyOffers} type="Nearby" />
          </section>
        </div>
      </main> */}
    </div>
  );
};

export default OfferPage;
