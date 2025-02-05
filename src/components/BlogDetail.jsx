import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetail = ({ blogs, onDelete }) => {
  const { index } = useParams();
  const blog = blogs[parseInt(index, 10)];
  const navigate = useNavigate();

  if (!blog) {
    return <div className="text-center text-red-500 text-xl mt-10">Blog not found.</div>;
  }

  const handleDelete = () => {
    onDelete(parseInt(index, 10));
    navigate('/blogs');
  };

  return (
    <div className="max-w-10xl max-h-8xl mt-8 bg-white rounded shadow-lg p-6">
      <img src={blog.image} alt="this is image" className="h-150 w-300 mx-auto" />
      <h1 className="text-3xl font-semibold">{blog.blogName}</h1>
      <p className="text-xl text-gray-700 mt-2">{blog.author}</p>
      <p className="text-lg text-gray-800 my-6">{blog.blogData}</p>
      <div className="mt-6 mx-auto">
        <button
          onClick={() => window.history.back()}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Back to Blogs
        </button>
        <button
          onClick={handleDelete}
          className="text-black bg-green-400 hover:underline px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;