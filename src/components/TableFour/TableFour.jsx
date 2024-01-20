import React from 'react';
import { Card, Typography } from "@material-tailwind/react";
import Pista from '../../assets/images/dala/pista.jpg';
 
const TABLE_HEAD = ["T/R", "Bo'lim nomi", "Бўлим номи", "Kategoriya nomi", "Status", "Action"];
 
const TABLE_ROWS = [
  {
    id: "1",
    dep_nameEng: "Poliz ekinlari",
    dep_nameRus: "Poliz ekinlari",
    catalogRus: "Poliz ekinlari",
    status: "NOT_ACTIVE",
  },
  {
    id: "2",
    dep_nameEng: "Boshoqli ekinlar",
    dep_nameRus: "Boshoqli ekinlar",
    catalogRus: "Boshoqli ekinlar",
    status: "ACTIVE",
  },
  {
    id: "3",
    dep_nameEng: "Sabzavotlar",
    dep_nameRus: "Sabzavotlar",
    catalogRus: "Sabzavotlar",
    status: "NOT_ACTIVE",
  },
  {
    id: "4",
    dep_nameEng: "Mevalar",
    dep_nameRus: "Mevalar",
    catalogRus: "Mevalar",
    status: "ACTIVE",
  },
  {
    id: "5",
    dep_nameEng: "Dukkaklik ekinlar",
    dep_nameRus: "Dukkaklik ekinlar",
    catalogRus: "Dukkaklik ekinlar",
    status: "ACTIVE",
  },
];
 
export function TableFour() {
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
          {TABLE_ROWS.map(({ id, dep_nameEng, dep_nameRus, catalogRus, status}, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={dep_nameEng}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {id}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {dep_nameEng}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {dep_nameRus}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {catalogRus}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className={`${status === "ACTIVE" ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}`}
                  >
                    {status === "ACTIVE" ? 'faol' : 'faol emas'}
                  </Typography>
                </td>
                <td className={classes}>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <i class='bx bx-edit text-[24px] text-blue-700'></i>
                    <i class='bx bx-trash ml-[20px] text-[24px] text-red-600'></i>
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