import React, { useState } from "react";
import Modal from 'react-modal';


function Faq(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // setEditingIndex(null);
    };
    return (
        <div className="container mx-auto px-4 2xl:px-0">
            <div className="flex justify-between items-center my-[32px]">
                <h1 className="font-custom font-[700] text-[28px]">FAQ</h1>
                <button onClick={openModal} className=" float-right font-bold bg-[#25B679] text-white px-[13px] flex items-center pb-1 rounded-lg text-[24px] mr-6 2xl:mr-0 mt-[16px]">+</button>
            </div>
            <div className="flex flex-wrap gap-[20px] items-center justify-between">
                <div className="lg:w-[49%] p-[16px] bg-[#FAFAFA]">
                    <h2 className="font-custom font-[700] text-[24px] text-[#212121] mb-[10px]">Qishloq xo'jaligi haqida qisqacha ma'lumot</h2>
                    <p className="">Qishloq qishloq xo'jaligi don, meva, sabzavot va moyli o'simliklar kabi ekinlarni etishtirishni o'z ichiga oladi. Fermerlar odatda mavsumiy tsikllarga rioya qilishadi va hosilni optimallashtirish uchun turli dehqonchilik usullaridan foydalanadilar. Ko'pgina qishloq joylarda chorvachilik fermalari joylashgan bo'lib, u erda go'sht, sut, tuxum va boshqa mahsulotlar uchun qoramol, qo'y, cho'chqa va parrandalar boqiladi. Chorvachilik qishloq xoʻjaligi iqtisodiyotiga salmoqli hissa qoʻshmoqda.</p>
                </div>
                <div className="lg:w-[49%] p-[16px] bg-[#FAFAFA]">
                    <h2 className="font-custom font-[700] text-[24px] text-[#212121] mb-[10px]">Qishloq xo'jaligi haqida qisqacha ma'lumot</h2>
                    <p>Qishloq qishloq xo'jaligi don, meva, sabzavot va moyli o'simliklar kabi ekinlarni etishtirishni o'z ichiga oladi. Fermerlar odatda mavsumiy tsikllarga rioya qilishadi va hosilni optimallashtirish uchun turli dehqonchilik usullaridan foydalanadilar. Ko'pgina qishloq joylarda chorvachilik fermalari joylashgan bo'lib, u erda go'sht, sut, tuxum va boshqa mahsulotlar uchun qoramol, qo'y, cho'chqa va parrandalar boqiladi. Chorvachilik qishloq xoʻjaligi iqtisodiyotiga salmoqli hissa qoʻshmoqda.</p>
                </div>
                <div className="lg:w-[49%] p-[16px] bg-[#FAFAFA]">
                    <h2 className="font-custom font-[700] text-[24px] text-[#212121] mb-[10px]">Qishloq xo'jaligi haqida qisqacha ma'lumot</h2>
                    <p>Qishloq qishloq xo'jaligi don, meva, sabzavot va moyli o'simliklar kabi ekinlarni etishtirishni o'z ichiga oladi. Fermerlar odatda mavsumiy tsikllarga rioya qilishadi va hosilni optimallashtirish uchun turli dehqonchilik usullaridan foydalanadilar. Ko'pgina qishloq joylarda chorvachilik fermalari joylashgan bo'lib, u erda go'sht, sut, tuxum va boshqa mahsulotlar uchun qoramol, qo'y, cho'chqa va parrandalar boqiladi. Chorvachilik qishloq xoʻjaligi iqtisodiyotiga salmoqli hissa qoʻshmoqda.</p>
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
export default Faq;
