"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  category: null,
  searchValue: "",
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.recipes.push(action.payload);
    },

    setSelectedCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategories, setSelectedCategory, setSearchTerm } = recipeSlice.actions;

export default recipeSlice.reducer;
