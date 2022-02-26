import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ENDPOINTS } from "@/utils/constants/apiConstants";

import { baseAPI } from "../services/fetchers";

export const uploadFileAsync = createAsyncThunk("file/upload", async (data) => {
  try {
    const formData = new FormData();
    formData.append("ObjectType", toString(data.objectType));
    formData.append("ObjectId", toString(data.objectId));
    formData.append("FileType", toString(data.fileType));
    formData.append("MediaType", toString(data.mediaType));
    formData.append("Uploader", data.uploader);

    const response = await baseAPI({
      endPoint: ENDPOINTS.FILE_ADD,
      headers: { "Content-Type": "multipart/form-data" },
      body: data,
    });
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  } catch (e) {
    return e.response.data;
  }
});

export const appSlice = createSlice({
  name: "app",
  initialState: {
    loading: false,
    loadingFile: false,
    file: null,
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
  extraReducers: (builder) => {
    builder.addCase(uploadFileAsync.pending, (state) => {
      state.loadingFile = true;
      state.error = null;
    });
    builder.addCase(uploadFileAsync.fulfilled, (state, action) => {
      state.loadingFile = false;
      if (action.payload.success) {
        state.file = action.payload;
      } else {
        state.error = action.payload;
      }
    });
    builder.addCase(uploadFileAsync.rejected, (state, action) => {
      state.loadingFile = false;
      state.error = action.error;
    });
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

export const appUploadFile = (data) => async (dispatch) => {
  return dispatch(uploadFileAsync(data));
};

export default appSlice.reducer;
