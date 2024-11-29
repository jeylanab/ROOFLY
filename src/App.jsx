// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Components/Navigation";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
import { About } from "./Pages/About";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import PropertyList from "./Components/PropertyList";

function App() {
  return (
    <>
      <div className="lg:mx-20 mx-5 my-5">
        {/* Navigation Bar */}
        <Navigation />

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<PropertyList />} />  
          <Route path="/rent" element={<PropertyList />} />  
          <Route path="/item" element={<PropertyList />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<SignUp />} /> 
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
