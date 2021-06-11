import React, { useState } from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import data from "../data.json";
import { makeStyles } from "@material-ui/styles";
import ColorPicker from "../components/ColorPicker";
import { constants } from "../constants";
import Layout from "../components/Layout";
import CartService from "../lib/CartService";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: constants.spacing(3),
    width: "85%",
    margin: "0 auto",
  },
  imageSwapper: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
  },
  mainImage: {
    flexGrow: 1,
  },
  thumbnails: {
    display: "flex",
    flexDirection: "column",
    margin: `0 ${constants.spacing(2)}px 0 0`,
  },
  thumbnail: {
    width: constants.spacing(5.5),
    height: constants.spacing(5.5),
    margin: `0 0 ${constants.spacing(1)}px`,
    cursor: "pointer",
  },
  info: {
    margin: `0 0 0 ${constants.spacing(2)}px`,
    display: "flex",
    flexDirection: "column",
  },
  price: { alignSelf: "flex-end" },
  description: { margin: `${constants.spacing(1)}px 0` },
  tag: {
    color: constants.palette.appbar,
    margin: `0 ${constants.spacing(1)}px 0 0`,
    cursor: "pointer",
  },
  tagsContainer: {
    display: "flex",
    margin: `0 0 ${constants.spacing(2)}px`,
  },
}));

function ProductDetail() {
  const classes = useStyles();
  const history = useHistory();
  const { productID } = useParams();
  const product = data.find((product) => product.id === productID);

  const [currentType, setCurrentType] = useState(product.types[0]);

  const handleAddToCart = () => {
    CartService.addToCart(currentType.SKU);
    history.push("/cart");
  };

  return (
    <Layout>
      <div>
        <Paper className={classes.root}>
          <div className={classes.imageSwapper}>
            <div className={classes.thumbnails}>
              {product.types.map((type) => (
                <img
                  src={type.image}
                  alt={type.color}
                  key={type.image}
                  className={classes.thumbnail}
                  onClick={() => setCurrentType(type)}
                />
              ))}
            </div>

            <img
              className={classes.mainImage}
              src={currentType.image}
              alt={currentType.SKU}
            />
          </div>

          <div className={classes.info}>
            <Typography variant="h2">{product.name}</Typography>
            <Typography variant="h3" className={classes.price}>
              ${product.price}
            </Typography>
            <Typography className={classes.description}>
              {product.description}
            </Typography>
            <ColorPicker
              product={product}
              currentType={currentType}
              setCurrentType={setCurrentType}
            />
            <div className={classes.tagsContainer}>
              {product.tags.map((tag) => (
                <Typography
                  className={classes.tag}
                  onClick={() => history.push(`/search/${tag}`)}
                  key={tag}
                >
                  #{tag}
                </Typography>
              ))}
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </div>
        </Paper>
      </div>
    </Layout>
  );
}

export default ProductDetail;
