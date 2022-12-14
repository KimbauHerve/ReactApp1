//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/a-propos' exact element={<About />} />
        {/* En cas d'erreur */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
