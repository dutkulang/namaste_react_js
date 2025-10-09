import './App.css'
import Header from "./components/Header"
import { items }  from './utils/mockdata' 
import { ItemCard } from './components/ItemCard'
import { useState } from 'react'
import { Outlet } from 'react-router'
function App() {
  const [ListOfItems, setListOfItems] = useState(items)
  return (
    <>
    <Header/>
      <Outlet />
    </>
  )
}

export default App
