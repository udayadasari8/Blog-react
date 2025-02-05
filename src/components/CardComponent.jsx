import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = ({ blog, index, onEdit, onDelete, onLike }) => {
  //console.log(blog.image); 
  return (
   
    <div className="max-w-sm  rounded overflow-hidden shadow-lg bg-green-100 mb-4">
      <img src={blog.image} alt="this is image" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{blog.blogName}</h3>
        <p className="text-gray-600">{blog.author}</p>
        <p className="mt-2">{blog.blogData.substring(0, 100)}...</p>
        
        <div className="mt-4">
          <Link to={`/blogs/${index}`} className="text-blue-500 hover:underline">
            Continue Reading
          </Link>
        </div>

        <div className="mt-4 flex gap-4">
          <button
            onClick={() => onEdit(blog)}
            className="text-blue-500 hover:underline"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(blog)}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
          <button
            onClick={() => onLike(blog)}
            className="text-green-500 hover:underline"
          >
            Like
          </button>
        </div>
      </div>
    </div>
  
    
  );
};

export default CardComponent;