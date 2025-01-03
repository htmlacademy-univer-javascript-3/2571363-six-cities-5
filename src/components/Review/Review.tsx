import Rating from '@components/Rating/Rating';
import { TCommentEntityFull } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';

type TReviewProps = {
  review: TCommentEntityFull;
};

const Review = ({ review }: TReviewProps) => {
  const commentDate = new Date(review.date);
  const datetime = commentDate.toISOString().split('T')[0];
  const readableDate = commentDate.toLocaleDateString('en-gb', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating
          value={review.rating}
          containerClassName="reviews__rating"
          starsClassName="reviews__stars"
        />
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={datetime}>
          {readableDate}
        </time>
      </div>
    </li>
  );
};

export default Review;
