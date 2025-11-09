import React, { useState, useEffect } from "react";

import Button from "./UserButtons.jsx";
import LoadingSkelliton from "./LoadingSkelliton.jsx";

export default function TheItemList ({itemList}) {
  /* BUTTON EDIT ICON */
  const btnEdit = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-vintageBlack">
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
    </svg>
  );
  /* BUTTON DELETE ICON */
  const btnDelete = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-red-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  const itemCheck = () => {
    if(loading) {
      return (
      <LoadingSkelliton />
      );
    }

    if(!itemList || itemList.length === 0) {
      return (
        <p className="text-center text-vintageGray p-3.5">No item!</p>
      );
    }

    return(
      itemList.map((item) => {
        const total = item.price * item.quantity;

        return (
          <li key={item.id} className="bg-white w-full p-3 rounded-xl flex flex-row justify-start gap-x-5 shadow-md">
            <div className="w-1/2 truncate flex flex-col items-start">
              {/* ITEM NAME */}
              <h1 className="truncate w-full text-2xl text-vintageBlack">{item.itemName}</h1>
              {/* PRICE & QUANTITY */}
              <p className="w-full truncate text-[15px] text-vintageGray">₱{item.price} x {item.quantity}</p>
            </div>
            {/* PRICE * QUANTITY = TOTAL */}
            <h1 className="w-1/5 truncate font-bold text-vintageBlack text-2xl flex items-center justify-between">₱{total}</h1>
            <div className="flex flex-row items-center gap-x-4">
              {/* EDIT BUTTON */}
              <Button btnIcon={btnEdit} />
              {/* DELETE BUTTON */}
              <Button btnIcon={btnDelete} />
            </div>
          </li>
        );
      })
    );
  };

  return (
    <ul className="w-full max-w-full flex flex-col gap-y-5">
      {itemCheck()}
    </ul>
  );
};