import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetail = ({ blogs }) => {
    const { index } = useParams();
    const blog = blogs[parseInt(index, 10)];
    

  if (!blog) {
    return <div className="text-center text-red-500 text-xl mt-10">Blog not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white rounded shadow-lg p-6">
      <h1 className="text-3xl font-semibold">{blog.blogName}</h1>
      <p className="text-xl text-gray-700 mt-2">{blog.author}</p>
      <p className="text-lg text-gray-800 my-6">{blog.blogData}</p>
      <div className="mt-6">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back to Blogs
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
