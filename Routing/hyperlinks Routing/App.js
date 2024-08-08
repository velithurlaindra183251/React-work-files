import React from "react"
import About from './compounts/About'
import Contact from './compounts/Contact'
import Services from './compounts/Services'
import { BrowserRouter, Route, Routes } from "react-router-dom"
export default function App() {
  return (
    <>

      <h1>BowserRouter</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About/>}> </Route>
          <Route path='/contact' element={<Contact/>}> </Route>
          <Route path='/services' element={<Services/>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}