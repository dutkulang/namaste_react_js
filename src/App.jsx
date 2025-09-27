import './App.css'
import Header from "./components/Header"
import { ItemCard } from './components/ItemCard'
function App() {

  return (
    <>
        <Header />
        <section className='item-container'>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </section>
    </>
  )
}

export default App
