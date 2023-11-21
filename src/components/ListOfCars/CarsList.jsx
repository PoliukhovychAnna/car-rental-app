import { CarItem } from '../CarItem/CarItem';
import { List } from './StyledCarsList';

export const CarsList = ({ cars }) => {
  return (
    <List>
      {cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </List>
  );
};
