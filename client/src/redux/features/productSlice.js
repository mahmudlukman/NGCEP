import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getProducts = createAsyncThunk("product/getProducts", async(_, {rejectWithValue}) => {
  try {
    const response = await api.getProducts();
      return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
})

export const createProduct = createAsyncThunk("product/createProduct", async ({productData, navigate, toast}, {rejectWithValue}) => {
  try {
    const response = await api.createProduct(productData)
    toast.success("Product Added Successfully")
    navigate("/products")
    return response.data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    products: [],
    userProducts: [],
    error: "",
    loading: false
  },
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending, (state) => {
      state.loading = true;
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    })
    .addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    })
    .addCase(createProduct.pending, (state) => {
      state.loading = true;
    })
    .addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = [action.payload];
    })
    .addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    })
  }
})

export default productSlice.reducer;