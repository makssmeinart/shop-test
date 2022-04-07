import React, { useEffect } from "react";
import "./App.css";
import { AppRootStateType, useAppDispatch } from "../../f1.main/m2.bll/store";
import { productsActions } from "../../f1.main/m2.bll/reducer/products";
import { useSelector } from "react-redux";
import { ProductType } from "../../f1.main/m2.bll/reducer/products/productsReducer";
import { Product } from "../../f1.main/m1.components";

function App() {
  const products = useSelector<AppRootStateType, ProductType[]>(
    (state) => state.products
  );
  const dispatch = useAppDispatch();
  const currentLs = localStorage.getItem("cart");

  useEffect(() => {
    dispatch(productsActions.fetchProducts());

    if (currentLs == null) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  return (
    <div className="App">
      {products &&
        products.map((prod) => <Product key={prod.id} product={prod} />)}
    </div>
  );
}

export default App;
