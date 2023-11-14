import Image from "next/image";
import aboutImg from "../../public/assets/images/about-us.jpg";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

const About = ({ title }) => {
  return (
    <section className="about spacing-lr lg:px-12 flex items-center flex-col section-spacing">
      <h2 className={`${montserrat.className} text-center text-3xl text-primary font-bold border-b border-b-gray-300 py-2 mb-10`}>{title}</h2>

      <div className="about-content flex flex-col md:flex-row md:gap-12 md:items-center md:leading-7">
        <Image className="rounded-md mb-8 md:max-w-[350px]" src={aboutImg} alt="about photo" priority={true} />

        <p className="text-center text-neutral max-w-[60ch] mx-auto md:text-left lg:max-w-[350px]">Welcome to Naimas Recipe, your culinary companion on a delicious journey. Our mission is to inspire and simplify cooking for food enthusiasts of all levels. Explore a treasure trove of mouthwatering recipes, cooking tips, and kitchen hacks. Whether you're a seasoned chef or a novice cook, we're here to make your culinary adventures unforgettable.</p>
      </div>
    </section>
  );
};

export default About;
