import { createSlice } from '@reduxjs/toolkit';


// 投稿の型定義
interface Post {
  title: string;
  content: string;
}

// スライスの初期状態の型定義
interface InitialState {
  formData: {
    title: string;
    content: string;
  };
  errors: {
    title: string;
    content: string;
  };
  submitting: boolean;
  posts: Post[]; // Post型の配列として定義
}

const initialState: InitialState = {
  formData: {
    title: '',
    content: '',
  },
  errors: {
    title: '',
    content: '',
  },
  submitting: false,
  posts: [], // 初期状態は空の配列
};

const formSlice = createSlice({
  name: 'post',
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
      state.submitting = action.payload;
    },
    addNewPost(state, action) {
      const newPost = action.payload;
      state.posts = [...state.posts, newPost];
    },
    logout(state) {
      state.formData = initialState.formData;
      state.errors = initialState.errors;
      state.submitting = initialState.submitting;
    },
  },
});

export const { updateFormData, setFieldError, setSubmitting, addNewPost, logout } = formSlice.actions;

export default formSlice.reducer;