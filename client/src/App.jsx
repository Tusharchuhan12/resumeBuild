// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from './Routes/PrivateRoute';
import Home from './pages/Home';

import Login from './pages/Login';
import Layout from './pages/Layout';
import ResumeBuilder from './pages/ResumeBuilder';
import Preview from './pages/Preview';
function App() {
  return (
    <>
   
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        
        <Route
          path="/Layout"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        />

        <Route
          path="/resumeBuilder/:id"
          element={
            <PrivateRoute>
              <ResumeBuilder />
            </PrivateRoute>
          }
        />
          
           
        <Route path="/Preview" element={<Preview />} />
        {/* Add more routes here if needed */}
      </Routes>
     
    </>
  );
}

export default App;
