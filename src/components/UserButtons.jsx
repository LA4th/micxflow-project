import react from 'react';

export default function Button ({btnName, btnStyle, btnIcon, btnClick}) {
  return (
    <button type="button" className={btnStyle} onClick={btnClick}>{btnIcon}{btnName}</button>
  );
};