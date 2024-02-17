import React, {useState, useEffect} from 'react';
import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["T/R", "F.I.O", "Telefon raqami", "Roli", "Action"];
 
export function TableTwo() {

  const [todo, setTodo] = useState([]);

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
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}