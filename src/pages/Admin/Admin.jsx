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
    // setEditingIndex(null);
  };

  // const handleActionsClick = () => {
  //   setShowActions(!showActions);
  // };

    return(
        <div className="container mx-auto">
            <div className="flex justify-between items-center my-[32px]">
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