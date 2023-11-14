import { useGetMealQuery } from "../redux/features/api/apiSlice";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
const montserrat = Montserrat({ subsets: ["latin"] });

const SearchResult = () => {
  const searchTerm = useSelector((state) => state.recipe.searchValue);
  const dispatch = useDispatch();

  const { data: mealCategories, isLoading, isSuccess, isError, error } = useGetMealQuery(searchTerm);
  const router = useRouter();

  // console.log(searchTerm);

  let content;

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
    // console.log(mealCategories);
    const { meals } = mealCategories;
    // console.log(meals);

    if (Array.isArray(meals) && meals.length) {
      content = meals.map((meal) => {
        return (
          <div onClick={() => router.push(`/meal/${meal.idMeal}`)} key={meal.idMeal} className="relative border border-[#dbdbdb] rounded-lg shadow-md overflow-hidden cursor-pointer">
            <h4 className={`${montserrat.className} bg-accent text-secondary text-xs text-right top-[0.5rem] right-[0.5rem] rounded-md font-medium p-2 absolute z-50 tracking-widest uppercase`}>{meal.strCategory}</h4>
            <Image className="px-4 pt-4 transition duration-300 hover:scale-105  w-full object-contain  bg-white" sizes="100vw" width="0" height="0" src={meal.strMealThumb} alt={meal.strMeal} />
            <h5 className="text-center p-4 font-medium capitalize text-secondary bg-primary">{meal.strMeal}</h5>
          </div>
        );
      });
    } else {
      content = <p className="text-accent text-xl text-center">No results found</p>;
    }
  } else if (isError) {
    content = <p>{error.toString()}</p>;
  }

  return (
    <div className="search-result mt-16 flex flex-col gap-8 min-[600px]:grid min-[600px]:grid-cols-2 min-[600px]:max-w-[750px] md:grid md:grid-cols-2 md:max-w-[750px] md:place-items-center min-[900px]:grid-cols-3 min-[900px]:gap-10 min-[900px]:max-w-[900px] mx-auto w-full">
      {/* <h3>Recipe List</h3> */}
      {content}
    </div>
  );
};

export default SearchResult;
