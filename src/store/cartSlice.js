import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const EcomCart = localStorage.getItem("EcomCart")
  ? JSON.parse(localStorage.getItem("EcomCart"))
  : {};

const storeInLocalStorage = (data) => {
  localStorage.setItem("EcomCart", JSON.stringify(data));
};

export const getFullProducts = createAsyncThunk(
  "cart/getFullProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { cart } = getState();
    const itemsId = Object.keys(cart.items);

    if (!itemsId.length) {
      return fulfillWithValue([]);
    }

    try {
      const itemsIdApi = itemsId.map((el) => `id=${el}`).join("&");
      const response = await axios.get(`/products?${itemsIdApi}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

const initialState = {
  items: EcomCart,
  fullProducts: [],
  isLoading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }

      storeInLocalStorage(state.items);
    },

    decressquantity: (state, action) => {
      const id = action.payload;

      if (state.items[id]) {
        if (state.items[id] > 1) {
          state.items[id]--;
        } else {
          delete state.items[id];
          state.fullProducts = state.fullProducts.filter(
            (item) => item.id !== id
          );
        }
        storeInLocalStorage(state.items);
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;

      delete state.items[id];
      state.fullProducts = state.fullProducts.filter((item) => item.id !== id);
      storeInLocalStorage(state.items);
    },

    clearCart: (state) => {
      state.items = {};
      state.fullProducts = [];
      storeInLocalStorage(state.items);
    },

    cleanCartUseEffect: (state) => {
      state.fullProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFullProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getFullProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.fullProducts = action.payload;
    });
    builder.addCase(getFullProducts.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    });
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  cleanCartUseEffect,
  decressquantity,
} = cartSlice.actions;
export default cartSlice.reducer;
