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

export const getSales = createAsyncThunk("sale/getSales", async(_, {rejectWithValue}) => {
  try {
    const response = await api.getSales();
      return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
})

export const getGeography = createAsyncThunk("geography/getGeography", async(_, {rejectWithValue}) => {
  try {
    const response = await api.getGeography();
      return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
})

// export const getTransactions = createAsyncThunk("transaction/getTransactions", async({page, pageSize, sort, search}, {rejectWithValue}) => {
//   try {
//     const response = await api.getTransactions({page, pageSize, sort, search});
//       return response.data;
//   } catch (err) {
//     return rejectWithValue(err.response.data);
//   }
// })

export const createProduct = createAsyncThunk("product/createProduct", async ({productData, navigate, toast}, {rejectWithValue}) => {
  try {
    const response = await api.createProduct(productData)
    toast.success("Product Added Successfully")
    navigate("/generators")
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
    geography: [],
    sales: [],
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
    .addCase(getGeography.pending, (state) => {
      state.loading = true;
    })
    .addCase(getGeography.fulfilled, (state, action) => {
      state.loading = false;
      state.geography = action.payload;
    })
    .addCase(getGeography.rejected, (state, action) => {
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
    // .addCase(getTransactions.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(getTransactions.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.transactions = action.payload;
    // })
    // .addCase(getTransactions.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // })
    .addCase(getSales.pending, (state) => {
      state.loading = true;
    })
    .addCase(getSales.fulfilled, (state, action) => {
      state.loading = false;
      state.sales = action.payload;
    })
    .addCase(getSales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    })
  }
})

export default productSlice.reducer;