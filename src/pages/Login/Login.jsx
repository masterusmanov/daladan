import React from "react";
import Logo from '../../assets/images/logologin.svg'
import Logos from '../../assets/images/Logo.svg'

function Login(){
    return(
        <div className="flex  justify-center h-[]">
            <div className="w-1/2 bg-[#FAFAFA] px-[105px] xl:py-[120px] 2xl:py-[200px]">
                <img src={Logo} alt="Logo" className="w-[500px] h-[500px] mx-auto"/>
            </div>
            <div className="w-1/2 pl-[60px] mt-[49px]">
                <img src={Logos} alt="logo" className=""/>
                <div className="w-[377px] h-[386px] xl:mt-[110px] 2xl:mt-[165px]">
                    <h1 className="font-custom text-[32px] font-[700] text-[#212121]">Tizimga kirish</h1>
                    <p className="font-custom text-[17px] font-[400] text-[#6B6B6B]">Boshqaruv panelimizga kirish uchun elektron pochta va parolingizni kiriting</p>
                    <form className="grid my-[40px]">
                        <label htmlFor="sectionName" className="font-custom text-[17px] font-[700]">Telefon raqam </label>
                        <input
                        type="text"
                        className="input-name outline-none mt-[8px]"
                        id="sectionName"
                        name="nameL"
                        placeholder="+998(90)123-45-67 "
                        autoComplete="off"
                        />
                        <label htmlFor="sectionName" className="font-custom text-[17px] font-[700] mt-[16px]">Parol</label>
                        <input
                        type="password"
                        className="input-name outline-none mt-[8px]"
                        id="sectionName"
                        name="nameK"
                        placeholder="********"
                        autoComplete="off"
                        
                        />
                        <button className="bg-[#25B679] text-white mt-[40px] w-[400px] px-[16px] py-[12px] font-custom text-[20px] rounded-[7px]" type="submit">Tizimga kirish</button>
                  </form>
                </div>
            </div>
        </div>
    )
}

export default Login;