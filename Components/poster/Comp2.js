import React from 'react'
import pic from './images/gym1.jpg'
const i = {
    width: '400px',
    height: '530px'
}
export default function Comp2() {
    return (
        <>
            <div className='row pt-2'>
                <div className='col-md-8'>
                    <h1 style={{ paddingTop: '80px' }}>WORKOUTS MADE</h1>
                    <h1><span style={{ color: 'green' }}> EXCLUSIVE</span> FOR YOU!</h1>
                    <p style={{ paddingTop: '25px' }}> We create exclusive and unique workouts for you.<b>Invest in your body and get much more performance </b>and quality of life.Gold's Gym is Gym India carries the legacy ahead.</p>
                    <button className='text-light m-3 p-2' style={{ borderRadius: '7%', backgroundColor: 'green', width: '130px' }}>Start now</button>
                </div>
                <div className='col-md-4'>
                    <img src={pic} alt='' style={i} />
                </div>
                <div className='row' />
                <div className='col-md-12 text-center'>
                    <h2>Send us a Message<b>@treine.me</b></h2>
                </div>
            </div>
        </>
    )
}
