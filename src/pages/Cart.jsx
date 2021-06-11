import React, { useState } from "react";
import data from "../data.json";
import { useHistory } from "react-router-dom";
import { Typography, Button, Paper, Modal, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CartService from "../lib/CartService";
import Layout from "../components/Layout";
import { constants } from "../constants";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    width: "50%",
    padding: constants.spacing(3),
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: `0 ${constants.spacing(2)}px ${constants.spacing(2)}px`,
  },
  price: {
    justifyContent: "space-between",
  },
  total: { fontWeight: "bold !important" },
  emptyCartImage: {
    width: "30%",
    margin: "0 35%",
  },
  emptyCartText: {
    textAlign: "center",
    margin: `${constants.spacing(3)}px 0`,
  },
  emptyCartContainer: {
    display: "flex",
    flexDirection: "column",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

function Cart() {
  const classes = useStyles();
  const history = useHistory();
  const cartSKUs = CartService.getCart();
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);

  const handlePurchase = () => {
    CartService.clear();
    setPurchaseModalOpen(false);
    history.push("/");
  };

  const cart = cartSKUs.map((sku) =>
    data.reduce((output, { types, ...product }) => {
      const type = types.find(({ SKU }) => SKU === sku);
      return type ? { ...product, ...type } : output;
    }, {})
  );

  // CALCULATE SUM
  const subtotal = cart.reduce((sum, { price }) => +price + sum, 0);
  const tax = 0.1;
  const taxSubtotal = +(subtotal * tax).toFixed(2);
  const total = +(subtotal + taxSubtotal).toFixed(2);

  return (
    <Layout>
      {!cart.length ? (
        <div className={classes.emptyCartContainer}>
          <img
            className={classes.emptyCartImage}
            src="/empty-cart.png"
            alt="Your cart is empty"
          />
          <Typography className={classes.emptyCartText} variant="h2">
            Your cart is empty
          </Typography>
        </div>
      ) : (
        <Paper className={classes.list}>
          {cart.map((item) => (
            <div key={item.id} className={classes.item}>
              {/* TODO <img alt={item.color} src={item.image} /> */}
              <Typography onClick={() => history.push(`/product/${item.id}`)}>
                {item.name} ({item.color})
              </Typography>
              <Typography className={classes.price}>$ {item.price}</Typography>
            </div>
          ))}

          <Divider className={classes.item} />

          <div className={classes.item}>
            <Typography className={classes.name}>Tax ({tax * 100}%)</Typography>
            <Typography className={classes.price}>
              ${taxSubtotal.toFixed(2)}
            </Typography>
          </div>
          <div className={classes.item}>
            <Typography className={`${classes.name} ${classes.total}`}>
              Total
            </Typography>
            <Typography className={`${classes.price} ${classes.total}`}>
              $ {total}
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setPurchaseModalOpen(true)}
          >
            Submit
          </Button>
        </Paper>
      )}
      <Modal
        open={purchaseModalOpen}
        onClose={handlePurchase}
        className={classes.modal}
      >
        <Paper className={classes.list}>
          <Typography variant="h3">Thank you for your purchase!</Typography>
        </Paper>
      </Modal>
      {/* TODO <div className={classes.shippingCalculator}></div> */}
    </Layout>
  );
}

export default Cart;
