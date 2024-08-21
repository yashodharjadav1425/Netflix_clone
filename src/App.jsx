import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
// import Popular from './Popular'; // Component for Popular movies
// import Bollywood from '#'; // Component for Bollywood movies
// import Hollywood from './Hollywood'; // Component for Hollywood movies
import { CardComponent } from "./CardComponents";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="#" element={<Popular />} />
        <Route path="#" element={<Bollywood />} />
        <Route path="#" element={<Hollywood />} /> */}
        <Route path="/" element={<CardComponent />} />
      </Routes>
    </Router>
  );
};

