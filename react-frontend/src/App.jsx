import React, { useState } from 'react'
import Products from "./components/Products/Products.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css'
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/shared/Navbar.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import {Toaster} from "react-hot-toast";
import Cart from "./components/Cart/Cart.jsx";


function App() {
  return (
      <React.Fragment>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home />}              />
                <Route path="/products" element={ <Products />}  />
                <Route path={"/about"} element={ <About />}      />
                <Route path={"/contact"} element={ <Contact />}  />
                <Route path={"/cart"} element={ <Cart />}        />
            </Routes>
        </Router>
        <Toaster position="bottom-center" />
      </React.Fragment>
  )
}

export default App
