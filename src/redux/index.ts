/* eslint-disable prettier/prettier */
import {Action, combineReducers, configureStore} from '@reduxjs/toolkit';
import loginReducer from './slicers/loginSlice';
import appReducer from './slicers/app';
import wishlistReducer from './slicers/wishlistSlice';

const combinedReducers = combineReducers({
  login: loginReducer,
  app: appReducer,
  wishlist: wishlistReducer,
});

const rootReducer = (state: any | undefined, action: Action) =>
  combinedReducers(state, action);

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;

export default store;
