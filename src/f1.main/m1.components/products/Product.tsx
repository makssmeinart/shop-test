import { Card, CardBottom, CardTop, CardTopImg } from "./style";
import { ProductType } from "../../m2.bll/reducer/products/productsReducer";
import { Button, Typography } from "@mui/material";
import { useAppDispatch } from "../../m2.bll/store";
import { addProductToCart } from "../../m2.bll/reducer/cart/cartReducer";

export const Product = ({ product }: ProductPropsType) => {
  const { cost, cover, id, title, description } = product;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <Card boxShadow={8} container direction={"column"}>
      <CardTop>
        <CardTopImg src={cover} />
      </CardTop>
      <CardBottom container direction={"column"} padding={2} gap={1}>
        <Typography textAlign={"start"} fontSize={"large"}>
          Title: {title}
        </Typography>
        <Typography textAlign={"start"} fontSize={"medium"}>
          Description: {description}
        </Typography>
        <Typography textAlign={"start"} fontSize={"medium"} marginBottom={2}>
          Price: ${cost}
        </Typography>
        <Button onClick={handleClick} variant={"contained"} color={"info"}>
          Add
        </Button>
      </CardBottom>
    </Card>
  );
};

type ProductPropsType = {
  product: ProductType;
};
