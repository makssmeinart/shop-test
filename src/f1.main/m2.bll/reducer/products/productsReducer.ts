import {createSlice} from "@reduxjs/toolkit";
import {fetchProducts} from "./productsActions";

// Thunk

export const productsSlice = createSlice({
  name: "products",
  initialState: [] as InitStateType,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      if (action.payload) {
        return action.payload 
      }
    });
  },
});

export const productsReducer = productsSlice.reducer;

// types

export type InitStateType = ProductType[];

export type ProductType = {
  title: string;
  description: string;
  cost: number;
  cover: string;
  id: string;
};
