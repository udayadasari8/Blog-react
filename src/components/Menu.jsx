import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='bg-black w-20  h-screen text-white sticky top-0 z-1'>
      <ul className='font-bold divide-y divide-white dark:divide-green-800 gap-6 '>
        <li className='my-4'>Settings</li>
        <li className='my-4'>Explore</li>
        <li className='my-4'>
          <Link to="/blogs">My Blogs</Link>
        </li>
        <li className='my-4'>
          <Link to="/">Home</Link>
        </li>
        <li className='my-4'>Contact</li>
        <li className='my-4'>Categories</li>
      </ul>
    </div>
  );
}

export default Menu;