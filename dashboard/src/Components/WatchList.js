import React from 'react';
function WatchList() {
    return ( 
        <>
            <div className='watchlist-container'>
                <div className='search-container'>
                    <input type='text' name='search' id='search' placeholder='Search eg:infy, bse, niffy, fut weekly, gold mcx' className="search"></input>
                    <span className='counts text-muted'>9 / 50</span>
                </div>
            </div>
            <ul className='list'></ul>
        </>
     );
}

export default WatchList;