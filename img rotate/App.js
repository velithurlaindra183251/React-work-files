import React, { useState } from "react";
import './st.css'
import pic from './images/arrow.jpg'
const App = () =>{
  const [rotate, setRotate]=useState()
  const update = () => {
    setRotate(!rotate)
  }
 return (
    <>
      <img src={pic} alt="" style={{transform:rotate ? "rotate(0deg)" : "rotate(180deg)"}}/>
      <br/> <br/> <br/>
      <button className="button" onClick={update}>Rotate</button>
    </>
  );
};
 export default App;
 
