import React from 'react'
import Comp1 from './Comp1'
import pic from './images/rose.jpg'
export default function App() {
  const uid="Rose flower"
  const obj = {
    image: <img src={pic} alt='' />
  }
  return (
    <>

      <Comp1 data={uid}  i={obj.image} />
 
    </>
  )
}
