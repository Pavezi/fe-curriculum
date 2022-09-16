import React from "react"

import Home from '../pages/home'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Form from "../pages/form";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form/" element={<Form />} />

      </Routes>

    </BrowserRouter>
  
  )    
}

export default Router