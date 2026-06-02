import React from 'react';

function universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center mt-5'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/smallcaseLogo.png'></img>
                    <p className='text-muted'>Thematic investment plan</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/streakLogo.png' style={{width:"40%"}}></img>
                    <p className='text-muted'>Algpo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/sensibullLogo.svg' style={{width:"60%"}}></img>
                    <p className='text-muted'>Options trading platform</p>
                </div>
            </div>
            <div className='row text-center mt-5'>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/ZerodhaFundhouse.png' style={{width:"40%"}}></img>
                    <p className='text-muted'>Asset management</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/goldenpiLogo.png' style={{width:"40%"}}></img>
                    <p className='text-muted'>Bonds Trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/dittoLogo.png' style={{width:"40%"}}></img>
                    <p className='text-muted'>Insurance</p>
                </div>

                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default universe;