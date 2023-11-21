import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteCars,
  deleteFavoriteCars,
} from '../../redux/favoriteCarsSlice';
import { selectFavoriteCars } from '../../redux/selectors';
import { saveToLocalStorage, loadFromLocalStorage } from '../../localStorage';
import {
  ListItem,
  Icon,
  FavBtn,
  ImgWrapper,
  TitleWrapper,
  CarTitle,
  SpanTitle,
  Price,
  ListItemDescription,
  BtnLearnMore,
} from './StyledCarItem';
import defaultCar from '../../images/carPic.png';
import heart from '../../images/heart.svg';
import activeHeart from '../../images/active-heart.svg';

export const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);

  const [isFavorite, setIsFavorite] = useState(
    !!favoriteCars.find(favCar => favCar.id === car.id)
  );
  const handleClickFavorite = () => {
    if (!isFavorite) {
      dispatch(addFavoriteCars(car));
      //   saveToLocalStorage('favCars', car);
    } else {
      dispatch(deleteFavoriteCars(car));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <ListItem key={car.id}>
      <ImgWrapper>
        <FavBtn type="submit" onClick={handleClickFavorite}>
          {isFavorite ? <Icon src={activeHeart} /> : <Icon src={heart} />}
        </FavBtn>
        <img
          src={car.img || defaultCar}
          alt={car.make}
          width="274"
          height="268"
          onError={event => (event.target.src = defaultCar)}
        />
      </ImgWrapper>
      <TitleWrapper>
        <CarTitle>
          {car.make.slice(0, 10)}{' '}
          <SpanTitle>{car.model.slice(0, 11)}</SpanTitle>, {car.year}
        </CarTitle>
        <Price>{car.rentalPrice}</Price>
      </TitleWrapper>

      <ListItemDescription>
        {car.address} | {car.rentalCompany} | {car.type} | {car.model} |{' '}
        {car.id} | {car.accessories[0].slice(0, 23)}
      </ListItemDescription>

      <BtnLearnMore type="button">Learn more</BtnLearnMore>
    </ListItem>
  );
};
