import React from 'react';
import { Database, Search, House } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ onCreate }) => {
  return (
    <div className='bg-black flex justify-between  sticky top-0 z-2 '>
      <div className='flex gap-2 p-2'>
        <Database size={35} color='white' />
        <h1 className='text-2xl text-green-400 font-bold'>Bloggers</h1>
      </div>
      <div className='flex my-3 mt-4 gap-2'>
        <Link to="/">
            <House color='white' size={30} />
        </Link>
        <input
          type='text'
          placeholder='What Do You Want to Read'
          className='border-1 text-white rounded-full px-3 w-80'
        />
        <Search color='white' size={30} />
      </div>
      <div className='flex text-white'>
        <ul className='flex my-4 gap-3 justify-between'>
          <li>Help</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <button
            onClick={onCreate}
            className='rounded-full bg-green-400 text-black font-bold h-6 w-30'
          >
            Create Blog
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;