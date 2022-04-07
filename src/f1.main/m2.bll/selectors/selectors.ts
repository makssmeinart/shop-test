import { AppRootStateType } from "../store";
import { CartProductType } from "../reducer/cart/cartReducer";

export const selectCartProducts = (
  state: AppRootStateType
): CartProductType[] => state.cart;
