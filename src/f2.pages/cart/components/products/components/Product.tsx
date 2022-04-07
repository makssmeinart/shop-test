import { CartProductType } from "../../../../../f1.main/m2.bll/reducer/cart/cartReducer";
import { ProductWrapper } from "./styles";
import {
  Button,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export const Product = ({ product }: ProductPropsType) => {
  const { cost, cover, id, title, description, quantity } = product;

  return (
    <ProductWrapper sx={{ display: "flex", marginBottom: 3 }}>
      <CardMedia
        component="img"
        height="131px"
        image={cover}
        alt={`image of ${title}`}
        sx={{ maxWidth: 130, width: "100%", backgroundColor: "#333" }}
      />
      <CardContent
        sx={{
          width: "100%",
          boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
          backgroundColor: "white",
        }}
      >
        <Grid
          container
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ height: "100%" }}
        >
          <Grid item>
            <Typography textAlign={"start"} fontSize={"large"}>
              Title: {title}
            </Typography>
            <Typography textAlign={"start"} fontSize={"medium"}>
              Description: {description}
            </Typography>
            <Typography
              textAlign={"start"}
              fontSize={"medium"}
              marginBottom={2}
            >
              Price: ${cost}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container gap={2} alignItems={"center"}>
              <Button  variant={"contained"}>-</Button>
              <Typography fontSize={"large"}>{quantity}</Typography>
              <Button variant={"contained"}>+</Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </ProductWrapper>
  );
};

type ProductPropsType = {
  product: CartProductType;
};
