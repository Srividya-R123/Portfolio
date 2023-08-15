import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <div className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">Srividya R<span className="sm:block hidden">| 3rd Year IT Undergraduate</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((link) => (
              <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
                <a href={`#${link.id}`} onClick={() => setActive(link.title)}>
                  {link.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
