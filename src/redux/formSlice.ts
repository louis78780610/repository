import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    email: '',
    password: '',
    checkPassword: '',
    image: { url: null },
  },
  errors: {
    name: '',
    email: '',
    password: '',
    checkPassword: '',
    image: '',
  },
  submitting: false, // 初期値を設定
};



const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData(state, action) {
      const { name, value } = action.payload;
      state.formData = { ...state.formData, [name]: value };
    },
    setFieldError(state, action) {
      const errors = action.payload;
      state.errors = { ...state.errors, ...errors };
    },
    setSubmitting(state, action) {
      // immer を使用して submitting プロパティを更新
      state.submitting = action.payload;
    },
    updateImageData(state, action) {
      state.formData.image = action.payload;
    },
    logout(state) {
      state.formData = initialState.formData;
      state.errors = initialState.errors;
      state.submitting = initialState.submitting;
    },
  },
});

export const { updateFormData, setFieldError, setSubmitting, updateImageData, logout } = formSlice.actions;

export default formSlice.reducer;
