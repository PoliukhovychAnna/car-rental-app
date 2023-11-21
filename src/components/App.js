import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../redux/selectors";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { HomePage } from "../pages/Home/HomePage";
import { CatalogPage } from "../pages/Catalog/CatalogPage";
import { FavoritesPage } from "../pages/Favorites/FavoritesPage";

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
