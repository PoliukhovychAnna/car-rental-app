import { Outlet } from "react-router-dom";
import { Container, Navigation, StyledNavlink } from "./StyledLayout";

export const SharedLayout = () => {
  return (
    <>
      <Navigation>
        <StyledNavlink to="/" end>
          Home
        </StyledNavlink>
        <StyledNavlink to="/catalog">Catalog</StyledNavlink>
        <StyledNavlink to="/favorites">Favorites</StyledNavlink>
      </Navigation>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
