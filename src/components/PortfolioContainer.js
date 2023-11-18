import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onSellStock }) {

  const myPortfolio = portfolio.map((portfolioObj) =>{
    return <Stock key={portfolioObj.id} stock={portfolioObj} onStockClick={onSellStock} />
  })

  console.log(portfolio);
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        myPortfolio
      }
    </div>
  );
}

export default PortfolioContainer;
