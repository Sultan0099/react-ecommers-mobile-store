import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

import Notification from "./AddToCartNotify";
const styles = {
  card: {
    minWidth: "250px",
    maxWidth: "auto"
  },
  media: {
    height: 300,
    backgroundSize: "contain"
  },
  float: {
    float: "right"
  },
  Link: {
    textDecoration: "none"
  }
};

function ProductCard(props) {
  const { classes, data } = props;
  // const addToCart = data => {
  //   data.cart = true;

  //   console.log(data);
  // };
  return (
    <Grid item xs={12} sm={6} lg={4} md={6}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.img}
            title={data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.title}
            </Typography>
            <Typography component="p">{data.details}</Typography>

            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.float}
            >
              Price : {data.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider variant="middle" />
        <CardActions>
          <Link to={`/details-${data.id}`} className={classes.Link}>
            <Button size="small" color="primary">
              Details
            </Button>
          </Link>
          {/* <Button size="small" color="primary" onClick={() => addToCart(data)}>
            Add To Cart
          </Button> */}
          <Notification inCart={data} color="primary" variant="text" />
        </CardActions>
      </Card>
    </Grid>
  );
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCard);
