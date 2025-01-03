import Review from '@components/Review/Review';
import { TCommentEntityFull } from '@components/PlaceCard/PlaceCard.typings/PlaceCard.typings';

type ReviewsListProps = {
  reviews: TCommentEntityFull[];
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
