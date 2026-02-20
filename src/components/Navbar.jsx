import React, { useEffect, useState } from 'react';
import Logo from '../assets/Logo.jsx';
import Logo2 from '../assets/Logo2.jsx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-10 transition-all duration-500 ease-in-out ${isScrolled? 'bg-black text-white' : 'bg-navbar-transparent text-black'}  p-2`}>
      {/* Navbar content goes here */}
      <div className="container mx-auto flex justify-between">
        <Logo isScrolled={isScrolled}/>
        <ul className="flex justify-between items-center w-[70%]">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
