import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { DefaultTable } from "../../components/Table/Table";
import Modal from 'react-modal';
import './Category.css'


export default function Category(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
    
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const handleFileChange = (event) => {
    const selectedFileType = event.target.files[0].type;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];

    if (allowedTypes.includes(selectedFileType)) {
      setSelectedFile(event.target.files[0]);
    } else {
      alert('Only JPG, PNG, and SVG files are allowed!');
    }
  };

    return(
        <div className="container mx-auto">
          <div className="flex items-center justify-between my-[32px]">
            <div className="flex justify-start items-center gap-[40px] rounded-full xl:w-[35%] h-[58px] 2xl:w-[30%] px-4 2xl:px-0">
                  <NavLink to="/category" className="font-custom text-[24px] font-[700] hover:text-[#25B679] line-height-130%;">Kategoriya</NavLink>
                  <NavLink to="/department" className="font-custom text-[24px] font-[700] hover:text-[#25B679] line-height-130%;">Bo'lim</NavLink>
            </div>
          <button onClick={openModal} className=" float-right font-bold bg-[#25B679] text-white px-[13px] flex items-center pb-1 rounded-lg text-[24px] mr-6 2xl:mr-0 mt-[16px]">+</button>
          </div>
          <div className="w-[100%] px-4  mx-auto 2xl:px-0">
            <DefaultTable/>
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
                    <h2 className="text-[24px] font-[700] font-custom">Kategoriya qo’shish</h2>
                    <button className="close-btn" onClick={closeModal}><i class='bx bx-x text-[40px]'></i></button>
                  </div>
                  <form className="grid my-[24px]">
                    <label htmlFor="sectionName" className="font-custom text-[17px] font-[700]">Kategoriya nomi</label>
                    <input
                      type="text"
                      className="input-name mt-[8px]"
                      id="sectionName"
                      name="nameL"
                      placeholder="Kategoriya nomi"
                      autoComplete="off"
                    />
                    <label htmlFor="sectionName" className="font-custom text-[17px] font-[700] mt-[16px]">Категория номи</label>
                    <input
                      type="text"
                      className="input-name mt-[8px]"
                      id="sectionName"
                      name="nameK"
                      placeholder="Категория номи"
                      autoComplete="off"
                    
                    />
                    <label htmlFor="sectionName" className="font-custom text-[17px] font-[700] mt-[16px]">Rasm Yuklash PNG, JPG (345x180px)</label>
                    <label for="fileInput" class="mt-[24px] flex items-center justify-center cursor-pointer bg-[#F4F4F4] border-2 border-dashed border-[#6B6B6B] py-[24px] px-[10px] h-[160px] rounded-[12px]">
                      <span className="text-[#6B6B6B]"><i class='bx bx-plus'></i> Reklama uchun rasm yuklash</span>
                      <input type="file" id="fileInput" class="hidden"/>
                  </label>
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