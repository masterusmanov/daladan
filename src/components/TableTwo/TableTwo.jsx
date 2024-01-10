import React from 'react';
import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["T/R", "F.I.O", "Telefon raqami", "Roli"];
 
const TABLE_ROWS = [
  {
    id: "1",
    nameEng: "Elbek ",
    phone: "+998943320016",
    status: "Admin",
  },
  {
    id: "2",
    nameEng: "Elbek",
    phone: "+998943320016",
    status: "User",
  },
  {
    id: "3",
    nameEng: "Elbek",
    phone: "+998943320016",
    status: "Admin",
  },
  {
    id: "4",
    nameEng: "Elbek",
    phone: "+998943320016",
    status: "User",
  },
  {
    id: "5",
    nameEng: "Elbek",
    phone: "+998943320016",
    status: "User",
  },
];
 
export function TableTwo() {
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
          {TABLE_ROWS.map(({ id, image, nameEng, phone, status}, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={image}>
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
                    {nameEng}
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
                    {status}
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