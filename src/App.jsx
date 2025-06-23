import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <header className="bg-gray-900 text-white shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <h1 className="text-2xl font-semibold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                AuthFlow
              </h1>
            </div>
            
            <nav className="flex items-center space-x-6">
              <Link 
                to="/login" 
                className="text-gray-300 hover:text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-md font-medium text-white shadow-sm transition-colors duration-200"
              >
                Sign Up
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;