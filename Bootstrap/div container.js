import React from "react";
import ReactDOM from 'react-dom/client';
import pic from './images/dogs.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
      <div className="container-fluid">
         <div class="row">
            <div className="bg-secondary col-md-6">
      
               </div>

            <div className="bg-warning col-md-6">
               <p>  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p></div>  </div>

         <div class="row">
            <div className="bg-danger col-md-4">
               <h2> HEADING </h2>
               <p>  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            </div>

            <div className="bg-success col-md-4">
               <h2> HEADING </h2>
               <p>  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            </div>

            <div className="bg-secondary col-md-4">
               <img src={pic} alt="" className="img-fluid" />  </div> </div>

         <div class="row">
            <div className="footer col-md-12 bg-warning">
               <h4> Copy Rights@2024 </h4>
            </div> 
            </div>

      </div>
   </>
)
