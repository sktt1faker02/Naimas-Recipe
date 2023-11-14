"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.themealdb.com/api/json/v1/1" }),
  tagTypes: ["Recipes"],
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: (param) => `/${param}`,
      providesTags: ["Recipes"],
    }),
    getMeal: builder.query({
      query: (param) => `/search.php?s=${param}`,
      providesTags: ["Recipes"],
    }),
    getMealByCategory: builder.query({
      query: (param) => `/filter.php?c=${param}`,
      providesTags: ["Recipes"],
    }),
    getMealRecipe: builder.query({
      query: (param) => `/lookup.php?i=${param}`,
      providesTags: ["Recipes"],
    }),
  }),
});

export const { useGetCategoryQuery, useGetMealQuery, useGetMealByCategoryQuery, useGetMealRecipeQuery } = apiSlice;
