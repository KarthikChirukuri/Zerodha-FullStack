import React from 'react';

function Holdings() {
    return (
        <>
            <div className='container mt-5'>

                {/* Heading */}

                <h3>Holdings (13)</h3>

                {/* Table */}

                <table className='table mt-4'>

                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg. cost</th>
                            <th>LTP</th>
                            <th>Cur. val</th>
                            <th>P&L</th>
                            <th>Net chg.</th>
                            <th>Day chg.</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>SBIN</td>
                            <td>50</td>
                            <td>500</td>
                            <td>560</td>
                            <td>28,000</td>
                            <td style={{color:"green"}}>3,000</td>
                            <td style={{color:"green"}}>+5.20%</td>
                            <td style={{color:"green"}}>+2.10%</td>
                        </tr>

                        <tr>
                            <td>TCS</td>
                            <td>10</td>
                            <td>3500</td>
                            <td>3700</td>
                            <td>37,000</td>
                            <td style={{color:"green"}}>2,000</td>
                            <td style={{color:"green"}}>+4.50%</td>
                            <td style={{color:"red"}}>-1.10%</td>
                        </tr>

                    </tbody>

                </table>

                {/* Bottom Summary */}

                <div className='row mt-5 text-center'>

                    <div className='col'>
                        <h2>29,875</h2>
                        <p className='text-muted'>Total Investment</p>
                    </div>

                    <div className='col'>
                        <h2>31,428</h2>
                        <p className='text-muted'>Current Value</p>
                    </div>

                    <div className='col'>
                        <h2 style={{color:"green"}}>1,553 (+5.20%)</h2>
                        <p className='text-muted'>P&L</p>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Holdings;