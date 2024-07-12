// App.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbarcomp from './components/Navbarcomp';
import Employees from './components/Employees';
import Home from './components/Home';
import EmployeeDetail from './components/EmployeeDetail';
import Api from './components/Api';
import Login from './components/Login'; // Import the Login component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Function to handle login
  const handleLogin = () => {
    // Perform login logic (set isLoggedIn to true based on actual authentication)
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic (set isLoggedIn to false)
    setIsLoggedIn(false);
    localStorage.removeItem('token'); // Clear token from localStorage
  };

  // Function to check if user is authenticated
  const isAuthenticated = () => {
    return isLoggedIn || localStorage.getItem('token'); // Check isLoggedIn state or token in localStorage
  };

  // ProtectedRoute component to guard routes
  const ProtectedRoute = ({ element, ...rest }) => {
    return isAuthenticated() ? (
      element
    ) : (
      <Navigate to="/login" replace /> // Redirect to login if not authenticated
    );
  };

  return (
    <div className="App">
      <Navbarcomp isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/home" element={<ProtectedRoute element={<Employees />} />} />
        <Route path="/employees" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/EmployeeDetail/:id" element={<ProtectedRoute element={<EmployeeDetail />} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} /> {/* Route for the Login component */}
      </Routes>
      <Api />
    </div>
  );
};

export default App;
