import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCars } from "../../redux/operations";
import { selectCars } from "../../redux/selectors";
import { CarDetails } from "../CarDetails/CarDetails";
import defaultCar from "../../car.webp";
import {
  CatalogWrapper,
  List,
  ListItem,
  ImgWrapper,
  TitleWrapper,
  CarTitle,
  SpanTitle,
  Price,
  ListItemDescription,
  BtnLearnMore,
  BtnLoadMore,
} from "./StyledCatalog";

export const Catalog = () => {
  const [hidden, setHidden] = useState(false);
  const [limit, setLimit] = useState(12);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars(limit));
  }, [dispatch, limit]);

  const cars = useSelector(selectCars);
  console.log(cars);

  const handleClick = () => {
    if (limit > cars.length) {
      setHidden(true);
      console.log("the end");
      toast.info("You have reached the end of the list", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return;
    }
    setLimit((l) => l + 12);
  };

  return (
    <CatalogWrapper>
      <List>
        {cars.map((car) => (
          <ListItem key={car.id}>
            <ImgWrapper>
              <img
                src={car.img || defaultCar}
                alt={car.make}
                width="274"
                height="268"
              />
            </ImgWrapper>
            <TitleWrapper>
              <CarTitle>
                {car.make.slice(0, 10)}{" "}
                <SpanTitle>{car.model.slice(0, 11)}</SpanTitle>, {car.year}
              </CarTitle>
              <Price>{car.rentalPrice}</Price>
            </TitleWrapper>

            <ListItemDescription>
              {car.address} | {car.rentalCompany} | {car.type} | {car.model} |{" "}
              {car.id} | {car.accessories[0].slice(0, 23)}
            </ListItemDescription>

            <BtnLearnMore type="button">Learn more</BtnLearnMore>
          </ListItem>
        ))}
      </List>
      <BtnLoadMore hidden={hidden} onClick={() => handleClick()}>
        Load more
      </BtnLoadMore>
      <ToastContainer />
    </CatalogWrapper>
  );
};
