import React from "react";
import Example from '../../components/Chart/Chart';

function Monitoring() {
    return(
        <div className="container mx-auto text-[#212121] px-4 2xl:px-0">
            <h1 className="font-[700] text-[28px] line-height-[130%] font-custom my-[32px]">Monitoring</h1>
            <div className="px-12 py-[20px] rounded-[18px] bg-[#FAFAFA]">
                <div className="flex justify-between items-center">
                    <h1 className="text-[24px] font-[700] font-custom">Kunlik</h1>
                    <select name="time" id="" className="outline-none bg-[#25B679] text-white px-[24px] py-[11px] rounded-[8px]">
                        <option value="date">Kunlik</option>
                        <option value="week">Haftalik</option>
                        <option value="month">Oylik</option>
                    </select>
                </div>
                <div className="container mx-auto mt-[24px]">
                   <Example/>
                </div>
            </div>
        </div>
    )
}

export default Monitoring;