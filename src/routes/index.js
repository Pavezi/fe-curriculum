import React from "react"

import Home from '../pages/home'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Steps from "../pages/steps";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step/*" element={<Steps />} />
        <Route exact path="/cadastro/:step" component={Steps} />

      </Routes>

    </BrowserRouter>
  
  )    
}

export default Router