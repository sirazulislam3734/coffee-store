
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {
  
  const coffees = useLoaderData()
  const [filtered, setFiltered] = useState(coffees)
  return (
    <div className='m-20 border'>
      
      <h1 className='text-5xl text-center my-16 font-bold'>Hot Hot Cold Coffee : {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-5'>
        {
          filtered.map(coffee => 
          <CoffeeCard 
          key={coffee._id} 
          coffee={coffee}
          filtered={filtered}
          setFiltered={setFiltered}></CoffeeCard>)
        }
      </div>
      
    </div>
  )
}

export default App
