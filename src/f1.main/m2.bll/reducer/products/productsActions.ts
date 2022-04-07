import {createAsyncThunk} from "@reduxjs/toolkit";
import {setAppStatusAC} from "../app/appReducer";
import {productsApi} from "../../../m3.dal/api";

export const fetchProducts = createAsyncThunk(
    "products/fetch",
    async (payload, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatusAC("loading"));

        try {
            return await productsApi.fetchProducts();
        } catch (err) {
            console.log(err);
            // handleServerNetworkError(err, dispatch);
            console.log(err);
            rejectWithValue(null);
        }
    }
);

