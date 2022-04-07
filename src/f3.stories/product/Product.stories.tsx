import {Product} from "../../f1.main/m1.components";


export default {
  title: "Product",
  component: Product,
};

export const ProductBase = () => {
  return (
    <Product
      product={{
        title: "Product 1",
        id: "prod1",
        description: "Prod",
        cover: "",
        cost: 100,
      }}
    />
  );
};
