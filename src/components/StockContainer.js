import React from "react";
import Stock from "./Stock";

function StockContainer({stocksList, portfolioBuySell}) {

  const displayedStocks = stocksList.map((stock) => {
    return(
      <Stock
      key={stock.id}
      stock={stock} 
      portfolioBuySell={portfolioBuySell}
      isInPortfolio={false}

      />
    )
  })

  return (
    <div>
      <h2>Stocks</h2>
      {displayedStocks}
    </div>
  );
}

export default StockContainer;
