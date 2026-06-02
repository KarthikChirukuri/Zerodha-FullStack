import React from 'react';
import Menu from './Menu';

function TopBar() {
    return ( 
        <>
            <div className='topbar-container'>
                <div className='indices-container'>
                    <div className='nifty'>
                        <div className='index'>Nifty 50</div>
                        <div className='index-points'>{100.2}</div>
                    </div>
                    <p className='percent'></p>

                    <div className='sensex'>
                        <div className='index'>SENSEX</div>
                        <div className='index-points'>{100.2}</div>
                    </div>
                    <p className='percent'></p>
                </div>
                <Menu></Menu>
            </div>
        </>
     );
}

export default TopBar;