import bgHero from "../../public/assets/images/hero-bg.jpg";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
import Link from "next/link";

const Hero = ({ title, desc, showButton, bgClass }) => {
  return (
    <section className={`hero ${bgClass} bg-no-repeat h-[400px] lg:h-[500px] relative bg-cover section-spacing`}>
      <div className="px-8 hero-content absolute h-full w-full top-0 left-0 flex justify-center items-center flex-col">
        <h1 className={`${montserrat.className} text-4xl text-center capitalize font-bold text-secondary mb-6 border-b border-b-secondary py-4`}>{title}</h1>
        <p className="text-white text-center font-light text-sm mb-6">{desc}</p>
        {showButton && (
          <Link href="#recipes">
            <button className="btn-primary">Explore Recipes</button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
