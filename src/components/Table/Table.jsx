import React from 'react';
import { Card, Typography } from "@material-tailwind/react";
import Pista from '../../assets/images/dala/pista.jpg';
 
const TABLE_HEAD = ["N", "Image", "Katalog nomi", "Катaлoг номи", "Status", "Action"];
 
const TABLE_ROWS = [
  {
    id: "1",
    image: Pista,
    catalogEng: "Pista",
    catalogRus: "Kunga boqar",
    status: "NOT_ACTIVE",
  },
  {
    id: "2",
    image: Pista,
    catalogEng: "Pista",
    catalogRus: "Kunga boqar",
    status: "ACTIVE",
  },
  {
    id: "3",
    image: Pista,
    catalogEng: "Pista",
    catalogRus: "Kunga boqar",
    status: "NOT_ACTIVE",
  },
  {
    id: "4",
    image: Pista,
    catalogEng: "Pista",
    catalogRus: "Kunga boqar",
    status: "ACTIVE",
  },
  {
    id: "5",
    image: Pista,
    catalogEng: "Pista",
    catalogRus: "Kunga boqar",
    status: "ACTIVE",
  },
];
 
export function DefaultTable() {
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
          {TABLE_ROWS.map(({ id, image, catalogEng, catalogRus, status}, index) => {
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
                  <img src={image} alt="" className="w-[80px]" />
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {catalogEng}
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
                    className={`${status === "ACTIVE" ? 'text-green-500' : 'text-red-500'}`}
                  >
                    {status === "ACTIVE" ? 'FAOL' : 'FAOL EMAS'}
                  </Typography>
                </td>
                <td className={classes}>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    `${}`{status}
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