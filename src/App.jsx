import { useState } from 'react';

import TheHeader from './components/TheHeader.jsx';
import TheFooter from './components/TheFooter.jsx';
import TheUserInput from './components/TheUserInput.jsx';

function App() {

  return (
    <>
      <TheHeader />
      <div className='bg-vintageWhite p-3 w-full max-w-full h-screen flex flex-col'>
        <TheUserInput />
      </div>
      <TheFooter />
    </>
  )
}

export default App
