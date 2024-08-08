import React, { useState } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const state1 = (e) => {
    setSearch(e.target.value);
  };


  fetch('https://randomuser.me/api/?results=21')
    .then(res => res.json())
    .then(data => {
      setUsers(data.results);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });


  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='row'>
            {users
              .filter((user) => {

                return user.name.first.toLowerCase().includes(search.toLowerCase());
              })
              .map((user, index) => (
                <div key={index} className='col-md-4 mb-3'>
                  <div className="card">
                    <img src={user.picture.large} className="card-img-top" alt={`${user.name.first} ${user.name.last}`} />
                    <div className="card-body">
                      <h5 className="card-title">{`${user.name.first} ${user.name.last}`}</h5>
                      <a href="#" className="btn btn-primary">View Profile</a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}