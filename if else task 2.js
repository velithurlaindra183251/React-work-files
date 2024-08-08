import ReactDOM from "react-dom/client"

let m = new Date()
let d = m.getDay()
let indra
if (d == 1) {
   indra = "Today is Monday"
} else if (d == 2) {
   indra = "Today is Tuesday"
} else if (d == 3) {
   indra = " Today is Wendsday"
} else if (d == 4) {
   indra = " Today is Thursday"
}
else if (d == 5) {
   indra = "Today is Friday"
}
else if (d == 6) {
   indra = " Today is Saturday"
}
else {
   indra = " Today is Sunday"
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
      <h1>If else Task 2</h1>
      <h1>{indra}</h1>
   </>
)
