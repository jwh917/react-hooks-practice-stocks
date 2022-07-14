import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocksList, setStocksList] = useState([])

  const [portfolioList, setPortfolioList] = useState([])

  const [filterInput, setFilterInput] = useState("All")

  const [sortInput, setSortInput] = useState("")


  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((stocksData) => setStocksList(stocksData));
  }, []);


  function portfolioBuySell(stock){
    const displayedPortfolio = portfolioList.filter((pStock) => pStock.id !== stock.id);

    if(stock.isInPortfolio === true){
      setPortfolioList([...displayedPortfolio])
    }
    else
    {setPortfolioList([...displayedPortfolio, stock])}
  }


  function filterStocks(event){
    setFilterInput(event.target.value)
  }


  function helpfilter(filterInput, stock){
    if(filterInput === "All") {
      return stock
    }
    
    if(filterInput === stock.type) {
      return stock
    }
  }


  function helpSort(stock1, stock2){
    if(sortInput === "Alphabetically"){
      return stock1.ticker.localeCompare(stock2.ticker)
    }

    if(sortInput === "Price"){
      return stock1.price - stock2.price
    }
  }


  const displayedStocks = stocksList.filter((stock) => helpfilter(filterInput, stock)).sort((stock1, stock2) => helpSort(stock1, stock2))

 
  function SortByAZPrice(event){
    setSortInput(event.target.value)
  }

  return (
    <div>
      <SearchBar SortByAZPrice={SortByAZPrice} filterStocks={filterStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocksList={displayedStocks} portfolioBuySell={portfolioBuySell}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} portfolioBuySell={portfolioBuySell}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
