import React from 'react'
import { Database, Search, House } from 'lucide-react'
const Navbar = () => {
    return (
        <>
            <div className='bg-black  flex  justify-between'>
                <div className='flex  gap-2 p-2  '>
                    <Database size={35} color='white' />
                    <h1 className='text-2xl text-green-400 font-bold ' >Bloggers</h1>
                </div>
                <div className='flex my-3 gap-2  '>
                    <House color='white' size={30} />
                    <input type='text' placeholder='What Do Want to Read' className=' border-1 text-white rounded-full  px-3  w-80'></input>
                    <Search color='white' size={30} />

                </div>
                <div className='flex text-white'> <ul className='flex  my-4 gap-3  justify-between'>
                    <li>Help</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <button className='rounded-full bg-green-400 text-black font-bold h-6 w-30' >Create Blog</button>
                </ul></div>
            </div>
        </>
    )
}

export default Navbar
