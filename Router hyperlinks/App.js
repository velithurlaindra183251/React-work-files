import React from "react"
import About from './compounts/About'
import Contact from './compounts/Contact'
import Services from './compounts/Services'
import Style from './compounts/Style.css'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
export default function App() {
  return (
    <>

      <h1 className="ve">BowserRouter</h1>
      <BrowserRouter>
        <Link to="/" id="a">Home</Link>
        <Link to="/about" id="b"> About</Link>
        <Link to="/contact" id="c"> Contact</Link>
        <Link to="/services" id="d"> Services</Link>
        <Routes>
          <Route path='/about' element={<About />}> </Route>
          <Route path='/contact' element={<Contact />}> </Route>
          <Route path='/services' element={<Services />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}