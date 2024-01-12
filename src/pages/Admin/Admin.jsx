import React, { useState } from "react";
import { TableTwo } from "../../components/TableTwo/TableTwo";
import Modal from 'react-modal';
import './Admin.css'


export default function Category(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return(
        <div className="container mx-auto ">
            <div className="flex justify-between items-center my-[32px] px-4 2xl:px-0">
                <h1 className="font-custom font-[700] text-[28px]">Admin qo'shish</h1>
                <button onClick={openModal} className=" float-right font-bold bg-[#25B679] text-white px-[13px] flex items-center pb-1 rounded-lg text-[24px] mr-6 2xl:mr-0 mt-[16px]">+</button>
            </div>
          <div className="w-[100%] px-4  mx-auto 2xl:px-0">
            <TableTwo/>
          </div>
          <div className="w-[50%]">
          <Modal
              isOpen={isModalOpen}
              className="react-modal-content"
              overlayClassName="react-modal-overlay"
              onRequestClose={closeModal}
            >
              <div className="modal-content bg-white w-[528px]">
                <div className="modal-header pt-[40px] pb-[64px] px-[70px]">
                  <div className="flex items-center justify-between">
                    <h2 className="text-[24px] font-[700] font-custom">Admin qo’shish</h2>
                    <button className="close-btn" onClick={closeModal}><i class='bx bx-x text-[40px]'></i></button>
                  </div>
                  <form className="grid my-[24px]">
                    <label htmlFor="sectionName" className="font-custom text-[17px] font-[700]">To'liq ismi</label>
                    <input
                      type="text"
                      className="input-name mt-[8px]"
                      id="sectionName"
                      name="nameL"
                      placeholder="Ismi"
                      autoComplete="off"
                    />
                    <label htmlFor="sectionName" className="font-custom text-[17px] font-[700] mt-[16px]">Telefon raqami</label>
                    <input
                      type="text"
                      className="input-name mt-[8px]"
                      id="sectionName"
                      name="nameK"
                      placeholder="+998(90)123-45-67"
                      autoComplete="off"
                    
                    />
                    <label htmlFor="sectionName" className="font-custom text-[17px] font-[700] mt-[16px]">Roli</label>
                    <select id="startSelector" className="w-[45%]  py-2 px-2 text-[14px] border border-gray-300 outline-none rounded-lg">
                        <option >Lavozimini tanlang</option>
                        <option value="ROLE_ADMIN">Admin</option>
                        <option value="ROLE_USER">Foydalanuvchi</option>
                        <option value="ROLE_GUEST">Mehmon</option>
                        <option value="ROLE_MODERATOR">Moderator</option>
                        <option value="ROLE_FERMER">Fermer</option>
                    </select>
                    <button className="bg-[#25B679] text-white mt-[40px] w-[400px] px-[16px] py-[12px] font-custom text-[24px] rounded-[7px]" type="submit">
                      Saqlash
                    </button>
                  </form>
                </div>
              </div>
            </Modal>
          </div>
        </div>
        
    )
} 