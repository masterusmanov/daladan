import React from "react";
import logo from '../../assets/images/Logo.svg'
import Pista from '../../assets/images/dala/pista.jpg'
import { Link } from "react-router-dom";
import './Moderator.css'
// import Piyoz from '../../assets/images/dala/piyoz.png'

function Moderator(){
    const originalText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repudiandae iste temporibus reiciendis fugit odit? Earum voluptatem quibusdam repellat libero eos distinctio vero similique itaque quasi, doloremque vel ab illum porro modi maiores deserunt minima pariatur nemo? Consectetur, illo fugit.';

    const words = originalText.split(' ');
    const truncatedText = words.slice(0, 15).join(' ');

    return(
        <div className="container mx-auto py-[40px]">
            <img src={logo} alt="" className="h-[42px] px-4 2xl:px-0"/>
            <div className="flex gap-6 mt-[27px]">
                <div className="w-1/2 p-[32px] bg-[#FAFAFA] rounded-[32px]">
                    <div className=" grid gap-[16px] max-h-[100vh] overflow-y-auto p-[8px]">
                        <h1 className="font-custom text-[24px] font-[700]">Yangi qo'shilgan</h1>
                        <div className="flex gap-6 bg-[#DAF0E7] rounded-xl p-[16px]">
                            <img src={Pista} alt="" className="rounded-xl w-[200px] object-cover"/>
                            <div>
                                <div className="flex justify-between items-center">
                                    <h3 className="font-custom text-[24px] font-[700] text-[#212121]">Piyoz</h3>
                                    <div class="dropdown">
                                        <button class="dropbtn"><i class='bx bx-dots-vertical-rounded text-[26px]'></i></button>
                                        <div class="dropdown-content">
                                            <Link href="#"><i class='bx bx-check-double text-blue-600 text-[16px]'> Tasdiqlash</i></Link>
                                            <Link href="#"><i class='bx bx-trash text-red-600 text-[16px]'> O'chirish</i></Link>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-justify font-custom text-[17px] font-[400] text-[#6B6B6B] mt-[5px]">{truncatedText}...</p>
                                <Link href="#" className="flex gap-2 font-custom text-[17px] font-[700] text-[#6B6B6B] mt-[10px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <g clip-path="url(#clip0_527_4386)">
                                    <path d="M12 24.4525L5.63604 18.0886C2.12132 14.5738 2.12132 8.87535 5.63604 5.36063C9.15076 1.84591 14.8492 1.84591 18.364 5.36063C21.8787 8.87535 21.8787 14.5738 18.364 18.0886L12 24.4525ZM16.9497 16.6743C19.6834 13.9407 19.6834 9.50851 16.9497 6.77484C14.2161 4.04117 9.78392 4.04117 7.05025 6.77484C4.31658 9.50851 4.31658 13.9407 7.05025 16.6743L12 21.6241L16.9497 16.6743ZM12 13.7246C10.8954 13.7246 10 12.8292 10 11.7246C10 10.62 10.8954 9.72459 12 9.72459C13.1046 9.72459 14 10.62 14 11.7246C14 12.8292 13.1046 13.7246 12 13.7246Z" fill="#25B679"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_527_4386">
                                    <rect width="24" height="24" fill="white" transform="translate(0 0.72464)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                    Qashqadaryo, Yakkabog' tumani</Link>
                                <div className="flex justify-between items-center mt-[16px]">
                                    <p className="font-custom text-[20px] font-[700] text-[#6B6B6B]">3.5 tonna</p>
                                    <p className="font-custom text-[26px] font-[700] text-[#25B679]">2.200 so'm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 p-[32px] bg-[#FAFAFA] rounded-[32px]">
                    <div className=" grid gap-[16px] max-h-[100vh] overflow-y-auto p-[8px]">
                        <h1 className="font-custom text-[24px] font-[700]">Tasdiqlangan</h1>
                        <div className="flex gap-6 bg-[#FFF] rounded-xl p-[16px]">
                            <img src={Pista} alt="" className="rounded-xl w-[200px] object-cover"/>
                            <div>
                                <div className="flex justify-between items-center">
                                    <h3 className="font-custom text-[24px] font-[700] text-[#212121]">Piyoz</h3>
                                    <div class="dropdown">
                                        <button class="dropbtn"><i class='bx bx-dots-vertical-rounded text-[26px]'></i></button>
                                        <div class="dropdown-content">
                                            <Link href="#"><i class='bx bx-edit-alt text-blue-600 text-[16px]'> Yangilash</i></Link>
                                            <Link href="#"><i class='bx bx-trash text-red-600 text-[16px]'> O'chirish</i></Link>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-justify font-custom text-[17px] font-[400] text-[#6B6B6B] mt-[5px]">{truncatedText}...</p>
                                <Link href="#" className="flex gap-2 font-custom text-[17px] font-[700] text-[#6B6B6B] mt-[10px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <g clip-path="url(#clip0_527_4386)">
                                    <path d="M12 24.4525L5.63604 18.0886C2.12132 14.5738 2.12132 8.87535 5.63604 5.36063C9.15076 1.84591 14.8492 1.84591 18.364 5.36063C21.8787 8.87535 21.8787 14.5738 18.364 18.0886L12 24.4525ZM16.9497 16.6743C19.6834 13.9407 19.6834 9.50851 16.9497 6.77484C14.2161 4.04117 9.78392 4.04117 7.05025 6.77484C4.31658 9.50851 4.31658 13.9407 7.05025 16.6743L12 21.6241L16.9497 16.6743ZM12 13.7246C10.8954 13.7246 10 12.8292 10 11.7246C10 10.62 10.8954 9.72459 12 9.72459C13.1046 9.72459 14 10.62 14 11.7246C14 12.8292 13.1046 13.7246 12 13.7246Z" fill="#25B679"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_527_4386">
                                    <rect width="24" height="24" fill="white" transform="translate(0 0.72464)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                    Qashqadaryo, Yakkabog' tumani</Link>
                                <div className="flex justify-between items-center mt-[16px]">
                                    <p className="font-custom text-[20px] font-[700] text-[#6B6B6B]">3.5 tonna</p>
                                    <p className="font-custom text-[26px] font-[700] text-[#25B679]">2.200 so'm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moderator;