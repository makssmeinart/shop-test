import { useSelector } from "react-redux";
import { AppRootStateType, useAppDispatch } from "../../f1.main/m2.bll/store";
import { ProductType } from "../../f1.main/m2.bll/reducer/products/productsReducer";
import { Product } from "../../f1.main/m1.components";
import { useEffect } from "react";
import { productsActions } from "../../f1.main/m2.bll/reducer/products";
import { ProductsHolder } from "./components";
import {Container} from "@mui/material";

export const ProductsPage = () => {
  const dispatch = useAppDispatch();

  const products = useSelector<AppRootStateType, ProductType[]>(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(productsActions.fetchProducts());
  }, []);

  return (
    <section>
      <Container>
        <ProductsHolder
          container
          gap={5}
          justifyContent={"center"}
          marginTop={10}
        >
          {products &&
            products.map((prod) => <Product key={prod.id} product={prod} />)}
        </ProductsHolder>
      </Container>
    </section>
  );
};
