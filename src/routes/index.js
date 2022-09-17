import React from "react"

import Home from '../pages/home'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Form from "../pages/form";
import CSSForm from "../pages/cssform";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form/" element={<Form />} />
        <Route path="/cssform/" element={<CSSForm />} />

      </Routes>

    </BrowserRouter>
  
  )    
}

export default Router