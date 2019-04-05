import React from "react";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = {
  root: {
    width: "90%",
    margin: "0px auto ",
    marginTop: 16
  },
  tabel: {
    minWidth: 700
  },
  img: {
    width: "60px",
    height: "50px"
  }
};

function Cart(props) {
  const { products, classes } = props;
  // console.log(classes);
  const newproducts = products.filter(value => value.cart);
  // console.log(newproducts.length);
  let count = 0;
  const totalPrice = newproducts.reduce(
    (acc, value) => acc + parseInt(value.price),
    0
  );
  return (
    <Grid container className={classes.root}>
      <h1> Yout Items </h1>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
            <TableCell align="right"> name </TableCell>
            <TableCell align="right"> price </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newproducts.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {++count}
              </TableCell>
              <TableCell>
                <img src={row.img} alt="" className={classes.img} />
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
          {newproducts.length > 0 && (
            <TableRow>
              <TableCell> </TableCell>
              <TableCell> </TableCell>
              <TableCell align="right"> Total </TableCell>
              <TableCell align="right">{totalPrice}$</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    products: state
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Cart));
