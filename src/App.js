import Portfolio from "./components/filtered_portfolio/PortfolioCC";
import Store from "./components/layouts/StoreFC";

import classes from './App.module.css';


function App() {
  return (
    <>
      <div className={classes["portfolio"]}>
          <Portfolio />
      </div>
      <div className={classes["store"]}>
          <Store />
      </div>
    </>
  );
}

export default App;
