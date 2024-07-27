import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import Socials from "./Socials";
import { BiSolidUpArrow } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Work", to: "work" },
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-10 text-lite bg-gray-900 z-40">
        <div>
          <h1 className="text-3xl font-bold text-white">Portfolio</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="px-4 hover:text-blue-400 transition duration-300"
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          onClick={handleClick}
          className="md:hidden z-10 p-2 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out"
        >
          {nav ? (
            <FaTimes className="text-2xl text-white" />
          ) : (
            <FaBars className="text-2xl text-white" />
          )}
        </div>
      </div>
      <Socials />
      <button 
        onClick={scrollToTop} 
        className="duration-300 z-40 flex items-center justify-center fixed flex-col bottom-10 right-10 h-12 w-12 bg-white rounded-full hover:bg-gray-300 transition">
        <BiSolidUpArrow className="text-xl text-gray-900" />
      </button>
      <aside
        className={`md:hidden z-20 fixed top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
          nav ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <ul className="space-y-8">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="text-4xl hover:text-blue-400 transition duration-300"
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
