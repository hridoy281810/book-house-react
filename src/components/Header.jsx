import React, { useState } from 'react';
import {BookOpenIcon,Bars3BottomRightIcon,XMarkIcon} from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen,setIsMenuOpen]= useState(false);
    return (
        <div className='flex  items-center justify-between bg-gray-100
        px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ms:px-24 lg:px-8'>
          {/* logo section */}
        <Link className='inline-flex items-center gap-2'>
            <BookOpenIcon className='w-8 h-8 text-blue-500'/>
            <span className='text-xl font-bold tracking-wide text-gray-800 '>bookHouse</span>
            </Link>
          {/* nav item section */}
          <ul className='items-center hidden space-x-8 lg:flex'>
        <li>
            <NavLink to={'/'} 
            className={({isActive})=> (isActive ? 'text-orange-500' : 'default') }
            >Home</NavLink>
        </li>
        <li>
            <NavLink to={'books'} 
            className={({isActive})=> (isActive ? 'text-orange-500' : 'default') }
            >Books</NavLink>
        </li>
        <li>
            <NavLink to={'about`'} 
            className={({isActive})=> (isActive ? 'text-orange-500' : 'default') }
            >About Us</NavLink>
        </li>
          </ul>
          
        </div>
    );
};

export default Header;