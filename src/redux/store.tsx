import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorageを使用する場合
import formReducer from './formSlice'; 
import uploadReducer from './uploadSlice';
import loginReducer from './loginSlice';
import micReducer from './micSlice';
import newPostReducer from './newPostSlice';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  form: formReducer,
  upload: uploadReducer,
  login: loginReducer,
  mic: micReducer,
  post: newPostReducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // authステートを永続化
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
    },
  }),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;



// // store.ts

// import { combineReducers } from 'redux';
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // localStorageを使用する場合
// import formReducer from './formSlice'; 
// import uploadReducer from './uploadSlice';
// import loginReducer from './loginSlice';
// import micReducer from './micSlice';
// import newPostReducer from './newPostSlice';
// import authReducer from './authSlice';

// const rootReducer = combineReducers({
//   form: formReducer,
//   upload: uploadReducer,
//   login: loginReducer,
//   mic: micReducer,
//   post: newPostReducer,
//   auth: authReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   // ここに、永続化を除外する状態を指定できます。
//   whitelist: ['auth'], // authステートを永続化
// };

// // パーシストされたReducerを作成
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       // Redux Persistの特定のアクションタイプを無視
//       ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
//     },
//   }),
// });

// export const persistor = persistStore(store);
// export default store;

// export type RootState = ReturnType<typeof store.getState>;
