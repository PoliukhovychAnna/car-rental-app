import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/operations';
import { selectCars } from '../../redux/selectors';
import { CarsList } from '../ListOfCars/CarsList';
import { CatalogWrapper, BtnLoadMore } from './StyledCatalog';

export const Catalog = () => {
  const [hidden, setHidden] = useState(false);
  const [limit, setLimit] = useState(12);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars(limit));
  }, [dispatch, limit]);

  const cars = useSelector(selectCars);

  const handleClick = () => {
    if (limit > cars.length) {
      setHidden(true);
      console.log('the end');
      toast.info('You have reached the end of the list', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return;
    }
    setLimit(l => l + 12);
  };

  return (
    <CatalogWrapper>
      <CarsList cars={cars} />
      {cars.length > 0 && (
        <BtnLoadMore hidden={hidden} onClick={() => handleClick()}>
          Load more
        </BtnLoadMore>
      )}
      <ToastContainer />
    </CatalogWrapper>
  );
};
