import React, {useState} from 'react';

import Button from './UserButtons';
import Input from './UserInputs';

export default function TheUserInput () {
  /* ITEM NAME INFO */
  const singleInput = {
    label: "Item Name",
    id: "inptItemName",
    type: "text",
    placeholder: "eg., Biogesic"
  };

  /* PRICE AND QUANTITY INFO */
  const groupInput = [
    {
      label: "Price",
      id: "inptPrice",
      type: "number",
      placeholder: "eg., 4.50"
    },
    {
      label: "Quantity",
      id: "inptQuantity",
      type: "number",
      placeholder: "eg., 20"
    }
  ];

  /* const [values, setValues] = useState({
    inptItemName: "",
    inptPrice: "",
    inptQuantity: ""
  }); */

  return (
    <div className='bg-white p-3 rounded-xl flex flex-col gap-y-5 shadow-xl'>
      {/* ITEM NAME INPUT */}
      <Input
        key={singleInput.id}
        labelName={singleInput.label}
        inptInfo={singleInput.id}
        inptType={singleInput.type}
        inptPlaceholder={singleInput.placeholder}
        inptStyle="p-2.5 w-full bg-vintageWhite rounded-md"
      />
      {/* PRICE AND QUANTITY CONTAINER */}
      <div className='flex flex-row justify-between gap-x-7'>
        {groupInput.map((data) => (
          <Input
            key={data.id}
            labelName={data.label}
            inptInfo={data.id}
            inptType={data.type}
            inptPlaceholder={data.placeholder}
            inptStyle="p-2.5 w-full bg-vintageWhite rounded-md"
          />
        ))}
      </div>
      {/* ADD BUTTON */}
      <Button btnName="Add Item" btnStyle="bg-vintageBlue w-full p-3 text-white font-bold rounded-md" />
    </div>
  );
};