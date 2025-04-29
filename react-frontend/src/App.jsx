import { useState } from 'react'
import {FaBeer} from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={"flex items-center justify-center h-screen bg-grey-800 text-white text-2xl font-bold"}>
        <p>Welcome to react <FaBeer/></p>
    </div>
  )
}

export default App
