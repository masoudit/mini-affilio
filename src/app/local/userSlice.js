import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    fetched: false,
    profile: null,
    token: window.localStorage.getItem("token"),
  },
  reducers: {
    updateUser: (state, { payload: { profile, token, fetched = false } }) => {
      state.profile = profile;
      state.token = token;
      state.fetched = fetched;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher
      // mockApi.endpoints.getCurrentUser.matchFulfilled,
      // (state, { payload }) => {
      //   state.profile = payload.data;
      //   state.fetched = true;
      // }
      ();
  },
});

export const { updateUser } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state) => state.user.profile;

export const logout = () => async (dispatch) => {
  window.localStorage.removeItem("token");
  dispatch(
    updateUser({
      profile: null,
      token: null,
      fetched: false,
    })
  );
};
