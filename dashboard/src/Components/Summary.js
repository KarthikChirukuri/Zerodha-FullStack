import React from 'react';

function Summary() {
    return (
        <>
            <div className='mainDivSummary'>

                <p>Hi, User!</p>
                <hr />

                {/* Equity Section */}

                <div
                    className='suammaryEquityDiv container'
                    style={{ marginTop: "5%", marginBottom: "6%" }}
                >

                    <div className='row' style={{ marginBottom: "50px" }}>
                        <p>Equity</p>
                    </div>

                    <div className='row align-items-center'>

                        <div className='col-6 d-flex align-items-center'>

                            <div><h1 style={{ margin: 0 }}>3.74k</h1></div>

                            <div
                                style={{
                                    height: "70px",
                                    borderLeft: "1px solid lightgray",
                                    marginLeft: "80px"
                                }}
                            ></div>

                        </div>

                        <div className='col-6'>
                            <p>Margins used &nbsp; 0</p>
                            <p>Opening balance &nbsp; 3.74k</p>
                        </div>

                    </div>

                </div>

                <hr />

                {/* Holdings Section */}

                <div
                    className='summaryHoldingsDiv container'
                    style={{ marginTop: "5%", marginBottom: "6%" }}
                >

                    <div className='row' style={{ marginBottom: "50px" }}>
                        <p>Holdings (13)</p>
                    </div>

                    <div className='row align-items-center'>

                        <div className='col-6 d-flex align-items-center'>

                            <div>
                                <h1
                                    style={{
                                        color: "green",
                                        margin: 0,
                                        fontSize: "55px"
                                    }}
                                >
                                    1.55k
                                </h1>
                            </div>

                            <div
                                style={{
                                    marginLeft: "10px",
                                    marginTop: "15px"
                                }}
                            >
                                <p
                                    style={{
                                        color: "green",
                                        margin: 0
                                    }}
                                >
                                    +5.20%
                                </p>
                            </div>

                            <div
                                style={{
                                    height: "70px",
                                    borderLeft: "1px solid lightgray",
                                    marginLeft: "80px"
                                }}
                            ></div>

                        </div>

                        <div className='col-6'>
                            <p>Current Value &nbsp; 31.43k</p>
                            <p>Investment &nbsp; 29.88k</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Summary;