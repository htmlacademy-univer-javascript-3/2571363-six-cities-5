import Review from '@components/Review/Review';
import { TReviewItem } from '@typings/Review/Review';

type ReviewsListProps = {
  reviews: TReviewItem[];
};

function ReviewList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((reveiw) => (
        <Review key={reveiw.id} review={reveiw} />
      ))}
    </ul>
  );
}

export default ReviewList;
