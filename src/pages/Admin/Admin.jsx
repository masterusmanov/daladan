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
              <div className="modal-content bg-green-500 w-[528px]">
                <div className="modal-header pt-[40px] pb-[64px] px-[70px]">
                  <div className="flex items-center justify-between">
                    <h2 className="text-[24px] font-[700] font-custom">Admin qo’shish</h2>
                    <button className="close-btn" onClick={closeModal}><i class='bx bx-x text-[40px]'></i></button>
                  </div>
                  <form className="modal-form" >

                    <label htmlFor="sectionName">Mahsulot nomi</label>
                    <input
                      type="text"
                      className="input-name"
                      id="sectionName"
                      name="nameL"
                      placeholder="Mahsulot nomi"
                      autoComplete="off"
                    />
                    <label htmlFor="sectionName">Маҳсулот номи</label>
                    <input
                      type="text"
                      className="input-name"
                      id="sectionName"
                      name="nameK"
                      placeholder="Маҳсулот номи"
                      autoComplete="off"
                    
                    />

                    <button className="save-btn" type="submit">
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