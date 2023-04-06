import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='flex  items-center justify-between bg-gray-100
        px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ms:px-24 lg:px-8'>
      {/* logo section */}
      <Link to={'/'} className='inline-flex items-center gap-2'>
        <BookOpenIcon className='w-8 h-8 text-blue-500' />
        <span className='text-xl font-bold tracking-wide text-gray-800 '>bookHouse</span>
      </Link>
      {/* nav item section */}
      <ul className='items-center hidden space-x-8 lg:flex'>
        <li>
          <NavLink to={'/'}
            className={({ isActive }) => (isActive ? 'text-orange-500' : 'default')}
          >Home</NavLink>
        </li>
        <li>
          <NavLink to={'books'}
            className={({ isActive }) => (isActive ? 'text-orange-500' : 'default')}
          >Books</NavLink>
        </li>
        <li>
          <NavLink to={'about'}
            className={({ isActive }) => (isActive ? 'text-orange-500' : 'default')}
          >About Us</NavLink>
        </li>
      </ul>
      {/* mobile nevBar section */}
      <div className='lg:hidden'>
        {/* Dropdown open button */}
        <button aria-label='Open Menu' title='Open Menu' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Bars3Icon className='w-5 text-gray-600' />
        </button>
        {
          isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* logo & button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to={'/'} className='inline-flex items-center gap-2'>
                      <BookOpenIcon className='w-8 h-8 text-blue-500' />
                      <span className='text-xl font-bold tracking-wide text-gray-800 uppercase'>bookHouse</span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/books'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

            </div>
          )
        }
      </div>
    </div>
  );
};

export default Header;