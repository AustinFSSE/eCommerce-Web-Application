import { useState } from 'react'
import Products from "./components/Products.jsx";

import './App.css'


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={"flex items-center justify-center h-screen bg-grey-800 text-white text-2xl font-bold"}>
        <Products/>
    </div>
  )
}

export default App
