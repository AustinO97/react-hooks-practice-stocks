import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stock, setStock] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortBy, setSortby] = useState('Alphabetically')
  const [filterBy, setFilterBy] =useState('Tech')

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(data => setStock(data))
  }, [])

  const handleBuyStock = (stockToBuy) => {
    const stockInPortfolio = portfolio.find((stockObj) => stockObj.id === stockToBuy.id)
    if (!stockInPortfolio) {
      setPortfolio([...portfolio, stockToBuy])
    }
  }

  const handleSellStock = (stockToSell) => {
    const sellStock = portfolio.filter((stockObj) => stockObj.id !== stockToSell.id)
    setPortfolio(sellStock)
  }

  const sortedStocks = [...stock].sort((s1, s2) => {
    return sortBy === 'Alphabetically' ? s1.ticker.localeCompare(s2.ticker) : s1.price - s2.price
  })

  const filteredStocks = sortedStocks.filter((stockObj) => stockObj.type === filterBy)

  return (
    <div>
      <SearchBar
        sortBy={sortBy}
        onChangeSort={setSortby}
        filterBy={filterBy}
        onChangeFilter={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stock={filteredStocks} onBuyStock={handleBuyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onSellStock={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
