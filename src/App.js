import Portfolio from "./Components/filtered_portfolio/PortfolioCC";

import classes from './App.module.css';


function App() {
  return (
    <div className={classes["portfolio"]}>
        <Portfolio />
    </div>
    
  );
}

export default App;
