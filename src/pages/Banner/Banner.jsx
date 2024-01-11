import React, { useState } from "react";
import Modal from 'react-modal';
import banner from '../../assets/images/banner.svg'


function Banner(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // setEditingIndex(null);
    };
    return (
        <div className="container mx-auto xl:px-4 2xl:px-0">
            <div className="flex justify-between items-center my-[32px]">
                <h1 className="font-custom font-[700] text-[28px]">Banner</h1>
                <button onClick={openModal} className=" float-right font-bold bg-[#25B679] text-white px-[13px] flex items-center pb-1 rounded-lg text-[24px] mr-6 2xl:mr-0 mt-[16px]">+</button>
            </div>
            <div className="flex flex-wrap gap-[20px] items-center justify-between">
                <div className="lg:w-[23%] 2xl:w-[24%] p-[8px] border border-[#D9D9D9] rounded-xl">
                    <img src={banner} alt="Banner" className="w-full"/>
                    <div className="grid items-center justify-center mt-[10px]">
                      <h2 className="text-center font-custom font-[700]">Banner link</h2>
                      <button><i class='bx bx-trash text-red-500 bg-[#FFEBEB] mt-[10px] px-[16px] xl:w-[263px] 2xl:w-[350px] py-[8px] rounded-xl hover:bg-red-500 hover:text-white' > O'chirish</i></button>
                    </div>
                </div>
                <div className="lg:w-[23%] 2xl:w-[24%] p-[8px] border border-[#D9D9D9] rounded-xl">
                    <img src={banner} alt="Banner" className="w-full"/>
                    <div className="grid items-center justify-center mt-[10px]">
                      <h2 className="text-center font-custom font-[700]">Banner link</h2>
                      <button><i class='bx bx-trash text-red-500 bg-[#FFEBEB] mt-[10px] px-[16px] xl:w-[263px] 2xl:w-[350px] py-[8px] rounded-xl hover:bg-red-500 hover:text-white' > O'chirish</i></button>
                    </div>
                </div>
                <div className="lg:w-[23%] 2xl:w-[24%] p-[8px] border border-[#D9D9D9] rounded-xl">
                    <img src={banner} alt="Banner" className="w-full"/>
                    <div className="grid items-center justify-center mt-[10px]">
                      <h2 className="text-center font-custom font-[700]">Banner link</h2>
                      <button><i class='bx bx-trash text-red-500 bg-[#FFEBEB] mt-[10px] px-[16px] xl:w-[263px] 2xl:w-[350px] py-[8px] rounded-xl hover:bg-red-500 hover:text-white' > O'chirish</i></button>
                    </div>
                </div>
                <div className="lg:w-[23%] 2xl:w-[24%] p-[8px] border border-[#D9D9D9] rounded-xl">
                    <img src={banner} alt="Banner" className="w-full"/>
                    <div className="grid items-center justify-center mt-[10px]">
                      <h2 className="text-center font-custom font-[700]">Banner link</h2>
                      <button><i class='bx bx-trash text-red-500 bg-[#FFEBEB] mt-[10px] px-[16px] xl:w-[263px] 2xl:w-[350px] py-[8px] rounded-xl hover:bg-red-500 hover:text-white' > O'chirish</i></button>
                    </div>
                </div>
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
export default Banner;
