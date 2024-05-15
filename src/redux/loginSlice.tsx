import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    email: '',
    password: '',
  },
  errors: {
    email: '',
    password: '',
  },
  submitting: false, // 初期値を設定
};

const formSlice = createSlice({
  name: 'login',
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
    logout(state) {
      state.formData = initialState.formData;
      state.errors = initialState.errors;
      state.submitting = initialState.submitting;
    },
  },
});

export const { updateFormData, setFieldError, setSubmitting, logout } = formSlice.actions;

export default formSlice.reducer;
