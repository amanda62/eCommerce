import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import data from "../data.json";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import { constants } from "../constants";

const useStyles = makeStyles((theme) => ({
  root: { margin: `${constants.spacing(1)}px` },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${constants.spacing(1)}px ${constants.spacing(1)}px`,
    margin: `${constants.spacing(3)}px 0`,
  },
  card: { gridColumn: "span 4", margin: `0 ${constants.spacing(3)}px` },
  media: { height: `${constants.spacing(15)}px` },
  content: { display: "flex", justifyContent: "space-between" },
}));

function Home() {
  const classes = useStyles();
  const history = useHistory();
  const categories = [
    {
      name: "Necklaces",
      query: "necklace",
      image: "https://picsum.photos/300/400?x",
    },
    {
      name: "Bracelets",
      query: "bracelet",
      image: "https://picsum.photos/300/400?y",
    },
    {
      name: "Earrings",
      query: "earrings",
      image: "https://picsum.photos/300/400?z",
    },
  ];
  const countProducts = (tag) =>
    data.filter((product) => product.tags.includes(tag)).length;

  return (
    <Layout>
      <div className={classes.root}>
        <Typography variant="h2">Categories</Typography>
        <div className={classes.grid}>
          {categories.map((category) => (
            <Card
              className={classes.card}
              onClick={() => history.push(`/search/${category.query}`)}
              key={category.query}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={category.image}
                  title={category.query}
                />
                <CardContent className={classes.content}>
                  <Typography variant="h5">
                    {category.name} ({countProducts(category.query)})
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
