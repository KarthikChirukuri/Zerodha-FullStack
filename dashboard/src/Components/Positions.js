import React from 'react';

function Positions() {

    const positions = [
        {
            product: "CNC",
            instrument: "SBIN",
            qty: 50,
            avg: 500,
            ltp: 560,
            pnl: 3000,
            chg: "+5.20%"
        },

        {
            product: "MIS",
            instrument: "TCS",
            qty: 10,
            avg: 3500,
            ltp: 3700,
            pnl: -1000,
            chg: "-2.10%"
        }
    ];

    return (
        <>
            <div className='container mt-5'>

                {/* Heading */}

                <h3>Positions (2)</h3>

                {/* Table */}

                <table className='table mt-4'>

                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg.</th>
                            <th>LTP</th>
                            <th>P&L</th>
                            <th>Chg.</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            positions.map((position, index) => {
                                return (
                                    <tr key={index}>

                                        <td>{position.product}</td>

                                        <td>{position.instrument}</td>

                                        <td>{position.qty}</td>

                                        <td>{position.avg}</td>

                                        <td>{position.ltp}</td>

                                        <td
                                            style={{
                                                color:
                                                    position.pnl > 0
                                                        ? "green"
                                                        : "red"
                                            }}
                                        >
                                            {position.pnl}
                                        </td>

                                        <td
                                            style={{
                                                color:
                                                    position.chg.includes("+")
                                                        ? "green"
                                                        : "red"
                                            }}
                                        >
                                            {position.chg}
                                        </td>

                                    </tr>
                                );
                            })
                        }

                    </tbody>

                </table>

            </div>
        </>
    );
}

export default Positions;