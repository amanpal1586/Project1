import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"

import Feature from "./components/Feature"
import HeroSection  from "./components/HeroSection"
import Dashboard from "./components/Dashboard";

import Footer from "./components/Footer";
import './App.css'
import QuestionBox from './components/QuestionBox';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<Feature />} />
          {/* <Route path="/courses" element={<Courses />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          <Route path='/questionbox' element={<QuestionBox />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
