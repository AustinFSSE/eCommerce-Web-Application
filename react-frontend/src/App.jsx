import { useState } from 'react'
import Products from "./components/Products/Products.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css'
import Home from "./components/Home/Home.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
        <Routes>
            <Route path="/" element={ <Home />}  />
            <Route path="/products" element={ <Products />}  />
        </Routes>
    </Router>
  )
}

export default App
