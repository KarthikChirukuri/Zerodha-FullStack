import React from 'react';
import WatchList from './WatchList';
import { Route, Routes } from 'react-router-dom';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './Apps';
import LiveMarket from './LiveMarket';

function Dashboard() {
    return ( 
        <>
            <div className='dashboard-container'>
                <WatchList></WatchList>
                <div className='content'>
                        <Routes>
                            <Route exact path='/' element={<Summary></Summary>}></Route>
                            <Route path='/orders' element={<Orders></Orders>}></Route>
                            <Route path='/holdings' element={<Holdings></Holdings>}></Route>
                            <Route path='/positions' element={<Positions></Positions>}></Route>
                            <Route path='/funds' element={<Funds></Funds>}></Route>
                            <Route path='/apps' element={<Apps></Apps>}></Route>
                            <Route path='/Livemarket' element={<LiveMarket></LiveMarket>}/> 
                        </Routes>
                </div>
            </div>
        </>
     );
}

export default Dashboard;