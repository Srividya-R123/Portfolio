import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import './Navbar.css';
const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <div className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#ffffff] bg-opacity-10 p-4`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
<<<<<<< HEAD
          <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">Srividya R<span className="sm:block hidden">| Final Year IT Undergraduate</span></p>
=======
          <img src={logo} alt="logo" className="w-30 h-30 object-contain" />
          <p className="text-black text-[22px] font-bold cursor-pointer" >PDA<span className="sm:block hidden font-semibold text-[#312e2e]">Personality Development Association</span></p>
>>>>>>> 02426251fc738945337ef3bd87b681f1d220acf7
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((link) => (
              <li key={link.id} className={`${active === link.title ? "text-black" : "text-black"} hover:text-[#9933CC] text-[18px] font-medium cursor-pointer`}>
                <a href={`#${link.id}`} onClick={() => setActive(link.title)}>
                  {link.title}
                </a>
              </li>
            ))
          }
        </ul>
        <button class='glowing-btn'>
          <Link to="/login"><span class='glowing-txt'>LOGIN<span class='faulty-letter'>/</span>SIGNUP</span></Link>
        </button>


      </div>
    </div>
  );
};

export default Navbar;
