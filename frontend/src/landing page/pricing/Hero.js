import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-bottom text-center' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                <h1>Pricing</h1>
                <p>Free equity investments and flat $20 traday and F&O trades</p>
            </div>
            <div className='row p-5' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                <div className='col-4 p-5 text-center'>
                    <img src='media/images/pricingEquity.svg'></img>
                    <h1 style={{fontSize:"25px"}}>Free equity delivery</h1>
                    <p className='text-muted' style={{fontSize:"16px"}}>All equity delivery investments (NSE, BSE),<br></br> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5 text-center'>
                    <img src='media/images/intradayTrades.svg'></img>
                    <h1 style={{fontSize:"25px"}}>Intraday and F&O trades</h1>
                    <p className='text-muted' style={{fontSize:"16px"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5 text-center'>
                    <img src='media/images/pricingEquity.svg'></img>
                    <h1 style={{fontSize:"25px"}}>Free direct MF</h1>
                    <p className='text-muted' style={{fontSize:"16px"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;