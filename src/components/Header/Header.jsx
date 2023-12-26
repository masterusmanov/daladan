import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/images/Logo.svg';

function Header() {
    return (
      <div className="App">
        <header className="container mx-auto mt-[40px] xl:px-4 2xl:px-0">
          <img src={Logo} alt="" className="w-[164px] h-[42px]"/>
          <div className="flex justify-center items-center gap-[40px] rounded-full mt-[32px] mx-auto xl:w-[75%] h-[58px] bg-[#FAFAFA] 2xl:w-[60%]">
            <NavLink to="/" className="font-custom text-[24px] font-[700] hover:text-[#25B679]">Monitoring</NavLink>
            <NavLink to="/admin" className="font-custom text-[24px] font-[700] hover:text-[#25B679]">Admin qo’shish</NavLink>
            <NavLink to="/category" className="font-custom text-[24px] font-[700] hover:text-[#25B679]">Kategoriya</NavLink>
            <NavLink to="/news" className="font-custom text-[24px] font-[700] hover:text-[#25B679]">Yangiliklar</NavLink>
            <NavLink to="/banner" className="font-custom text-[24px] font-[700] hover:text-[#25B679]">Banner</NavLink>
            <NavLink to="/faq" className="font-custom text-[24px] font-[700] hover:text-[#25B679]">FAQ</NavLink>
          </div>
        </header>
      </div>
    );
  }
  
  export default Header;
  