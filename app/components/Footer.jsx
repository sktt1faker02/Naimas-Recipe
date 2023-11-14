import { BiLogoTwitter, BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoInstagramAlt } from "react-icons/bi";
import { Montserrat } from "next/font/google";
import Link from "next/link";
const montserrat = Montserrat({ subsets: ["latin"] });

const Footer = () => {
  const socialStyle = "text-2xl text-secondary hover:scale-110 transition";

  return (
    <footer className="bg-primary flex flex-col items-center py-8 gap-4  mt-auto mx-6 lg:mx-12">
      <ul className="social flex justify-center gap-2 items-center">
        <li>
          <BiLogoTwitter className={socialStyle} />
        </li>
        <li>
          <BiLogoFacebookCircle className={socialStyle} />
        </li>
        <li>
          <BiLogoLinkedinSquare className={socialStyle} />
        </li>
        <li>
          <BiLogoInstagramAlt className={socialStyle} />
        </li>
      </ul>
      <Link className={`${montserrat.className} text-2xl font-extrabold text-secondary text-center`} href="/">
        Naimas Recipe
      </Link>
      <p className="text-sm text-center text-secondary">&copy; 2023 Naimas Recipe, Made by Michael Tabilin</p>
    </footer>
  );
};

export default Footer;
