import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../api'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  users: [],
  error: '',
  loading: false
}

// LOGIN
export const login = createAsyncThunk("auth/login", async ({
  formValue,
  navigate,
  toast
}, {
  rejectWithValue
}) => {
  try {
    const response = await api.signIn(formValue)
    toast.success("Login Successfully")
    navigate("/dashboard")
    return response.data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})

// REGISTER
export const register = createAsyncThunk(
  "auth/register",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signUp(formValue);
      toast.success("Register Successfully");
      navigate("/dashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// GET ALL USERS
export const getUsers = createAsyncThunk("user/getUsers", async(_, {rejectWithValue}) => {
  try {
    const response = await api.getUsers();
      return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState, 
  reducers: {
    logout: (state) => {
      localStorage.clear()
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(login.pending, (state) => {
      state.loading = true
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loading = false
      localStorage.setItem("user", JSON.stringify({
        ...action.payload
      }))
      state.user = action.payload
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload.message
    })
    .addCase(register.pending, (state) => {
      state.loading = true
    })
    .addCase(register.fulfilled, (state, action) => {
      state.loading = false
      localStorage.setItem("user", JSON.stringify({
        ...action.payload
      }))
      state.user = action.payload
    })
    .addCase(register.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload.message
    })
    .addCase(getUsers.pending, (state) => {
      state.loading = true;
    })
    .addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    })
  }
})

export const {logout} = authSlice.actions
export default authSlice.reducer