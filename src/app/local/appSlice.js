import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    loading: "idle",
    snack: {},
  },
  reducers: {
    appLoading: (state, { payload }) => {
      state.loading = payload;
    },
    showSnack: (state, { payload }) => {
      state.snack = payload;
    },
  },
});

export const { appLoading, showSnack } = appSlice.actions;

export const info = (message, options) => async (dispatch) => {
  dispatch(
    showSnack({
      message,
      options: Object.assign({}, { variant: "info" }, options),
    })
  );
};

export const success = (message, options) => async (dispatch) => {
  dispatch(
    showSnack({
      message,
      options: Object.assign({}, { variant: "success" }, options),
    })
  );
};

export const errorSnack = (message, options) => async (dispatch) => {
  dispatch(
    showSnack({
      message,
      options: Object.assign({}, { variant: "error" }, options),
    })
  );
};

export const warning = (message, options) => async (dispatch) => {
  dispatch(
    showSnack({
      message,
      options: Object.assign({}, { variant: "warning" }, options),
    })
  );
};

export const clear = () => async (dispatch) => {
  dispatch(showSnack({ message: null, options: {} }));
};

export default appSlice.reducer;
