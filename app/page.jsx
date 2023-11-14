// "use client";

// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "./redux/features/recipe/recipeSlice";

import About from "./components/About";

import Hero from "./components/Hero";

import Recipe from "./components/Recipe";

export default function Home() {
  // const count = useSelector((state) => state.recipe.value);

  // const dispatch = useDispatch();

  return (
    <>
      <main>
        <Hero title="Behind the Scenes" desc="Welcome to Naimas Recipe, your culinary destination for mouthwatering recipes, cooking inspiration, and kitchen adventures" showButton={true} bgClass="bg-hero" />
        <About title={"About Us"} />
        <Recipe />
      </main>
    </>
  );
}
