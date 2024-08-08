import ReactDOM from "react-dom/client"
import Comp1 from './Comp1'
import Comp2 from './Comp2'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <h1>Function  Components</h1>
    <Comp1 />
    <Comp1 />
    <Comp1 />
    <Comp2 />
    <Comp2 />
  </>
)
