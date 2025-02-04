import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Suggestions from './components/Suggestions';
import FormComponent from './components/FormComponent';
import CardComponent from './components/CardComponent';
import BlogDetail from './components/BlogDetail';
import Mainpage from './components/Mainpage';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false); // Track if the form is open

  useEffect(() => {
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(existingBlogs);
  }, []);

  const handleDelete = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  const handleCreate = () => {
    setIsFormOpen(true); // Open the form when the button is clicked
  };

  const handleCloseForm = () => {
    setIsFormOpen(false); // Close the form
  };

  const handleSubmit = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
    localStorage.setItem('blogs', JSON.stringify([...blogs, newBlog]));
  };

  return (
    <BrowserRouter>
      <Navbar onCreate={handleCreate} /> {/* Pass handleCreate to Navbar */}
      <div className="flex gap-0 p-0">
        <Menu />
        <div>
          <Routes>
            {/* Home route to show Mainpage */}
            <Route
              path="/"
              element={
                <>
                  <Suggestions />
                  <Mainpage />
                </>
              }
            />

            {/* Route to show all blogs */}
            <Route
              path="/blogs"
              element={
                <div className="flex flex-wrap">
                  {blogs.map((blog, index) => (
                    <CardComponent
                      key={index}
                      index={index}
                      blog={blog}
                      onDelete={() => handleDelete(index)}
                    />
                  ))}
                </div>
              }
            />

            {/* Route to show Blog Detail */}
            <Route
              path="/blogs/:index"
              element={<BlogDetail blogs={blogs} />}
            />
          </Routes>
        </div>
      </div>

      {/* Show the form when isFormOpen is true */}
      {isFormOpen && (
        <FormComponent
          isOpen={isFormOpen}
          onClose={handleCloseForm}
          onSubmit={handleSubmit}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
