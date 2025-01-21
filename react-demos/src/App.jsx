import React from 'react'
import Person1 from './Components/Person1'
import Product1 from './Components/Product1'


const App = () => {
  return (
    <div>
      <Person1 name="Gideon" Age={32} />
      <Product1 name="Iphone" price={3300} />
    </div>
  )
}

export default App

