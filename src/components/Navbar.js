import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-web_black flex py-10 uppercase text-web_white items-center relative">
        <div className="container flex items-center justify-between space-x-4 lg:space-x-16">
          <a href="/" className="font-bold font-barlow ml-12 from-web_red to-web_white bg-gradient-to-r bg-clip-text text-transparent text-4xl md:text-6xl">
            Logo
          </a>

          <div className="hidden sm:flex flex-1 space-x-6">
            <a href="/" className="text-web_white">Movies</a>
            <a href="/" className="text-web_white">Series</a>
          </div>

          <div className="flex group">
            <input
              className="bg-transparent border-b text-web_white focus:outline-none opacity-0 group-hover:block group-hover:opacity-100 transition duration-500 text-xs sm:text-base"
              type="text"
            />
            <button className="fas fa-search text-lg"></button>
            <i
              className={`fa-solid fa-bars text-lg mx-5 cursor-pointer block sm:hidden`}
              onClick={toggleMenu}
            ></i>
          </div>

          <form className="hidden sm:block">
            <button className="px-6 py-2">LOGIN</button>
            <button className="bg-web_red px-6 py-2 hover:bg-web_gray hover:text-web_white transition duration-500">
              REGISTER
            </button>
          </form>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed top-0 right-0 bg-web_black opacity-90 h-screen w-screen flex items-center justify-center text-web_white z-50"
        >
          <ul className="text-center">
            <li className="mb-8">
              <a href="/" className="text-2xl block">Movies</a>
            </li>
            <li className="mb-8">
              <a href="/" className="text-2xl block">Series</a>
            </li>
            <li>
            <button className="px-6 py-2">LOGIN</button>
            </li>
            <li>
            <button className="bg-web_red px-6 py-2 my-6 hover:bg-web_gray hover:text-web_white transition duration-500">
              REGISTER
            </button>
            </li>
            <li>
              <i
                className={`fas fa-times text-2xl cursor-pointer`}
                onClick={toggleMenu}
              ></i>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
