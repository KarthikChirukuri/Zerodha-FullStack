import React, { useState } from "react";
import { watchlist } from "../Data/Data";
import BuyWindow from '../Components/BuyWindow';

import {
  Button,
  Tooltip,
  Grow,
} from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import SellWindow from "./SellWindow";
import { DoughnutChart } from "./DoughnutChart";

function WatchList() {

  const data = {
  labels: watchlist.map((subArray)=>subArray["name"]),
  datasets: [
    {
      label: 'Price',
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <div className="watchlist-container">

      {/* Search */}

      <div className="search-container">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty..."
          className="search"
        />

        <span className="counts">
          {watchlist.length} / 50
        </span>
      </div>

      {/* Watchlist */}

      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <WatchListItem
              stock={stock}
              key={index}
            />
          );
        })}
      </ul>


      <DoughnutChart data={data}></DoughnutChart>

    </div>
  );
}

export default WatchList;

/* ================= WATCHLIST ITEM ================= */

const WatchListItem = ({ stock }) => {

  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >

      <div className="item">

        {/* LEFT */}

        <p className={stock.isDown ? "loss" : "profit"}>
          {stock.name}
        </p>

        {/* RIGHT */}

        <div className="itemInfo">

          <span className="percent">
            {stock.percent}
          </span>

          {
            stock.isDown ? (
              <KeyboardArrowDown className="loss" />
            ) : (
              <KeyboardArrowUp className="profit" />
            )
          }

          <span className="price">
            {stock.price}
          </span>

        </div>

      </div>

      {
        showActions && (
          <WatchListActions details={stock}/>
        )
      }

    </li>
  );
};

/* ================= ACTIONS ================= */

const WatchListActions = ({details}) => {

  const [showPopup, setShowPopup] = useState(false);
  const [showSellPopUp, setShowSellPopUp] = useState(false);

  return (

    <span className="itemActions">

      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <Button className="buy" onClick={()=>{setShowPopup(true)}}>
          Buy
        </Button>
      </Tooltip>

      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <Button className="sell" onClick={(()=>setShowSellPopUp(true))}>
          Sell
        </Button>
      </Tooltip>

      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action-icon">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>

      <Tooltip
        title="More"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action-icon">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>


      {/* {showPopup && <BuyWindow />} */}
      {showPopup && <BuyWindow setShowPopup={setShowPopup} name={details.name} />}
      {showSellPopUp && <SellWindow setShowSellPopUp={setShowSellPopUp} name={details.name} />}

    </span>
  );
};