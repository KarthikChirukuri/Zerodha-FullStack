import React from 'react';

function Orders() {
    return ( 
        <div className='mainOrdersDiv' style={{textAlign:"center", marginTop:"20px"}}>
            <p className='text-muted'>You have not placed any orders</p>
            <button className='btn btn-primary'>Get Started</button>
        </div>
    );
}

export default Orders;