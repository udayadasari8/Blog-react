import React, { useState, useEffect } from 'react';

const FormComponent = ({ isOpen, onClose, onSubmit, blogToEdit }) => {
  const [author, setAuthor] = useState('');
  const [blogName, setBlogName] = useState('');
  const [blogData, setBlogData] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (blogToEdit) {
      const { author, blogName, blogData, image } = blogToEdit;
      setAuthor(author);
      setBlogName(blogName);
      setBlogData(blogData);
      setImage(image);
    }
  }, [blogToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlog = { author, blogName, blogData, image };

    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    existingBlogs.push(updatedBlog);
    localStorage.setItem('blogs', JSON.stringify(existingBlogs));
    onSubmit(updatedBlog);
    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-green-400 p-6 rounded shadow-lg">
        <h2 className="text-3xl font-bold mb-2">{blogToEdit ? 'Edit Blog' : 'Create New Blog'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-2xl font-bold text-black">Author Name</label>
            <input
              placeholder="Enter The Author Name"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-3 my-2 border border-black rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-2xl font-bold text-black">Blog Title</label>
            <input
              placeholder="Enter The Blog Title"
              type="text"
              value={blogName}
              onChange={(e) => setBlogName(e.target.value)}
              className="w-full p-3 my-2 border border-black rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-2xl font-bold text-black">Blog</label>
            <textarea
              placeholder="Enter The Blog Here"
              value={blogData}
              onChange={(e) => setBlogData(e.target.value)}
              className="w-full p-3 my-2 border border-black rounded"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-2xl font-bold text-black">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 my-2 border border-black rounded"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-black text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
