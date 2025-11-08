import { useState } from 'react';

import TheHeader from './components/TheHeader.jsx';
import TheFooter from './components/TheFooter.jsx';
import TheUserInput from './components/TheUserInput.jsx';
import TheFilterItemName from './components/TheFilterItemName.jsx';
import TheItemList from './components/TheItemList.jsx';

function App() {

  return (
    <>
      <TheHeader />
      <div className='bg-vintageWhite p-3 w-full max-w-full h-screen flex flex-col gap-y-5'>
        <TheUserInput />
        <TheFilterItemName />
        <TheItemList />
      </div>
      <TheFooter />
    </>
  )
}

export default App
