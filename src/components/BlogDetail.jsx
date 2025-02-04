import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { index } = useParams();
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  const blog = blogs[index];

  if (!blog) {
    return <div className="text-center text-red-500 text-xl mt-10">Blog not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gray-900">{blog.blogName}</h1>
      <p className="text-gray-600 text-sm mt-2">By {blog.author}</p>
      {blog.image && (
        <img src={blog.image} alt={blog.blogName} className="w-full mt-4 rounded-lg" />
      )}
      <p className="mt-6 text-lg text-gray-800">{blog.blogData}</p>
      <Link to="/" className="mt-6 inline-block text-blue-600 hover:underline">Back to Home</Link>
    </div>
  );
};

export default BlogDetail;
