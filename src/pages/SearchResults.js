import React from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import data from "../data.json";
import { makeStyles } from "@material-ui/styles";
import Layout from "../components/Layout";
import { constants } from "../constants";

const useStyles = makeStyles((theme) => ({
  root: { margin: constants.spacing(1) },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${constants.spacing(1)}px ${constants.spacing(1)}px`,
  },
  card: { gridColumn: "span 4", margin: constants.spacing(3) },
  media: { height: constants.spacing(15) },
  content: { display: "flex", justifyContent: "space-between" },
  resultSummary: {
    textAlign: "right",
  },
  notFoundImage: {
    width: "30%",
    margin: "0 35%",
  },
  notFoundText: {
    textAlign: "center",
    margin: `${constants.spacing(3)}px 0`,
  },
  notFoundContainer: {
    display: "flex",
    flexDirection: "column",
  },
}));

function SearchResults() {
  const classes = useStyles();
  const history = useHistory();
  const { searchQuery } = useParams();
  const results = data.filter((product) => product.tags.includes(searchQuery));

  return (
    <Layout>
      <div className={classes.root}>
        {!results.length ? (
          <div className={classes.notFoundContainer}>
            <img
              className={classes.notFoundImage}
              src="/not-found.png"
              alt="No results were found"
            />
            <Typography className={classes.notFoundText} variant="h2">
              No results were found
            </Typography>
          </div>
        ) : (
          <>
            <Typography variant="subtitle2" className={classes.resultSummary}>
              {results.length} product{results.length > 1 ? "s" : ""} found
            </Typography>
            <div className={classes.grid}>
              {results.map((product) => (
                <Card
                  onClick={() => history.push(`/product/${product.id}`)}
                  key={product.id}
                  className={classes.card}
                >
                  <CardActionArea>
                    <CardMedia
                      image={product.types[0].image}
                      title={product.id}
                      className={classes.media}
                    />
                    <CardContent className={classes.content}>
                      <Typography variant="button"> {product.name}</Typography>
                      <Typography variant="button">${product.price}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export default SearchResults;
