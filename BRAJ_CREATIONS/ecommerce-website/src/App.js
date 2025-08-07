import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import HomePage from './components/HomePage';
import ProductSection from './components/ProductSection';
import Mala from './components/Mala';import Toys from './components/Toys';
import Deities from './components/Deities';import Decor from './components/Decor';
import Fancydress from './components/Fancydress';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/caps" element={<ProductSection />} /> 
        <Route path="/mala" element={<Mala />} /> 
        <Route path="/deities" element={<Deities />} /> 
        <Route path="/decor" element={<Decor />} />
        <Route path="/fancy dresses" element={<Fancydress />} /> 
      </Routes>
    </Router>
  );
}

export default App;
