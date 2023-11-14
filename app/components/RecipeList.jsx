"use client";

import Image from "next/image";
import { useGetCategoryQuery } from "../redux/features/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { Montserrat } from "next/font/google";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });
// import { setCategories } from "../redux/features/recipe/recipeSlice";
// import { useEffect } from "react";
// import { useMealDetails } from "../hooks/useMealDetails";

const RecipeList = () => {
  const getMealCategory = "categories.php";
  const { data: mealCategories, isLoading, isSuccess, isError, error } = useGetCategoryQuery(getMealCategory);
  const router = useRouter();
  // const categories = useSelector((state) => state.recipe.category);
  // const dispatch = useDispatch();

  let content;

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(setCategories(recipes.meals));
  //   }
  // }, [isSuccess, dispatch, recipes]);

  if (isLoading) {
    content = (
      <>
        <div className="w-full">
          <Skeleton count={3} height={120} className="mb-4" />
        </div>
        <div className="w-full">
          <Skeleton count={3} height={120} className="mb-4" />
        </div>
        <div className="w-full">
          <Skeleton count={3} height={120} className="mb-4" />
        </div>
      </>
    );
  } else if (isSuccess) {
    const { categories } = mealCategories;
    // console.log(categories);
    // console.log(meals);
    content = categories.map((cat) => {
      return (
        <div onClick={() => router.push(`/meal/category/${cat.strCategory.toLowerCase()}`)} key={cat.idCategory} className="relative border border-[#dbdbdb] rounded-lg shadow-md overflow-hidden cursor-pointer">
          <h4 className={`${montserrat.className} bg-accent text-secondary text-xs text-right top-[0.5rem] right-[0.5rem] rounded-md font-medium p-2 absolute z-50 tracking-widest uppercase`}>{cat.strCategory}</h4>
          <Image className="p-4 transition duration-300 hover:scale-105  object-contain bg-white w-[350px]" sizes="100vw" width="0" height="0" src={cat.strCategoryThumb} alt={cat.strCategory} />
        </div>
      );
    });
  } else if (isError) {
    content = <p>{error.toString()}</p>;
  }

  return (
    <div className="recipe-container mt-16 flex flex-col gap-8">
      <h2 className={`${montserrat.className} text-center text-2xl text-primary font-bold border-b border-b-gray-300 py-2 mb-10 self-center`}>Top Categories</h2>
      <div className="categories-list flex flex-col gap-8 min-[600px]:grid min-[600px]:grid-cols-2 min-[600px]:max-w-[750px] max-w-[350px] mx-auto w-full md:grid md:grid-cols-3 md:max-w-[750px] md:place-items-center min-[900px]:gap-10 min-[900px]:max-w-[900px]">{content}</div>
    </div>
  );
};

export default RecipeList;
