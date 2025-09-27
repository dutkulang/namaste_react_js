import './App.css'
import Header from "./components/Header"
import { ItemCard } from './components/ItemCard'
function App() {

  return (
    <>
        <Header />
        <section className='item-container'>
          <ItemCard 
            name="Benz"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg"
            />
          <ItemCard 
          name="BMW 2016"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://images.pexels.com/photos/13513971/pexels-photo-13513971.jpeg"
          />

          <ItemCard 
            name="Benz"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg"
            />
          <ItemCard 
          name="BMW 2016"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://images.pexels.com/photos/13513971/pexels-photo-13513971.jpeg"
          />

          <ItemCard 
            name="Benz"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg"
            />
          <ItemCard 
          name="BMW 2016"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://images.pexels.com/photos/13513971/pexels-photo-13513971.jpeg"
          />

          
          
        </section>
    </>
  )
}

export default App
