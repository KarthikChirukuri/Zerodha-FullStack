import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h3>Support portal</h3>
                <a href='' style={{color:"white"}}>Track Tickets</a>
            </div>

            <div className='row p-5 m-3'>
                <div className='col-6 p-5'>
                    <h1>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. How do I activate F&O.'></input><br></br>
                    <a href='#'>Track account opening</a>
                    <a href='#'>Track segment activation</a>
                    <a href='#'>Intraday margins</a>
                    <a href='#'>Kite user manual </a>
                </div>
                <div className='col-6 p-5'>
                    <h1>Featured</h1>
                    <ol>
                        <li><a href='#'>Current Takeovers</a></li>
                        <li><a href='#'>Latest intraday leverages</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;