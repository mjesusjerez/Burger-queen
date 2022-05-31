import React from 'react';
import './view/Style.css'
import  Cocina  from './view/Cocina'
import  Mesas from './view/Mesero.js';
import { Home } from './view/Home.js';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/mesas" element={<Mesas />} />
          
          <Route path="/cocina" element={<Cocina />} />
      </Routes>
    </div>
  );
}


export default App;

