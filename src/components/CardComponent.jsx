import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = ({ blog, index, onEdit, onDelete, onLike }) => {
  //console.log(blog.image); 
  return (
   
    <div className="max-w-sm  rounded overflow-hidden hover:shadow-xl shadow-lg bg-white mb-4 transition delay-105 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-400"> 
      <img src={blog.image} alt="this is image" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{blog.blogName}</h3>
        <p className="text-gray-600">{blog.author}</p>
        <p className="mt-2">{blog.blogData.substring(0, 100)}...</p>
        
        <div className="mt-4">
          <Link to={`/blogs/${index}`} className="text-white bg-black rounded hover:underline font-bold px-4 py-2">
            Continue Reading
          </Link>
        </div>

        <div className="mt-4 flex gap-4">
          <button
            onClick={() => onEdit(index)}
            className="text-black bg-green-400 rounded hover:underline py-2 px-2"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(blog)}
            className="text-black bg-green-400 rounded hover:underline py-2 px-2"
          >
            Delete
          </button>
          {/*<button
            onClick={() => onLike(blog)}
            className="text-black bg-green-400 rounded hover:underline py-2 px-2"
          >
            Like
          </button> */}
        </div>
      </div>
    </div>
  
    
  );
};

export default CardComponent;