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
                  <div className="modal-content bg-white w-[528px]">
                    <div className="modal-header pt-[40px] pb-[64px] px-[70px]">
                      <div className="flex items-center justify-between">
                        <h2 className="text-[24px] font-[700] font-custom">Kategoriya qo’shish</h2>
                        <button className="close-btn" onClick={closeModal}><i class='bx bx-x text-[40px]'></i></button>
                      </div>
                      <form className="grid my-[24px]">
                        <label htmlFor="sectionName" className="font-custom text-[17px] font-[700] mt-[16px]">Rasm Yuklash PNG, JPG (345x180px)</label>
                        <label for="fileInput" class="mt-[24px] flex items-center justify-center cursor-pointer bg-[#F4F4F4] border-2 border-dashed border-[#6B6B6B] py-[24px] px-[10px] h-[160px] rounded-[12px]">
                          <span className="text-[#6B6B6B]"><i class='bx bx-plus'></i> Reklama uchun rasm yuklash</span>
                          <input type="file" id="fileInput" class="hidden"/>
                        </label>
                        <label htmlFor="sectionName" className="font-custom text-[17px] mt-[16px] font-[700]">URL</label>
                        <input
                          type="text"
                          className="input-name mt-[8px]"
                          id="sectionName"
                          name="nameL"
                          placeholder="URL"
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
export default Banner;
