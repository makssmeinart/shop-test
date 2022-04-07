import { Route, Routes } from "react-router-dom";
import { routes } from "../../m2.bll/routes/routes";
import { ProductsPage } from "../../../f2.pages/products/ProductsPage";
import { CartPage } from "../../../f2.pages/cart/CartPage";

export const PageHolder = () => {
  return (
    <Routes>
      <Route path={routes.products} element={<ProductsPage />} />
      <Route path={routes.cart} element={<CartPage />} />
    </Routes>
  );
};
