import { useState } from 'react';

import TheHeader from './components/TheHeader.jsx';
import TheFooter from './components/TheFooter.jsx';
import TheUserInput from './components/TheUserInput.jsx';
import TheUserInputEdit from './components/TheUserInputEdit.jsx';
import TheFilterItemName from './components/TheFilterItemName.jsx';
import TheItemList from './components/TheItemList.jsx';
import items from './data/DataItems.js';

function App() {
  const [item, setItem] = useState(items);
  const [search, setSearch] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  
  return (
    <div className="flex flex-col min-h-screen">
      <TheHeader />

      <div className="flex-1 overflow-y-auto bg-vintageWhite p-3 flex flex-col gap-y-5">
        {editingItem ? (
          <TheUserInputEdit 
            item={editingItem} 
            setItemList={setItem} 
            cancelEdit={() => setEditingItem(null)} 
          />
        ) : (
          <TheUserInput itemList={item} setItemList={setItem} />
        )}
        <TheFilterItemName search={search} setSearch={setSearch} />
        <TheItemList itemList={item} setItemList={setItem} search={search} setEditingItem={setEditingItem} />
      </div>

      <TheFooter itemList={item} />
    </div>
  )
}

export default App
