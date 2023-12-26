import React from "react";
import { NavLink } from "react-router-dom";
import { DefaultTable } from "../../components/Table/Table";

export default function Category(){
    return(
        <div className="container mx-auto">
            <div className="flex justify-center items-center gap-[40px] rounded-full mt-[32px] xl:w-[35%] h-[58px] 2xl:w-[30%]">
                <NavLink to="/" className="font-custom text-[24px] font-[700] hover:text-[#25B679] line-height-130%;">Katalog</NavLink>
                <NavLink to="/admin" className="font-custom text-[24px] font-[700] hover:text-[#25B679] line-height-130%;">Kategoriya</NavLink>
                <NavLink to="/category" className="font-custom text-[24px] font-[700] hover:text-[#25B679] line-height-130%;">Bo'lim</NavLink>
          </div>
          <button className=" float-right font-bold bg-[#25B679] text-white px-[13px] flex items-center pb-1 rounded-lg text-[24px] mr-6 2xl:mr-0 mt-[16px]">+</button>
          <div>
            <DefaultTable/>
          </div>
        </div>
    )
} 