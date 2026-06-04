import React, {useState} from 'react';
import axios from 'axios';

function BuyWindow({setShowPopup, name}) {

    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(0);

    const handleBuy = () => {
        axios.post("http://localhost:8080/addOrders", {qty:qty,price:price, name:name, mode:"BUY"});
        setShowPopup(false);
    }

    return ( 
        <>
            <div className="overlay"></div>
            <div className="popup">
                <input type="number" placeholder="Qty" value={qty} onChange={(e) => setQty(e.target.value)}/>
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <button onClick={()=> handleBuy()}>Buy Stock</button>
                <button onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
        </>
     );
}

export default BuyWindow;