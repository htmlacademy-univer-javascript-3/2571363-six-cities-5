type TBookmarkButtonProps = {
  marked: boolean;
};

const BookmarkButton = ({ marked }: TBookmarkButtonProps): JSX.Element => (
  <button
    className={`place-card__bookmark-button${
      marked ? ' place-card__bookmark-button--active' : ''
    } button`}
    type="button"
  >
    <svg className="place-card__bookmark-icon" width="18" height="19">
      <use xlinkHref="#icon-bookmark"></use>
    </svg>
    <span className="visually-hidden">
      {marked ? 'To bookmarks' : 'In bookmarks'}
    </span>
  </button>
);

export default BookmarkButton;
