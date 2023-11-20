import { NavLink, Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <div>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
