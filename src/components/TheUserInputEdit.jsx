import React, { useState, useEffect } from 'react';
import Button from './UserButtons.jsx';
import Input from './UserInputs.jsx';

export default function TheItemEdit({ item, setItemList, cancelEdit }) {
  const [values, setValues] = useState({
    inptItemName: "",
    inptPrice: "",
    inptQuantity: ""
  });

  useEffect(() => {
    if(item) {
      setValues({
        inptItemName: item.itemName,
        inptPrice: item.price,
        inptQuantity: item.quantity
      });
    }
  }, [item]);

  const handleSave = () => {
    setItemList(prev => prev.map(i => 
      i.id === item.id 
        ? { ...i, itemName: values.inptItemName, price: parseFloat(values.inptPrice), quantity: parseInt(values.inptQuantity) }
        : i
    ));
    cancelEdit(); // exit edit mode
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className='bg-white p-3 rounded-xl flex flex-col gap-y-5 shadow-xl'>
      <Input
        labelName="Item Name"
        inptInfo="inptItemName"
        inptType="text"
        inptPlaceholder="Item Name"
        value={values.inptItemName}
        onChange={handleChange}
        inptStyle="p-2.5 w-full bg-vintageWhite rounded-md"
      />
      <div className='flex flex-row justify-between gap-x-7'>
        <Input
          labelName="Price"
          inptInfo="inptPrice"
          inptType="number"
          inptPlaceholder="Price"
          value={values.inptPrice}
          onChange={handleChange}
          inptStyle="p-2.5 w-full bg-vintageWhite rounded-md"
        />
        <Input
          labelName="Quantity"
          inptInfo="inptQuantity"
          inptType="number"
          inptPlaceholder="Quantity"
          value={values.inptQuantity}
          onChange={handleChange}
          inptStyle="p-2.5 w-full bg-vintageWhite rounded-md"
        />
      </div>
      <div className='flex gap-3'>
        <Button btnClick={handleSave} btnName="Save" btnStyle="bg-green-500 w-full p-3 text-white font-bold rounded-md" />
        <Button btnClick={cancelEdit} btnName="Cancel" btnStyle="bg-gray-400 w-full p-3 text-white font-bold rounded-md" />
      </div>
    </div>
  );
}
