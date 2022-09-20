import React from "react"

import Home from '../pages/home'
import Steps from "../pages/curriculum";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step/*" element={<Steps />} />

      </Routes>

    </BrowserRouter>
  
  )    
}

export default Router