import React from 'react';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Contact from './components/Contact';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



function App() {


  return (
    <>
      <Loader />
      <Router>
        <Contact />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;