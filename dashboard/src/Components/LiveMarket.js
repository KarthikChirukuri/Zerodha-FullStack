import React, { useState } from "react";
import axios from "axios";
import "./LiveMarket.css";

function LiveMarket() {

    const [symbol, setSymbol] = useState("");
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(false);

    const API_KEY = "V5CM7EGRJ7ZKH5BV";

    const getStockData = async () => {

        if(symbol === ""){
            alert("Please Enter Stock Symbol");
            return;
        }

        try{

            setLoading(true);

            const response = await axios.get(
                `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
            );

            setStockData(response.data["Global Quote"]);

            setLoading(false);

        }catch(error){

            console.log(error);

            setLoading(false);

            alert("Failed To Fetch Data");
        }
    };

    return (
        <>
            <div className="market-container">

                {/* Background Effects */}

                <div className="glow glow1"></div>
                <div className="glow glow2"></div>

                {/* Main Card */}

                <div className="market-card">

                    <h1>Live Market</h1>

                    <p className="subtitle">
                        Search live stock market data instantly
                    </p>

                    {/* Search Box */}

                    <div className="search-box">

                        <input
                            type="text"
                            placeholder="Enter Stock Symbol (AAPL, TSLA, MSFT)"
                            value={symbol}
                            onChange={(e) => setSymbol(e.target.value)}
                        />

                        <button onClick={getStockData}>
                            Search
                        </button>

                    </div>

                    {/* Loading */}

                    {
                        loading && (
                            <div className="loading">
                                Loading Market Data...
                            </div>
                        )
                    }

                    {/* Data Display */}

                    {
                        stockData && (

                            <div className="stock-card">

                                <h2>
                                    {stockData["01. symbol"]}
                                </h2>

                                <div className="stock-info">

                                    <div className="info-box">
                                        <span>Price</span>
                                        <h3>
                                            ${stockData["05. price"]}
                                        </h3>
                                    </div>

                                    <div className="info-box">
                                        <span>Change</span>
                                        <h3>
                                            {stockData["09. change"]}
                                        </h3>
                                    </div>

                                    <div className="info-box">
                                        <span>Change %</span>

                                        <h3
                                            className={
                                                stockData["10. change percent"]
                                                ?.includes("-")
                                                ? "red"
                                                : "green"
                                            }
                                        >
                                            {stockData["10. change percent"]}
                                        </h3>
                                    </div>

                                </div>

                            </div>
                        )
                    }

                </div>

            </div>
        </>
    );
}

export default LiveMarket;