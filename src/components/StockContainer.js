import React from "react";
import Stock from "./Stock";

function StockContainer({ stock, onBuyStock }) {

  const stockList = stock.map(stockObj =>{
    return <Stock key={stockObj.id} stock={stockObj} onStockClick={onBuyStock} />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
