import React from 'react'
import Nav from './Nav'
import Carousel from './Carousel'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Footer1 from './Footer1'
function App1() {
    return (
        <div className="container">

            <div className='row'>
                <div className='col-md-12 ' >
                    <Nav />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12 ' >
                    <Carousel />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4  ' >
                    <Card1 />
                </div>

                <div className='col-md-4  ' >
                    <Card2 />
                </div>
                <div className='col-md-4  ' >
                    <Card3 />
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 bg-dark text-light text-center ' >
                            <Footer1 />
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}
export default App1
