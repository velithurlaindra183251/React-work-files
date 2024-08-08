import ReactDOM from "react-dom/client"
let obj = new Date()
let h = obj.getHours()
let style = {}
let message
if (h <= 12) {
   message = "Good Morning"
   style.color = 'green'
} else if (h >= 12 && h <= 17) {
   message = "Good Afternoon"
   style.color = 'red'
} else {
   message = " Good Evening"
   style.color = 'blue'
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
      <h1>date Task</h1>

      <h1 style={style}>{message}</h1>
   </>
)