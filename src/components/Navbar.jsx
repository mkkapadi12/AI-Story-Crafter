import React, { useState } from "react";
import { ICONS } from "@/icons/icons";
import { Link } from "react-router-dom";
import { useAuthContext } from "@/Context/AuthContext";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import logo from "../assets/logo/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoggedIn } = useAuthContext();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#007BFF] text-white shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between px-5 py-2.5 mx-auto">
        {/* Hamburger */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <ICONS.CROSS size={28} /> : <ICONS.MENU size={28} />}
        </button>

        <Link to="/" className="text-2xl font-bold tracking-wide">
          <div className="w-[112px] h-[50px]">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="items-center hidden gap-6 md:flex">
          <Link to="/" className="transition hover:text-blue-200">
            Home
          </Link>
          <Link to="/discover" className="transition hover:text-blue-200">
            Discover
          </Link>
          <Link to="/stories" className="transition hover:text-blue-200">
            Stories
          </Link>
          <Link to="/about" className="transition hover:text-blue-200">
            About Us
          </Link>
        </nav>

        {/* menubar */}
        <div className="items-center gap-4 md:flex">
          {isLoggedIn ? (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="!p-0">
                  <Avatar className="w-10 h-10 duration-300 cursor-pointer tsmransition-all ring-1 ring-white hover:ring-2 md:w-12 md:h-12">
                    <AvatarImage
                      src={user?.profileImage}
                      alt="profile"
                      className="object-cover w-full h-full rounded-full"
                    />
                    <AvatarFallback className="text-xl text-blue-500 bg-blue-200">
                      {user?.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </MenubarTrigger>
                <MenubarContent className="bg-white shadow-md rounded-lg min-w-[180px] py-2">
                  <div className="px-4 py-2 text-center">
                    <p className="text-sm text-muted-foreground">Hello 👋</p>
                    <p className="font-bold text-blue-600 ">{user?.name}</p>
                  </div>
                  <MenubarSeparator className="my-2" />
                  <Link to="/profile">
                    <MenubarItem className="transition-colors cursor-pointer hover:bg-blue-100 hover:text-blue-600">
                      My Profile
                    </MenubarItem>
                  </Link>
                  <Link to="/private/stories">
                    <MenubarItem className="transition-colors cursor-pointer hover:bg-blue-100 hover:text-blue-600">
                      Settings
                    </MenubarItem>
                  </Link>
                  <MenubarSeparator className="my-2" />
                  <Link to="/logout">
                    <MenubarItem className="transition-colors cursor-pointer hover:bg-red-100 hover:text-red-500">
                      Logout
                    </MenubarItem>
                  </Link>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          ) : (
            <Link to="/login">
              <Button className="text-white bg-pink-500 hover:bg-pink-600">
                Log In
              </Button>
            </Link>
          )}
        </div>
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
          <Link to="/stories" onClick={toggleMenu}>
            Stories
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>
          <hr className="my-2 border-white/30" />
          {isLoggedIn ? (
            <>
              <Link to="/logout" onClick={toggleMenu}>
                Logout
              </Link>
            </>
          ) : (
            <>
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
            </>
          )}
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
