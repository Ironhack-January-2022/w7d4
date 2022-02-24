import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import ProjectDetails from "./ProjectDetails";
import { Projects } from "./Projects";
import Navbar from "./Navbar";
import { Routes, Route } from 'react-router-dom';

function NotFound() {
  return <h1>404 - Not Found - 🙀</h1>
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* This is a list of routes -> which url should show which component */}
        {/* path is the url that the user sees in the browser */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;