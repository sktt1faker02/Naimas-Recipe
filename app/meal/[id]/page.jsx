"use client";
import Image from "next/image";
import { useGetMealRecipeQuery } from "@/app/redux/features/api/apiSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Montserrat } from "next/font/google";
import { BiFork, BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "@/app/redux/features/recipe/recipeSlice";
import { useEffect } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

const MealRecipe = ({ params }) => {
  const mealId = params?.id;

  const { data: mealRecipe, isLoading, isSuccess, isError, error } = useGetMealRecipeQuery(mealId);
  const router = useRouter();

  const categoriesSelected = useSelector((state) => state.recipe.category);
  const dispatch = useDispatch();

  const mealDetails = mealRecipe?.meals[0];

  // console.log(mealDetails);

  useEffect(() => {
    dispatch(setSelectedCategory(mealDetails?.strCategory));
  }, [mealDetails, dispatch]);

  const generateIngredientList = (mealDetails) => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      const ingredient = mealDetails?.[ingredientKey];
      const measure = mealDetails?.[measureKey];

      if (ingredient && measure) {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }

    return ingredients;
  };

  return (
    <main>
      <div className="flex items-center px-6 lg:pl-20 text-primary gap-2 cursor-pointer hover:text-orange-700 transition" onClick={() => router.back()}>
        <BiArrowBack />
        <span>Back</span>
      </div>

      <div className="recipe-container spacing-lr lg:px-20 mt-10">
        <article>
          <div className="relative border border-[#dbdbdb] rounded-lg shadow-md overflow-hidden mb-8 lg:max-w-[450px] lg:mx-auto">{mealDetails?.strMealThumb ? <Image className="p-4 transition duration-300 hover:scale-105  w-full object-contain bg-white " sizes="100vw" width="0" height="0" src={mealDetails?.strMealThumb} alt={mealDetails?.strMeal} /> : <Skeleton height={120} />}</div>
          <h2 className={`${montserrat.className} text-2xl font-semibold border-b border-b-gray-300 pb-8 mb-8`}>{mealDetails?.strMeal || <Skeleton height={50} />}</h2>

          <div className="content-recipes flex flex-col gap-10 md:flex-row mb-20 md:max-w-[900px] mx-auto">
            <div className="ingredients bg-white shadow-md rounded px-6 py-4">
              <h4 className={`${montserrat.className} text-xl font-semibold border-b border-b-gray-300 pb-4 mb-4`}>Ingredients:</h4>

              <ul className="ingredients-list flex flex-col gap-2 md:w-[260px]">
                {isLoading
                  ? // Skeleton loading for ingredients
                    Array.from({ length: 5 }).map((_, index) => (
                      <li key={index}>
                        <span className="pl-6 text-sm font-semibold">
                          <Skeleton width={250} />
                        </span>
                      </li>
                    ))
                  : generateIngredientList(mealDetails).map((ingredient, index) => (
                      <li key={index}>
                        <span className="pl-6 text-sm font-semibold">{ingredient}</span>
                      </li>
                    ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <BiFork className="text-primary text-xl" />
                <p className="uppercase text-sm tracking-widest font-bold">instruction</p>
              </div>

              <p className="text-justify text-sm leading-7">{mealDetails?.strInstructions || <Skeleton count={10} />}</p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default MealRecipe;
