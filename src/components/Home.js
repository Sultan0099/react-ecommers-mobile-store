import React, { Component } from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import ProductContainer from "./ProductContainer";

// styles
const styles = theme => ({
  root: {
    flexGrow: "1",
    padding: theme.spacing.unit * 2,
    width: "85vw",
    marginTop: theme.spacing.unit * 2,
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw"
    },
    gorw: {
      flexGrow: "1",
      textAlign: "center"
    }
  }
});
class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Typography variant="h3" align="center" className={classes.gorw}>
          Mobile To Sell
        </Typography>
        <ProductContainer />
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
