import React from "react";
import { connect } from "react-redux";
import { Grid, withStyles, Typography, Divider } from "@material-ui/core";
import Notification from "./AddToCartNotify";

const styles = {
  container: {
    width: "80%",
    justifyContent: "center",
    marginTop: "20px",
    margin: "0 auto"
  },
  Grid: {
    height: "350px"
  },
  img: {
    width: "70%",
    height: "70%"
  },
  title: {
    textTransform: "capitalize"
  },
  float: {
    float: "right",
    marginTop: "10px"
  }
};

function Detail(props) {
  const { id } = props.match.params;
  const { products, classes } = props;
  const product = products.filter(value => value.id === parseInt(id))[0];
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={12} md={4} lg={4} className={classes.Grid}>
        <img src={product.img} alt="" className={classes.img} />
      </Grid>
      <Grid item sm={12} md={8} lg={6}>
        <Typography variant="display2" component="h2" className={classes.title}>
          {product.title}
        </Typography>
        <Typography variant="display1"> Price : {product.price}</Typography>
        <Typography variant="body1">
          {product.details}
          {product.details}
          {product.details}
        </Typography>
        <Divider />
        <Notification
          inCart={product}
          color="primary"
          variant="contained"
          float={classes.float}
        />
      </Grid>
    </Grid>
  );
}
const mapStateToProps = state => {
  return {
    products: [...state]
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Detail));
