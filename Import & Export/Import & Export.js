import ReactDOM from "react-dom/client"
import uid, { course, duration, address, demo } from "./mod"
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
    <h1>Import and Export </h1>
      <h1>{uid}</h1>
      <h1>{course}</h1>
      <h1>{duration}</h1>
      <h1>{address}</h1>
      <h1>{demo()}</h1>
   </>
)