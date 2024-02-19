import React, {useState, useEffect} from 'react';
import { Card, Typography } from "@material-tailwind/react";
import Modal from 'react-modal';

 
const TABLE_HEAD = ["T/R", "F.I.O", "Telefon raqami", "Roli", "Action"];
 
export function TableTwo() {

  const [todo, setTodo] = useState([]);
  const [isModalOpenupdate, setIsModalOpenupdate] = useState(false);
  const [isModalOpendelete, setIsModalOpendelete] = useState(false);

  
  const openModalupdate = (id) => {
    localStorage.setItem("updateid", id)
    setIsModalOpenupdate(true);
  };

  const openModaldelete = (id) => {
    localStorage.setItem("deleteid", id)
    setIsModalOpendelete(true);
  };

  const closeupdateModal = () => {
    localStorage.removeItem("updateid")
    setIsModalOpenupdate(false);
  };

  const closedeleteModal = () => {
    localStorage.removeItem("deleteid")
    setIsModalOpendelete(false);
  };

    useEffect(() => {
      const fetchData = async () => {
        try {
        const token = localStorage.getItem("token");

          const response = await fetch('http://188.225.10.97:8080/api/v1/admin/all', {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          const data = await response.json();
          setTodo(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    

    const handleDelete = async (id) => {
      // event.preventDefault();
      try {
        const token = localStorage.getItem("token");
        id = localStorage.getItem("deleteid");
        const response = await fetch(`http://188.225.10.97:8080/api/v1/admin/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        localStorage.removeItem("deleteid")        
        console.log('Item deleted successfully');
        closedeleteModal();
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    };
    
  


  return (
    <Card className="h-full w-full mx-auto">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {todo.map(({ id, image, fullName, phone, role}, index) => {
            const isLast = index === todo.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={image}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {index + 1}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {fullName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {phone}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                  >
                    {role === "ROLE_ADMIN" ? "ADMIN" : role === "ROLE_MODERATOR" ? "MODERATOR" : role}
                  </Typography>
                </td>
                <td className={classes}>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <i onClick={() => openModalupdate(id)} class='cursor-pointer bx bx-edit text-[24px] text-blue-700'></i>
                    <i onClick={() => openModaldelete(id)} class='cursor-pointer bx bx-trash ml-[20px] text-[24px] text-red-600'></i>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/*============== MODAL UPDATE ============== */}
      <Modal
        isOpen={isModalOpenupdate}
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
        onRequestClose={closeupdateModal}
      >
        <div className="modal-content bg-white w-[528px]">
          <div className="modal-header pt-[40px] pb-[64px] px-[70px]">
            <div className="flex items-center justify-between">
              <h2 className="text-[24px] font-[700] font-custom">Ma'lumotni yangilash</h2>
              <button className="close-btn" onClick={closeupdateModal}><i class='bx bx-x text-[40px]'></i></button>
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
              <label htmlFor="sectionName" className="font-custom text-[17px] font-[700]">Parol</label>
                    <input
                      type="password"
                      className="input-name mt-[8px]"
                      id="sectionName"
                      name="nameL"
                      placeholder="•••••••"
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
              <button className="bg-[#25B679] text-white mt-[40px] w-[400px] px-[16px] py-[12px] font-custom text-[24px] rounded-[7px]" type="submit">
                Saqlash
              </button>
            </form>
          </div>
        </div>
      </Modal>

      {/*============== MODAL DELETE ============== */}
      <Modal
        isOpen={isModalOpendelete}
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
        onRequestClose={closedeleteModal}
      >
        <div className="modal-content bg-white w-[528px]">
          <div className="modal-header pt-[40px] pb-[15px] px-[70px]">
            <div className="flex items-center justify-between">
              <h2 className="text-[24px] font-[700] font-custom">Ma'lumotni o'chirish</h2>
              <button className="close-btn" onClick={closedeleteModal}><i class='bx bx-x text-[40px]'></i></button>
            </div>
            <form className="grid my-[24px]">
              <h1>Rostdan ham o'chirmoqchimisiz?</h1>
              <div className='flex items-center justify-end border gap-4'>
                <button onClick={handleDelete} className="cursor-pointer bg-red-500 text-white mt-[40px] w-[150px] px-[16px] py-[12px] font-custom text-[20px] rounded-[7px]" type="submit">
                  O'chirish
                </button>
                <button onClick={closedeleteModal} className="cursor-pointer bg-[#25B679] text-white mt-[40px] w-[150px] px-[16px] py-[12px] font-custom text-[20px] rounded-[7px]" type="submit">
                  Bekor qilish
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>  
    </Card>
    
  );
}