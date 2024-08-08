import ReactDOM from 'react-dom/client'
//Defining a Variable
let uid="Indra"
const year=2024
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
   <h2>Hello {uid}</h2>
   <h2>Hello {year}</h2>
   </>
)