import React from "react";

function Stock({stock, portfolioBuySell, isInPortfolio}) {
  const {name, price, ticker} = stock

  function test(){
    stock = {...stock, isInPortfolio}
    portfolioBuySell(stock)
  }

  return (
    <div>
      <div className="card" onClick={test}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
