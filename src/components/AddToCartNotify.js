import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  },
  variant: {
    backgroundColor: "#45A2B3",
    border: "none",
    color: "white"
  },
  variantDanger: {
    backgroundColor: "red",
    border: "none",
    color: "white"
  }
});

class Notification extends React.Component {
  state = {
    open: false,
    openDanger: false,
    checkCart: false
  };

  handleClick = () => {
    const { products, inCart } = this.props;

    for (let product of products) {
      if (product.id === inCart.id) {
        product.cart = true;
        this.setState({ open: true, checkCart: true, openDanger: false });
        break;
      }
    }
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false, openDanger: false });
  };

  changeCart = () => {
    const { products, inCart } = this.props;

    for (let product of products) {
      if (product.id === inCart.id) {
        product.cart = false;
        this.setState({ open: false, checkCart: false, openDanger: true });
        break;
      }
    }
  };

  componentWillMount() {
    const { inCart } = this.props;
    this.setState({ checkCart: inCart.cart });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        {!this.state.checkCart ? (
          <Button
            onClick={this.handleClick}
            color={this.props.color}
            variant={this.props.variant}
            className={this.props.float}
          >
            {" "}
            Add TO Cart{" "}
          </Button>
        ) : (
          <Button
            onClick={this.changeCart}
            color="secondary"
            variant={this.props.variant}
            className={this.props.float}
          >
            {" "}
            remove from cart
          </Button>
        )}

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id",
            classes: {
              root: classes.variant
            }
          }}
          message={<span id="message-id"> Product added from cart </span>}
          action={[
            <Button
              key="undo"
              color="inherit"
              size="small"
              onClick={this.changeCart}
            >
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.openDanger}
          autoHideDuration={2000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id",
            classes: {
              root: classes.variantDanger
            }
          }}
          message={<span id="message-id"> Product is remove to Cart </span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

Notification.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    products: state
  };
};
export default connect(mapStateToProps)(withStyles(styles)(Notification));
