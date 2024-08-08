import React from 'react';
import { useState } from 'react';
function App() {
    const [obj, setobj] = useState({
        name: "Indra",
        place: 'kadapa',
        age: 23
    });

    const handler = () => {
        setobj({

            name: "sai",
            place: "Pulivendula",
            age: 23
        });
    };

    return (
        <>
            <h3>click event</h3>
            <table border={2}>
                <tr>
                    <td>Name</td>
                    <td>Place</td>
                    <td>Age</td>
                </tr>

                <tr>
                    <td>{obj.name}</td>
                    <td>{obj.place}</td>
                    <td>{obj.age}</td>
                </tr>

            </table>
            <button onClick={handler}>click me</button>
        </>
    );
}
export default App;
