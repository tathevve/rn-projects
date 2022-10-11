import {combineReducers, configureStore} from '@reduxjs/toolkit';
import loginReducer from "./slicers/loginSlice"


const combinedReducers = combineReducers({
  login: loginReducer,
});


const rootReducer = (state, action) =>
  combinedReducers(state, action);

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
});

export default store;