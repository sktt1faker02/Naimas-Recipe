"use client";

import Select from "react-select";
import { useGetCategoryQuery } from "@/app/redux/features/api/apiSlice";

import { useState, useEffect } from "react";

import { Montserrat } from "next/font/google";
import { BiCategory } from "react-icons/bi";
import Hero from "@/app/components/Hero";
import SearchByCategory from "./[id]/page";
import { useDispatch, useSelector } from "react-redux";

const montserrat = Montserrat({ subsets: ["latin"] });

const MealCategory = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);

  const getMealCategory = "categories.php";

  const { data: mealCategories, isLoading, isSuccess, isError, error } = useGetCategoryQuery(getMealCategory);

  const categoriesSelected = useSelector((state) => state.recipe.category);
  const dispatch = useDispatch();

  // console.log(categoriesSelected);

  useEffect(() => {
    if (isSuccess) {
      const { categories } = mealCategories;
      setCategoriesList(categories);

      // console.log(categories[0]);

      setSelectedOption(categoriesSelected ? { strCategory: categoriesSelected } : categories[0]);
    }
  }, [isSuccess, mealCategories, categoriesSelected]);

  useEffect(() => setIsMounted(true), []);

  // console.log(selectedOption);

  return (
    <main>
      <Hero title="Our Meal Categories" desc="Embark on a culinary journey with our diverse meal categories" bgClass="bg-category" />
      <div className="flex gap-2 items-center mb-4 spacing-lr min-[600px]:pl-10 lg:pl-20">
        <BiCategory className="text-xl text-accent" />
        <h2 className={`${montserrat.className} text-xl text-primary font-bold border-b-gray-300 border-b py-2`}>Categories</h2>
      </div>

      {isMounted ? (
        <Select
          cacheOptions
          options={categoriesList}
          getOptionLabel={(e) => e.strCategory}
          getOptionValue={(e) => e.idCategory}
          className="self-start w-[200px] text-sm spacing-lr mb-10 min-[600px]:w-[300px] min-[600px]:pl-10 lg:pl-20 z-[999] relative"
          onChange={setSelectedOption}
          isSearchable={false}
          placeholder="Select Category"
          value={selectedOption}
          isClearable={false}
          styles={{
            clearIndicator: () => ({
              color: "#FF6347",
            }),

            dropdownIndicator: () => ({
              color: "#FF6347",
            }),

            control: (baseStyles, state) => ({
              ...baseStyles,
              minHeight: "46px",
              height: "46px",
              borderColor: "hsl(0, 0%, 80%)",
              border: state.isFocused ? "1px solid #FF6347" : "1px solid #cccccc",
              "&:hover": {
                borderColor: "#FF6347",
              },

              boxShadow: "none",
              "&:focus": {
                borderColor: "#FF6347",
              },
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              color: state.isFocused ? "#FF4500" : null,
              backgroundColor: state.isSelected ? "hsl(0, 0%, 90%)" : null,
            }),
          }}
        />
      ) : null}

      <SearchByCategory category={selectedOption?.strCategory} />
    </main>
  );
};

export default MealCategory;
