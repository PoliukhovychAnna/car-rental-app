import { useSelector } from 'react-redux';
import { CarsList } from '../ListOfCars/CarsList';
import { selectFavoriteCars } from '../../redux/selectors';
import defaultCar from '../../images/carPic.png';

export const Favorites = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
  console.log(favoriteCars);

  return (
    <>
      <h1>Favorites</h1>
      {favoriteCars.length > 0 ? (
        <CarsList cars={favoriteCars} />
      ) : (
        <div>
          <img src={defaultCar} alt="A car" width="500" height="326" />
          <p>You haven't added any favorite cars yet</p>
        </div>
      )}
    </>
  );
};
