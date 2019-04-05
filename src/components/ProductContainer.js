import React from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";

const styles = {
  root: {
    flexGorw: "1"
  }
};
function ProductContainer(props) {
  const { classes, products } = props;
  return (
    <Grid container className={classes.root} spacing={16}>
      {products.map(data => {
        return <ProductCard key={data.id} data={data} />;
      })}
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    products: [...state]
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ProductContainer));
