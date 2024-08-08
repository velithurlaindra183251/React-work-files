import ReactDOM from 'react-dom/client'
//Defining a Variable
let uid="Indra"
const dob=2024
let students=['Indra','Vinod','Sateesh','Ramesh']
let person={
   fname:'Indra',
   lname:'Velithurla',
   age:22,
   place:'Pulivendula'
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
   <h2>Hello {uid}</h2>
   <h2>Year {dob}</h2>
   <h2>Students Names:- {students}</h2>
   <h2>Student Name:-  {students[3]}</h2>
   <h2>Full Name:- {person.fname+"   "+person.lname}</h2>
   <h2> Age:- {person.age}</h2>
   <h2> Place:- {person.place}</h2>
   </>
)