import React from 'react';

function Funds() {
    return (
        <>
            <div className='container mt-5'>

                {/* Top Section */}

                <div className='row align-items-center mb-5'>
                    <div className='col text-end text-muted'>
                        Instant, zero-cost fund transfers with UPI
                    </div>
                    <div className='col-auto'>
                        <button className='btn btn-primary me-2'>
                            Add funds
                        </button>
                        <button className='btn btn-primary'>
                            Withdraw
                        </button>
                    </div>
                </div>

                {/* Main Section */}
                <div className='row'>
                    {/* Left Side */}
                    <div className='col-6'>
                        <h4 className='mb-4'>Equity</h4>
                        <div className='border p-4'>
                            <div className='d-flex justify-content-between'>
                                <p>Available margin</p>
                                <p>4,043.10</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Used margin</p>
                                <p>3,757.30</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Available cash</p>
                                <p>4,043.10</p>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <p>Opening Balance</p>
                                <p>4,043.10</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Payin</p>
                                <p>4064.00</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>SPAN</p>
                                <p>0.00</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Delivery margin</p>
                                <p>0.00</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Exposure</p>
                                <p>0.00</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Options premium</p>
                                <p>0.00</p>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <p>Collateral (Liquid funds)</p>
                                <p>0.00</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Collateral (Equity)</p>
                                <p>0.00</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Total Collateral</p>
                                <p>0.00</p>
                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className='col-6 d-flex justify-content-center align-items-center'>
                        <p className='text-muted'>
                            You don't have a commodity account
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Funds;