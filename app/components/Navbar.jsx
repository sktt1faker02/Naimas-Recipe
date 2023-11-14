"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const refLink = useRef(null);
  const refNav = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleNav = () => {
    setNavActive(!navActive);
  };

  const handleClickOutside = (e) => {
    if (!refLink.current.contains(e.target) && !refNav.current.contains(e.target)) {
      setNavActive(false);
    }
  };

  //   console.log(navActive);

  return (
    <header className="flex items-center justify-between spacing-lr lg:px-12 pt-8 relative mb-8">
      <Link className={`${montserrat.className} text-2xl font-extrabold text-primary`} href="/">
        Naimas Recipe
      </Link>

      <button ref={refNav} onClick={handleNav} className="cursor-pointer z-10">
        <BiMenuAltRight className="text-2xl text-primary " />
      </button>

      <nav className={`${navActive ? "z-[999]" : "-z-10"} absolute top-0 right-0 min-h-screen w-[60%] nav-menu`}>
        <ul ref={refLink} className={`${montserrat.className} relative top-[4rem] flex items-center flex-col mx-6 gap-5 bg-white shadow-md rounded-md py-6 text-primary font-medium text-xl transition ${navActive ? "scale-1" : "scale-0"}`}>
          <li>
            <Link className="hover:text-orange-700 transition" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-700 transition" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-700 transition" href="/meal/category">
              Categories
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
