import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CoffeeCart from './components/CoffeeCart'



function App() {
  const loadCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadCoffees)

  return (
    <div className='m-20'>

      <h1 className='text-3xl font-bold text-center my-4'>Hot hot cold coffee : {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-5'>
        {
          coffees.map(coffee => <CoffeeCart
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCart>)
        }
      </div>
    </div>
  )
}

export default App
