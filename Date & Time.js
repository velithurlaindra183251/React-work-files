import ReactDOM from 'react-dom/client'
const obj=new Date()
const h=obj.getHours()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
     <h1> {Date()}</h1>
      <h2>{h}</h2>
   </>
)


