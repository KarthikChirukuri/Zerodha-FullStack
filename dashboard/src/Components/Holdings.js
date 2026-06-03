import React from 'react';
import { holdings } from '../Data/Data';

function Holdings() {
    return (
        <>
            <div className='container mt-5'>

                {/* Heading */}

                <h3>Holdings ({holdings.length})</h3>

                {/* Table */}

                <table className='table mt-4 '>

                    <thead >
                        <tr className='text-muted'>
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

                        {holdings.map((stock, index) => {

                            const currValue = stock.price * stock.qty;

                            const isProfit =
                                currValue - stock.avg * stock.qty >= 0;

                            const profClass = isProfit ? "profit" : "loss";

                            const dayClass =
                                stock.isLoss ? "loss" : "profit";

                            return (
                                <tr key={index}>

                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{stock.avg.toFixed(2)}</td>
                                    <td>{stock.price.toFixed(2)}</td>
                                    <td>{currValue.toFixed(2)}</td>
                                    <td className={profClass}>
                                        {(currValue - stock.avg * stock.qty).toFixed(2)}
                                    </td>
                                    <td className={profClass}>
                                        {stock.net}
                                    </td>
                                    <td className={dayClass}>
                                        {stock.day}
                                    </td>
                                </tr>
                            );

                        })}

                        {/* Static Rows */}

                        {/* <tr>
                            <td>SBIN</td>
                            <td>50</td>
                            <td>500</td>
                            <td>560</td>
                            <td>28,000</td>
                            <td className='profit'>3,000</td>
                            <td className='profit'>+5.20%</td>
                            <td className='profit'>+2.10%</td>
                        </tr>

                        <tr>
                            <td>TCS</td>
                            <td>10</td>
                            <td>3500</td>
                            <td>3700</td>
                            <td>37,000</td>
                            <td className='profit'>2,000</td>
                            <td className='profit'>+4.50%</td>
                            <td className='loss'>-1.10%</td>
                        </tr> */}

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
                        <h2 className='profit'>1,553 (+5.20%)</h2>
                        <p className='text-muted'>P&L</p>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Holdings;