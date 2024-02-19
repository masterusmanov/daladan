import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/images/Logo.svg';

function Header() {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (index) => {
    setActiveLink(index);
  };

  const getLinkStyle = (index) => {
    return {
      color: index === activeLink ? "#FFFFFF" : "",
      backgroundColor: index === activeLink ? "#25B679" : "",
      borderRadius: index === activeLink ? "30px" : "",
      paddingLeft: index === activeLink ? "24px" : "",
      paddingRight: index === activeLink ? "24px" : "",
      paddingTop: index === activeLink ? "5px" : "",
      paddingBottom: index === activeLink ? "5px" : "",
    };
  };
    return (
      <div className="App">
        <header className="container mx-auto mt-[40px] xl:px-4 2xl:px-0">
          <img src={Logo} alt="" className="w-[164px] h-[42px]"/>
          <div className="flex justify-center items-center gap-[40px] rounded-full mt-[32px] mx-auto xl:w-[95%] h-[58px] bg-[#FAFAFA] 2xl:w-[80%]">
            <NavLink to="/monitoring" className="font-custom text-[24px] font-[700] hover:text-[#25B679]" style={getLinkStyle(0)} onClick={() => handleNavLinkClick(0)}>Monitoring</NavLink>
            <NavLink to="/admin" className="font-custom text-[24px] font-[700] hover:text-[#25B679]" style={getLinkStyle(1)} onClick={() => handleNavLinkClick(1)}>Admin qo’shish</NavLink>
            <NavLink to="/category" className="font-custom text-[24px] font-[700] hover:text-[#25B679]" style={getLinkStyle(2)} onClick={() => handleNavLinkClick(2)}>Kategoriya</NavLink>
            <NavLink to="/news" className="font-custom text-[24px] font-[700] hover:text-[#25B679]" style={getLinkStyle(3)} onClick={() => handleNavLinkClick(3)}>Yangiliklar</NavLink>
            <NavLink to="/banner" className="font-custom text-[24px] font-[700] hover:text-[#25B679]" style={getLinkStyle(4)} onClick={() => handleNavLinkClick(4)}>Banner</NavLink>
            <NavLink to="/faq" className="font-custom text-[24px] font-[700] hover:text-[#25B679]" style={getLinkStyle(5)} onClick={() => handleNavLinkClick(5)}>FAQ</NavLink>
            <NavLink to="/users" className="font-custom text-[24px] font-[700] hover:text-[#25B679]" style={getLinkStyle(6)} onClick={() => handleNavLinkClick(6)}>Foydalanuvchilar</NavLink>
          </div>
        </header>
      </div>
    );
  }
  
  export default Header;
  