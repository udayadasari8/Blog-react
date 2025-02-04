import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Suggestions from './components/Suggestions';
import FormComponent from './components/FormComponent';
import CardComponent from './components/CardComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './components/Mainpage';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(existingBlogs);
  }, []);

  const handleCreateClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  const handleDelete = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  return (
    <BrowserRouter>
      <Navbar onCreate={handleCreateClick} />
      <div className="flex gap-0 p-0">
        <Menu />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Suggestions />
                  <div><Mainpage/></div>
                </>
              }
            />
            <Route
              path="/blogs"
              element={
                <div className="flex flex-wrap">
                  {blogs.map((blog, index) => (
                    <CardComponent
                      key={index}
                      blog={blog}
                      onDelete={() => handleDelete(index)}
                    />
                  ))}
                </div>
              }
            />
          </Routes>
        </div>
      </div>
      <FormComponent isOpen={isFormOpen} onClose={handleCloseForm} onSubmit={handleFormSubmit} />
    </BrowserRouter>
  );
}

export default App;