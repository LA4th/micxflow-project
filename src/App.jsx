import { useState } from 'react';

import TheHeader from './components/TheHeader.jsx';
import TheFooter from './components/TheFooter.jsx';
import TheUserInput from './components/TheUserInput.jsx';
import TheFilterItemName from './components/TheFilterItemName.jsx';
import TheItemList from './components/TheItemList.jsx';
import items from './data/DataItems.js';

function App() {
  const [item, setItem] = useState(items);

  return (
    <div className='flex flex-col min-h-screen'>
      <TheHeader />
      <div className='bg-vintageWhite p-3 w-full max-w-full min-h-screen flex flex-col gap-y-5'>
        <TheUserInput itemList={item} setItemList={setItem} />
        <TheFilterItemName />
        <div className='flex-1 overflow-y-scroll'>
          <TheItemList itemList={item} />
        </div>
      </div>
      <TheFooter />
    </div>
  )
}

export default App
