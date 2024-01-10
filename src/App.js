import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Monitoring from './pages/Monitoring/Monitoring';
import Category from './pages/Category/Category';
import Admin from './pages/Admin/Admin';
import Department from './pages/Category/Department';
import News from './pages/News/News';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
        <Route path="/" element={<Monitoring />} />
        <Route path="/category" element={<Category />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/department" element={<Department />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
