import { configureStore, combineReducers } from "@reduxjs/toolkit";
import songsState from "./songs";
import userState from "./user";

const reducer = combineReducers({
  songsState,
  userState,
});

const middlewares = [];

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});
