import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { constants } from "./constants";
import { makeStyles } from "@material-ui/styles";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import SearchResults from "./pages/SearchResults";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: constants.palette.background,
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
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
