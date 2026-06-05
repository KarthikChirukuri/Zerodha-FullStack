import React, { useState } from 'react';
import axios from 'axios';

function SellWindow({ setShowSellPopUp, name }) {

    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(0);

    const handleSell = async () => {

        await axios.post(
            "http://localhost:8080/sellOrders",
            {
                qty: qty,
                price: price,
                name: name,
                mode: "SELL"
            }
        );

        setShowSellPopUp(false);
    };

    return (
        <>
            <div className="overlay"></div>

            <div className="popup">

                <h2>Sell {name}</h2>

                <input
                    type="number"
                    placeholder="Qty"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <div className="popup-buttons">

                    <button
                        className="buy-btn"
                        onClick={handleSell}
                    >
                        Sell Stock
                    </button>

                    <button
                        className="cancel-btn"
                        onClick={() => setShowSellPopUp(false)}
                    >
                        Cancel
                    </button>

                </div>

            </div>
        </>
    );
}

export default SellWindow;