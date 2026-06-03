import React, {useState} from "react";
import { watchlist } from "../Data/Data";
import {Tooltip, grow} from '@mui/material';
import {KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";

function WatchList() {
  return (
    <div className="watchlist-container">

      {/* Search */}

      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty, fut weekly, gold mcx"
          className="search"
        />

        <span className="counts text-muted">
          {watchlist.length} / 50
        </span>
      </div>

      {/* Watchlist */}

      <ul className="list">
        {watchlist.map((stock, index) => {
        //   return (
        //     <li key={index} className="list-item">
        //       {stock.name}
        //     </li>
        //   );
        return(
            <WatchListItem stock={stock} key={index}></WatchListItem>
        );
        })}
      </ul>

    </div>
  );
}

export default WatchList;

// we are writing watch list item here itself becuase here it is tightly coupled with the watchlist as we will not use it any other please so we can write it here. 
// Or we can write it anywhere like creating new file as we need

const WatchListItem = ({stock}) =>{
    const [showWatchListActions, setShowWhatchListActions] = useState(false);

    const handleMouseEnter = (e) =>{
        setShowWhatchListActions(true);
    }

    const handleMouseLeave = (e) => {
        setShowWhatchListActions(false);
    }

    return(
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
                <p className={stock.isDown ? "loss":"profit"}>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent text-muted">{stock.percent}</span>
                    {
                        stock.isDown? (<KeyboardArrowDown className="loss"></KeyboardArrowDown>): (<KeyboardArrowUp className="down"></KeyboardArrowUp>)
                    }
                    <span className="price">{stock.price}</span>
                </div>
            </div>
        </li>
    );
}