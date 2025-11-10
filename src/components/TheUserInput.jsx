import React, {useState} from 'react';

import Button from './UserButtons.jsx';
import Input from './UserInputs.jsx';

export default function TheUserInput ({itemList, setItemList}) {
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

  const [values, setValues] = useState({
    inptItemName: "",
    inptPrice: "",
    inptQuantity: ""
  });

  const handleChange = (e) => {
    const {id, value} = e.target;
    setValues(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleAdd = () => {
    if(
      values.inptItemName.trim() === "" ||
      values.inptPrice.trim() === "" ||
      values.inptQuantity.trim() === ""
    ) return;

    setItemList(prev => [
      ...prev,
      {
        id: Date.now(),
        itemName: values.inptItemName,
        price: parseFloat(values.inptPrice),
        quantity: parseInt(values.inptQuantity)
      }
    ]);

    setValues(
      {
        inptItemName: "",
        inptPrice: "",
        inptQuantity: ""
      }
    );
  };

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
        onChange={handleChange}
        value={values.inptItemName}
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
            onChange={handleChange}
            value={values[data.id]}
          />
        ))}
      </div>
      {/* ADD BUTTON */}
      <Button btnClick={handleAdd} btnName="Add Item" btnStyle="bg-vintageBlue w-full p-3 text-white font-bold rounded-md" />
    </div>
  );
};