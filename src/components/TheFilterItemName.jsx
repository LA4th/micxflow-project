import React, {useState} from "react";

import Input from "./UserInputs.jsx";

export default function TheFilterItemName () {
  const singleInput = {
    id: "inptFilterItemName",
    type: "text",
    placeholder: "Search items..."
  };

  return (
    <div className="bg-white px-4 py-1.5 rounded-4xl flex flex-row items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-vintageBlack">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <Input key={singleInput.id} inptInfo={singleInput.id} inptType={singleInput.type} inptPlaceholder={singleInput.placeholder} inptStyle="p-2.5 w-full" />
    </div>
  );
};