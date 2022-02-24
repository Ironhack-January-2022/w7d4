import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import ProjectDetails from "./ProjectDetails";
import { Projects } from "./Projects";
import Navbar from "./Navbar";
import { Route, Switch } from 'react-router-dom';

function NotFound() {
  return <h1>404 - Not Found - 🙀</h1>
}

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;