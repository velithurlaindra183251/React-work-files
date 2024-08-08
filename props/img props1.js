import ReactDOM from "react-dom/client"
import App4 from "./App4"
const p="https://cdn1.smartprix.com/rx-ibsJ2hNrF-w1200-h1200/bsJ2hNrF.jpg"
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <App4 pic={p} Price="120000" />
  </>
)
