import React  from 'react';

export default function LoadingSkelliton () {
  const skellitonLoop = () => {
    const number = 3;

    return Array.from({length: number}).map((_, index) => {
      return (<li key={index} className='w-full h-18 bg-gray-500 animate-pulse rounded-xl'></li>);
    });
  };

  return (
    <ul className='flex flex-col gap-y-5'>
      {skellitonLoop()}
    </ul>
  );
};