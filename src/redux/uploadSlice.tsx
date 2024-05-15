// uploadSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UploadState {
  imageFile: File | null;
}

const initialState: UploadState = {
  imageFile: null,
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    setImageFile(state, action: PayloadAction<File | null>){
      state.imageFile = action.payload;
    },
    clearImageFile(state) {
      state.imageFile = null;
    },
    logout(state)  {
      state.imageFile = initialState.imageFile;
    },
  },
});

export const { setImageFile, clearImageFile, logout } = uploadSlice.actions;
export default uploadSlice.reducer;
