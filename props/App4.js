import React from 'react'
function App4(props) {

    return (
        <> 
            <div className='card'>
                <img src={props.pic} className='card-img-top' alt='' />
                <div className='card-body'>
                    <p className='card-text'> price={props.price}</p>
                </div>
            </div>
        </>
    )
}
export default App4