"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./features/recipe/recipeSlice";
import { apiSlice } from "./features/api/apiSlice";

const rootReducer = combineReducers({
  recipe: recipeReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
