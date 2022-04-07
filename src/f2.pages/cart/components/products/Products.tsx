import { ProductsWrapper } from "./styles";
import { useSelector } from "react-redux";
import { selectCartProducts } from "../../../../f1.main/m2.bll/selectors/selectors";
import { Product } from "./components/Product";

export const Products = () => {
  const cartProduct = useSelector(selectCartProducts);

  return (
    <ProductsWrapper item md={8} xs={12}>
      {cartProduct &&
        cartProduct.map((prod) => {
          return <Product key={`CartProKey: ${prod.id}`} product={prod} />;
        })}
    </ProductsWrapper>
  );
};
