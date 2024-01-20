import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TableThree } from "../../components/TableThree/TableThree";
import Modal from 'react-modal';
import './Category.css';

export default function Department(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // setEditingIndex(null);
  };

  // const handleActionsClick = () => {
  //   setShowActions(!showActions);
  // };

    return(
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex justify-start items-center gap-[40px] rounded-full my-[32px] xl:w-[35%] h-[58px] 2xl:w-[30%] px-4 2xl:px-0">
                    <NavLink to="/category" className="font-custom text-[24px] font-[700] hover:text-[#25B679] line-height-130%;">Kategoriya</NavLink>
                    <NavLink to="/department" className="font-custom text-[24px] font-[700] hover:text-[#25B679] line-height-130%;">Bo'lim</NavLink>
              </div>
              <button onClick={openModal} className=" float-right font-bold bg-[#25B679] text-white px-[13px] flex items-center pb-1 rounded-lg text-[24px] mr-6 2xl:mr-0 mt-[16px]">+</button>
          </div>
          <div className="w-[100%] px-4  mx-auto 2xl:px-0">
            <TableThree/>
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
                    <h2 className="text-[24px] font-[700] font-custom">Bo'lim qo’shish</h2>
                    <button className="close-btn" onClick={closeModal}><i class='bx bx-x text-[40px]'></i></button>
                  </div>
                  <form className="grid my-[24px]">
                    <label htmlFor="sectionName" className="font-custom text-[17px] font-[700]">Kategoriya</label>
                    <input
                      type="text"
                      className="input-name mt-[8px]"
                      id="sectionName"
                      name="nameL"
                      placeholder="Kategoriya"
                      autoComplete="off"
                    />
                    <label htmlFor="sectionName" className="font-custom text-[17px] font-[700] mt-[16px]">Bo’lim nomi</label>
                    <input
                      type="text"
                      className="input-name mt-[8px]"
                      id="sectionName"
                      name="nameK"
                      placeholder="Bo’lim nomi"
                      autoComplete="off"
                    
                    />
                    <label htmlFor="sectionName" className="font-custom text-[17px] font-[700] mt-[16px]">Бўлим номи</label>
                    <input
                      type="text"
                      className="input-name mt-[8px]"
                      id="sectionName"
                      name="nameK"
                      placeholder="Бўлим номи"
                      autoComplete="off"
                    
                    />
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