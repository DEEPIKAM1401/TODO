import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import {useState} from 'react';


function App() {
  const [items, setItems] = useState(
    [
    {
      id:1,
      checked:true,
      item:"Practice coding"
    },
    {
      id:2,
      checked:false,
      item:"Play coding"
    },
    {
      id:3,
      checked:false,
      item:"Read coding"
    }
  ]
  )

  const handleCheck = (id)=>{
    const listItems = items.map((item)=>
    item.id===id ? {...item, checked:!item.checked}:item)
    setItems(listItems)
  }

  const handleDelete = (id)=>{
    const listItems = items.filter((item)=> item.id !== id)
    setItems(listItems)
  }
  return (
    <div className='App'>
        <Header title="Deepika Coder"/>
        <Content 
          items = {items}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />
        <Footer 
         length= {items.length}
        />
    </div>
  );
}

export default App;
 