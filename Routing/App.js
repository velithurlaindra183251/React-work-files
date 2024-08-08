import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
export
  default function App() {
  return (
    <>

      <h1>BowserRouter</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/about' element={<h1>About as</h1>}> </Route>
          <Route path='/main page' element={<h1>main page</h1>}> </Route>
          <Route path='/last page' element={<h1>last page</h1>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}