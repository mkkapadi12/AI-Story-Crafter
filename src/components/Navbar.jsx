import React, { useEffect, useState } from "react";
import { ICONS } from "@/icons/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <header className="bg-[#007BFF] text-white shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between px-5 py-2.5 mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          StoryCrafter
        </Link>

        {/* Desktop Nav */}
        <nav className="items-center hidden gap-6 md:flex">
          <Link to="/" className="transition hover:text-yellow-300">
            Home
          </Link>
          <Link to="/discover" className="transition hover:text-yellow-300">
            Discover
          </Link>
          <Link to="/gallery" className="transition hover:text-yellow-300">
            Gallery
          </Link>
          <Link to="/about" className="transition hover:text-yellow-300">
            About Us
          </Link>
        </nav>

        <div className="items-center hidden gap-4 md:flex">
          <Link
            to="/login"
            className="bg-white text-[#007BFF] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-[#007BFF] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <ICONS.CROSS size={28} /> : <ICONS.MENU size={28} />}
        </button>
      </div>

      {/* Slide-in Side Menu (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#007BFF] text-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/20">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={toggleMenu}>
            <ICONS.CROSS size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-4">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/discover" onClick={toggleMenu}>
            Discover
          </Link>
          <Link to="/gallery" onClick={toggleMenu}>
            Gallery
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>
          <hr className="my-2 border-white/30" />
          <Link to="/login" onClick={toggleMenu}>
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-[#007BFF] text-center px-4 py-2 rounded-full font-semibold"
            onClick={toggleMenu}
          >
            Sign Up
          </Link>
        </nav>
      </div>

      {/* Backdrop when menu open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-40"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
