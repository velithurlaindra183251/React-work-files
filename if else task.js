import ReactDOM from 'react-dom/client'
let a=prompt("Enter your marks")
let marks
if (a < 35) {
   marks = "You Faild"
} else{
   marks = "You Passed"
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
      <h1>If else</h1>
      <h2>{marks}</h2>
   </>
)