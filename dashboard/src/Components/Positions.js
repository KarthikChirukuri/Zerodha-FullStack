import React from 'react';
import { positions } from '../Data/Data';

function Positions() {

    return (
        <>
            <div className='container mt-5'>

                {/* Heading */}

                <h3>Positions ({positions.length})</h3>

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
                            <th>Net Chg.</th>
                            <th>Day Chg.</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            positions.map((position, index) => {

                                const currValue =
                                    position.price * position.qty;

                                const investedValue =
                                    position.avg * position.qty;

                                const pnl =
                                    currValue - investedValue;

                                const profClass =
                                    pnl >= 0 ? "profit" : "loss";

                                const netClass =
                                    position.net.includes("+")
                                        ? "profit"
                                        : "loss";

                                const dayClass =
                                    position.isLoss
                                        ? "loss"
                                        : "profit";

                                return (
                                    <tr key={index}>

                                        <td>{position.product}</td>

                                        <td>{position.name}</td>

                                        <td>{position.qty}</td>

                                        <td>{position.avg.toFixed(2)}</td>

                                        <td>{position.price.toFixed(2)}</td>

                                        <td className={profClass}>
                                            {pnl.toFixed(2)}
                                        </td>

                                        <td className={netClass}>
                                            {position.net}
                                        </td>

                                        <td className={dayClass}>
                                            {position.day}
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