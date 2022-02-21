import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import { baseAPI } from "@/app/services/baseApi";
import { ENDPOINTS } from "@/utils/constants/apiConstants";

import { baseAPI } from "../services/fetchers";

export const loginAsync = createAsyncThunk("account/login", async (data) => {
  try {
    const response = await baseAPI({
      endPoint: ENDPOINTS.ACCOUNT_LOGIN,
      body: data,
      isPublic: true,
    });
    console.log("response-----", response);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  } catch (e) {
    return e.response.data;
  }
});

export const registerAsync = createAsyncThunk(
  "account/register",
  async (data) => {
    try {
      const response = await baseAPI({
        endPoint: ENDPOINTS.ACCOUNT_REGISTER,
        body: data,
        isPublic: true,
      });
      console.log("response-----", response);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
);

const slice = createSlice({
  name: "account",
  initialState: {
    profile: null,
    loading: false,
    error: null,
    // token: window.localStorage.getItem("token"),
  },
  reducers: {
    updateUser: (state, { payload: { profile, token, fetched = false } }) => {
      state.profile = profile;
      // state.token = token;
      state.fetched = fetched;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder.addCase(loginAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.success) {
        state.profile = action.payload;
      } else {
        state.error = action.payload;
      }
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(registerAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerAsync.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.success) {
        state.profile = action.payload;
      } else {
        state.error = action.payload;
      }
    });
    builder.addCase(registerAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { updateUser } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state) => state.user.profile;

export const logout = () => async (dispatch) => {
  // window.localStorage.removeItem("token");
  dispatch(
    updateUser({
      profile: null,
      // token: null,
      fetched: false,
    })
  );
};

export const accountLogin = (data) => async (dispatch) => {
  return dispatch(loginAsync(data));
};

export const accountRegister = (data) => async (dispatch) => {
  return dispatch(registerAsync(data));
};
