import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { constants } from "../constants.js";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Paper,
  Badge,
} from "@material-ui/core/";
import { InputBase, MenuItem, Menu } from "@material-ui/core";
import CartService from "../lib/CartService.js";

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: constants.spacing(3),
    backgroundColor: constants.palette.appbar,
  },
  toolbar: { justifyContent: "space-between" },
  clickableLink: { color: "white", textDecoration: "none" },
  searchContainer: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    padding: constants.spacing(0.5),
  },
}));

function Header() {
  const classes = useStyles();
  const history = useHistory();
  const cart = CartService.getCart();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCallToRouter = (path) => {
    history.push(path);
    handleMenuClose();
  };
  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const renderMenu = (
    <Menu
      id="menuId"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => handleCallToRouter("/search/bracelets")}>
        Bracelets
      </MenuItem>
      <MenuItem onClick={() => handleCallToRouter("/search/necklace")}>
        Necklace
      </MenuItem>
      <MenuItem onClick={() => handleCallToRouter("/search/earrings")}>
        Earrings
      </MenuItem>
    </Menu>
  );

  const handleQueryInput = (e) => {
    // when user hits enter, submit search query
    if (e.keyCode === 13) history.push(`/search/${e.target.value}`);
  };

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton onClick={handleMenuOpen} color="inherit">
            <MenuIcon />
          </IconButton>
          <a className={classes.clickableLink} href="/">
            <Typography>e-Commerce</Typography>
          </a>

          <Paper className={classes.searchContainer} component="form">
            <SearchIcon className={classes.searchIcon} />
            <InputBase placeholder="Search..." onKeyDown={handleQueryInput} />
          </Paper>

          <IconButton onClick={() => history.push("/cart")} color="inherit">
            <Badge badgeContent={cart && cart.length} color="secondary">
              <CartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

export default Header;
