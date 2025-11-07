import react from 'react';

import Button from './UserButtons';
import Input from './UserInputs';

export default function TheUserInput () {
  /* INPUT STYLES VARIABLE */
  const inptStyle = "p-2.5 w-full bg-vintageWhite rounded-md";

  /* INPUT ITEM NAME VARIABLE */
  const inptItemName = "Item Name";
  const inptItemNameInfo = "inputItemName";
  const inptItemNameType = "text";
  const inptItemNamePlaceholder = "eg., Biogesic";
  
  /* INPUT PRICE VARIABLE */
  const inptPriceName = "Price";
  const inptPriceInfo = "inputPrice";
  const inptPriceType = "number";
  const inptPricePlaceholder = "eg., 4.50";

  /* INPUT QUANTITY VARIABLE */
  const inptQuantityName = "Quantity";
  const inptQuantityInfo = "inputQuantity";
  const inptQuantityType = "number";
  const inptQuantityPlaceholder = "eg., 20";

  /* BUTTON VARIABLES */
  const buttonName = "Add Item";
  const buttonStyle = "bg-vintageBlue w-full p-3 text-white font-bold rounded-md"

  return (
    <div className='bg-white p-3 rounded-xl flex flex-col gap-y-5 shadow-xl'>
      {/* ITEM NAME INPUT */}
      <Input 
      labelName={inptItemName} inptInfo={inptItemNameInfo} inptType={inptItemNameType} inptPlaceholder={inptItemNamePlaceholder} inptStyle={inptStyle} 
      />
      {/* PRICE AND QUANTITY CONTAINER */}
      <div className='flex flex-row gap-x-5'>
        {/* PRICE INPUT */}
        <Input 
        labelName={inptPriceName} inptInfo={inptPriceInfo} inptType={inptPriceType} inptPlaceholder={inptPricePlaceholder} inptStyle={inptStyle} 
        />
        {/* QUANTITY INPUT */}
        <Input 
        labelName={inptQuantityName} inptInfo={inptQuantityInfo} inptType={inptQuantityType} inptPlaceholder={inptQuantityPlaceholder} inptStyle={inptStyle} 
        />
      </div>
      {/* ADD BUTTON */}
      <Button btnName={buttonName} btnStyle={buttonStyle} />
    </div>
  );
}