import ReactDOM from "react-dom/client"
var rupees = prompt("Enter the rupees");
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
      <h2 >Convert to Dollar is:-  {rupees * 83.33}</h2>
   </>
)