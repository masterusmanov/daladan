import React from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Monitoring from './pages/Monitoring/Monitoring';
import Category from './pages/Category/Category';
import Admin from './pages/Admin/Admin';
import Department from './pages/Category/Department';
import News from './pages/News/News';
import Banner from './pages/Banner/Banner';
import Faq from './pages/Faq/Faq';
import Login from './pages/Login/Login';
import Moderator from './pages/Modeerator/Moderator';

function App() {
  const location = useLocation();
  // const navigate = useNavigate();

  // const hasToken = false;

  // React.useEffect(() => {
  //   if (!hasToken && location.pathname !== '/login') {
  //     navigate('/login');
  //   }
  // }, [hasToken, location.pathname, navigate]);

  return (
    <div className="App">
      {/* <Header/> */}
      {location.pathname !== '/login' && <Header /> && <Moderator/>}
     <Routes>
        <Route path="/" element={<Monitoring />} />
        <Route path="/category" element={<Category />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/department" element={<Department />} />
        <Route path="/news" element={<News />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/faq" element={<Moderator />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
