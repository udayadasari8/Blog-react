import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Suggestions from './components/Suggestions';
import FormComponent from './components/FormComponent';
import CardComponent from './components/CardComponent';
import BlogDetail from './components/BlogDetail';
import Mainpage from './components/Mainpage';
import Swal from 'sweetalert2';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [blogToEdit, setBlogToEdit] = useState(null);

  useEffect(() => {
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(existingBlogs);
  }, []);

  const handleDelete = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedBlogs = blogs.filter((_, i) => i !== index);
        setBlogs(updatedBlogs);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };

  const handleCreate = () => {
    setBlogToEdit(null);
    setIsFormOpen(true);
  };

  const handleEdit = (index) => {
    setBlogToEdit({ ...blogs[index], index });
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = (newBlog) => {
    if (blogToEdit) {
      const updatedBlogs = blogs.map((blog, i) =>
        i === blogToEdit.index ? newBlog : blog
      );
      setBlogs(updatedBlogs);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    } else {
      setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
      localStorage.setItem('blogs', JSON.stringify([...blogs, newBlog]));
    }
  };

  return (
    <BrowserRouter>
      <Navbar onCreate={handleCreate} />
      <div className="flex gap-0 p-0">
        <Menu />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Suggestions />
                  <Mainpage />
                </>
              }
            />
            <Route
              path="/blogs"
              element={
                <div className="flex flex-wrap gap-6 mx-8 justify-center md:grid-cols-3 py-6">
                  {blogs.map((blog, index) => (
                    <CardComponent
                      key={index}
                      index={index}
                      blog={blog}
                      onDelete={() => handleDelete(index)}
                      onEdit={() => handleEdit(index)}
                    />
                  ))}
                </div>
              }
            />
            <Route
              path="/blogs/:index"
              element={<BlogDetail blogs={blogs} onDelete={handleDelete} />}
            />
          </Routes>
        </div>
      </div>
      {isFormOpen && (
        <FormComponent
          isOpen={isFormOpen}
          onClose={handleCloseForm}
          onSubmit={handleSubmit}
          blogToEdit={blogToEdit}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
