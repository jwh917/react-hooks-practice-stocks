import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioList, portfolioBuySell}) {

  const portfolioStocks = portfolioList.map((stock) => {
    return(
      <Stock
      key={stock.id}
      stock={stock}
      portfolioBuySell={portfolioBuySell}
      isInPortfolio={true}
      />
    )
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks}
    </div>
  );
}

export default PortfolioContainer;
