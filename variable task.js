import ReactDOM from 'react-dom/client'
//Defining a Variable
var name = prompt('Enter Your Name')
var place = prompt('Enter Your Place')
var email = prompt('Enter Your Email ID')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
      <table border={2} align='center' style={{color:'orange'}}>
         <tr>
            <td>Name</td>
            <td>Place</td>
            <td>Email</td>
         </tr>
         <tr>
            <td>{name}</td>
            <td>{place}</td>
            <td>{email}</td>
         </tr>
      </table>
   </>
)