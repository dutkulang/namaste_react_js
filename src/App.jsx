import './App.css'
import Header from "./components/Header"
import { items }  from './utils/mockdata' 
import { ItemCard } from './components/ItemCard'
import { useState } from 'react'
function App() {
  const [ListOfItems, setListOfItems] = useState(items)
  return (
    <>
        <Header />
        <button type="button" style={{margin:"0 20px", padding:"0px 10px"}}
        onClick={()=>{
          setListOfItems(items)
        }}
        >all</button>
        <button type="button"
        onClick={()=>{
          const filtered = ListOfItems.filter(item =>  item.price >= 350)
          console.log(filtered)
          setListOfItems(filtered)
        }}
        >Below $300</button>
        <section className='item-container'>
          
        {ListOfItems.map(item => <ItemCard key={item.id} name={item.name} description={item.description} price={item.price} link={item.link} />)}          
          
        </section>
    </>
  )
}

export default App
