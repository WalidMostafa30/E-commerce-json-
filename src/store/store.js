import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import favouriteSlice from "./favouriteSlice";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";
import productDetailsslice from "./productDetailsSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    category: categoriesSlice,
    product: productsSlice,
    productDetails: productDetailsslice,
    cart: cartSlice,
    favourite: favouriteSlice,
    auth: authSlice,
  },
});
