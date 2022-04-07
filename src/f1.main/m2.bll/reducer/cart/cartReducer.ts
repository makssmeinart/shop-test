import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../products/productsReducer";
import { setCartLocalStorage } from "../../../m4.utils/handleCartLocalStorage";

export const cartSlice = createSlice({
  name: "cart",
  initialState:
    (JSON.parse(localStorage.getItem("cart")!) as InitStateType) ||
    ([] as InitStateType),
  reducers: {
    addProductToCart: (state, action: PayloadAction<ProductType>) => {
      const currentProd = state.find((prod) => prod.id === action.payload.id);

      if (!currentProd) {
        const newProduct = { ...action.payload, quantity: 1 };
        setCartLocalStorage([...state, newProduct]);
        return [...state, newProduct];
      } else {
        let currentProduct = state.find(
          (prod) => prod.id === action.payload.id
        );

        if (currentProduct) {
          currentProduct.quantity += 1;
          setCartLocalStorage(state);
        }

        return state;
      }
    },
    addCartItemQuantity: (
      state,
      action: PayloadAction<{ productId: string }>
    ) => {
      const currentProduct = state.find(
        (prod) => prod.id === action.payload.productId
      );

      if (currentProduct) {
        currentProduct.quantity += 1;
        setCartLocalStorage(state);
      }

      return state;
    },
    removeCartItemQuantity: (
      state,
      action: PayloadAction<{ productId: string }>
    ) => {
      let currentProduct = state.find(
        (prod) => prod.id === action.payload.productId
      );

      if (currentProduct) {
        if (currentProduct.quantity === 1) {
          const newState = state.filter(
            (prod) => prod.id !== action.payload.productId
          );

          setCartLocalStorage(newState);

          return newState;
        } else {
          currentProduct.quantity -= 1;
          setCartLocalStorage(state);
        }
      }

      return state;
    },
  },
});

export const cartReducer = cartSlice.reducer;

// actions

export const addProductToCart = cartSlice.actions.addProductToCart;
export const addCartItemQuantity = cartSlice.actions.addCartItemQuantity;
export const removeCartItemQuantity = cartSlice.actions.removeCartItemQuantity;

// types

export type InitStateType = CartProductType[];

export type CartProductType = ProductType & {
  quantity: number;
};
