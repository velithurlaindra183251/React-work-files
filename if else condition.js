import ReactDOM from 'react-dom/client'
let message
if (4 < 5) {
   message = "True 4 is less then 5"
} else {
   message = "False 4 is not less than 5"
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
      <h1>If else</h1>
      <h2>{message}</h2>
   </>
)