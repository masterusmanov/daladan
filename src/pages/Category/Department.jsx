import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TableThree } from "../../components/TableThree/TableThree";
import Modal from 'react-modal';
import './Category.css'


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
            <div className="flex justify-start items-center gap-[40px] rounded-full mt-[32px] xl:w-[35%] h-[58px] 2xl:w-[30%]">
                <NavLink to="/category" className="font-custom text-[24px] font-[700] hover:text-[#25B679] line-height-130%;">Kategoriya</NavLink>
                <NavLink to="/department" className="font-custom text-[24px] font-[700] hover:text-[#25B679] line-height-130%;">Bo'lim</NavLink>
          </div>
          <button onClick={openModal} className=" float-right font-bold bg-[#25B679] text-white px-[13px] flex items-center pb-1 rounded-lg text-[24px] mr-6 2xl:mr-0 mt-[16px]">+</button>
          <div className="mt-[100px] w-[100%] px-4  mx-auto 2xl:px-0">
            <TableThree/>
          </div>
          <div className="w-[50%]">
          <Modal
              isOpen={isModalOpen}
              className="react-modal-content"
              overlayClassName="react-modal-overlay"
              onRequestClose={closeModal}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title">Bo’lim qo’shish</h2>
                  <button className="close-btn" onClick={closeModal}>
                    &#10006;
                  </button>
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