import ReactDOM from "react-dom/client"
import "./bmi.css"
let name = prompt("Enter Your Name")
let age = prompt("Enter Your Age")
let weight = prompt("Enter Your  Weight")
let height = prompt("Enter Your Height")

let h1 = height * height
let a
let bmi = weight / h1
if (bmi <= 18.5) {
   a = "Underweight"
}
else if (bmi >= 18.5 && bmi <= 25) {
   a = "Normal"
}
else if (bmi >= 25 && bmi <= 30) {
   a = "Overweight"
}
else {
   a = "Obesity"
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
      {/* <h1>{a}</h1> */}
      <h1 align='center'>BMI <u>( BODY MASK INDEX )</u></h1>
      <table border={2} align='center'>
         <tr className="i">
               <td>Name</td>
               <td>Age</td>
               <td>Weight</td>
               <td>Height</td>
               <td>Value</td>
            </tr>

         <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{weight}</td>
            <td>{height}</td>
            <td>{a}</td>
         </tr>
      </table>
   </>
)


// import ReactDOM from "react-dom/client"
// var rupees = prompt("Enter the rupees");
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//    <>
//       <h2 >Convert to Dollar is:-  {rupees * 83.33}</h2>
//    </>
// )