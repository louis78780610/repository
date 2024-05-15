// Reduxのステートにユーザーのログイン状態を保存するSlice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false, // ユーザーのログイン状態
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    authLogout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { login, authLogout } = authSlice.actions;
export default authSlice.reducer;
