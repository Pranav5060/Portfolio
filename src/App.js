import React from "react";
import "./index.css";
import  { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Home/>
      <Project/>
      <Contact/>
        </div>
      </BrowserRouter>
  );
}

export default App;
