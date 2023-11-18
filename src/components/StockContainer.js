import React from "react";
import Stock from "./Stock";

function StockContainer({ stock }) {

  const stockList = stock.map((stockObj) => {
    return <Stock key={stock.id} stock={stockObj}  />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
