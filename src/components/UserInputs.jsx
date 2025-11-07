import react from 'react';

export default function Input ({labelName, inptInfo, inptType, inptPlaceholder, inptStyle}) {
  
  return (
    <div className='flex flex-col'>
      <label htmlFor={inptInfo} className='text-[15px] text-vintageBlack'>{labelName}</label>
      <input type={inptType} name={inptInfo} id={inptInfo} placeholder={inptPlaceholder} className={inptStyle} />
    </div>
  );
};