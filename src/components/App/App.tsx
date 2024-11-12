import MainPage from '@pages/MainPage/MainPage';
import { TPlaceCardEntity } from '../PlaceCard/PlaceCard.typings/PlaceCard.typings';

type TProps = {
  places: TPlaceCardEntity[];
};

function App({ places }: TProps): JSX.Element {
  return <MainPage places={places} />;
}

export default App;
