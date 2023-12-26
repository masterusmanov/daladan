import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Monitoring from './pages/Monitoring/Monitoring';
import Category from './pages/Category/Category';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
        <Route path="/" element={<Monitoring />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
