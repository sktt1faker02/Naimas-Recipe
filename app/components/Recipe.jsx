"use client";
// import { useGetCategoryQuery } from "../redux/features/api/apiSlice";
import { useState, useEffect } from "react";
// import Select from "react-select";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
import { BiSearch } from "react-icons/bi";
import RecipeList from "./RecipeList";
import SearchResult from "./SearchResult";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/features/recipe/recipeSlice";
const Recipe = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  // const [isMounted, setIsMounted] = useState(false);
  // const [categoriesList, setCategoriesList] = useState([]);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const searchTerm = useSelector((state) => state.recipe.searchValue);
  const getMealCategory = "categories.php";

  // const { data: mealCategories, isLoading, isSuccess, isError, error } = useGetCategoryQuery(getMealCategory);

  const handleSearch = (e) => {
    const inputValue = e.target.value.replace(/^\s+/g, "");
    // setSearchValue(inputValue);
    dispatch(setSearchTerm(inputValue));
  };

  // console.log(searchValue);

  // useEffect(() => {
  //   if (isSuccess) {
  //     const { categories } = mealCategories;
  //     setCategoriesList(categories);
  //   }
  // }, [isSuccess, mealCategories]);

  // useEffect(() => setIsMounted(true), []);
  // console.log(selectedOption);
  return (
    <section id="recipes" className="recipe flex flex-col items-center spacing-lr lg:px-12 section-spacing">
      <h2 className={`${montserrat.className} text-center text-3xl text-primary font-bold border-b border-b-gray-300 py-2 mb-2`}>Explore Recipes</h2>
      <p className="text-sm text-center mb-8">All your favorite recipes, in one place</p>

      <form className="self-start w-full flex flex-col gap-4">
        <div className="search-input relative flex items-center md:w-[500px] md:mx-auto">
          <BiSearch className="absolute left-4 text-accent text-xl" />
          <input className="text-sm outline-none border border-primary py-3 pl-10 pr-4 rounded-md w-full caret-accent text-neutral" type="search" value={searchTerm} onChange={handleSearch} placeholder="Search for a meal" />
        </div>

        {searchTerm && <SearchResult />}

        <RecipeList />
      </form>
    </section>
  );
};

export default Recipe;
