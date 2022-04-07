import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../../m2.bll/routes/routes";
import { getCartItemsTotalCost } from "../../m4.utils/getCartItemsTotalCost";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../m2.bll/store";
import { CartProductType } from "../../m2.bll/reducer/cart/cartReducer";
import shoppingCartIcon from "../../../f4.assets/a1.imgaes/icons/shopping-cart.png";

export const Header = () => {
  const allCartProducts = useSelector<AppRootStateType, CartProductType[]>(
    (state) => state.cart
  );

  const totalCartCost = getCartItemsTotalCost(allCartProducts);

  return (
    <header>
      <Container>
        <Grid container justifyContent={"end"} gap={5} alignItems={"center"}>
          <Grid>
            <Link to={routes.products}>Products</Link>
          </Grid>
          <Grid>
            <Grid container gap={1} alignItems={"center"}>
              <div>${totalCartCost}</div>
              <div>
                <Link to={routes.cart}>
                  <img width={25} src={shoppingCartIcon} alt="Go to cart" />
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};
