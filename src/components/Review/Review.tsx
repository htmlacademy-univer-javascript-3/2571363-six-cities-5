import Rating from '@components/Rating/Rating';
import { TReviewItem } from '@typings/Review/Review';

type TReviewProps = {
  review: TReviewItem;
};

const Review = ({ review }: TReviewProps) => (
  <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          className="reviews__avatar user__avatar"
          // src={review.user.avatarImageSrc}
          src=""
          width="54"
          height="54"
          alt="Reviews avatar"
        />
      </div>
      <span className="reviews__user-name">{review.user.name}</span>
    </div>
    <div className="reviews__info">
      <Rating
        starValue={review.stars}
        containerClassName="reviews__rating"
        starsClassName="reviews__stars"
      />
      <p className="reviews__text">{review.text}</p>
      <time className="reviews__time" dateTime={review.datetime}>
        {review.readableDate}
      </time>
    </div>
  </li>
);

export default Review;
