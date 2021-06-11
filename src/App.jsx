import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import SearchResults from "./pages/SearchResults";
import { makeStyles } from "@material-ui/styles";
import { constants } from "./constants";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: constants.palette.background,
    minHeight: "100vh",
    // display: "flex"
  },
}));
// PAGES: home(categories grid), search results grid, product page, cart
// STEPS:
// router, define every view >> build layout placeholder div of views
// >> replace placeholders with real components, use mock data
// >> logic

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/search/:searchQuery">
            <SearchResults />
          </Route>
          <Route path="/product/:productID">
            <ProductDetail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
