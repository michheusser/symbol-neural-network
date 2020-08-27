/*
Copyright 2020, Michel Heusser
ALl rights reserved
https://github.com/michheusser
*/

import React from "react";
import { connect } from "react-redux";
import { processGrid } from "./Actions.js";
import { AppBar, Toolbar, Typography, Button, Slide } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Menu from "./Menu/Menu.js";
//import Backdrop from "@material-ui/core/Backdrop";
//import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = (theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
});

class Header extends React.Component {
  handleClick() {
    this.props.processGrid(
      this.props.xFields,
      this.props.yFields,
      this.props.fields
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Slide
          direction="down"
          in={this.props.show}
          timeout={{ enter: 800, exit: 800 }}
        >
          <AppBar position="fixed" color="primary" elevation={0}>
            <Toolbar>
              <Menu />
              <Typography variant="h6" className={classes.title}>
                handCalc
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleClick.bind(this)}
                disabled={this.props.buttonDisabled}
              >
                Start
              </Button>
            </Toolbar>
          </AppBar>
        </Slide>
      </div>
    );
  }
}
//<div className={classes.toolbarMargin}></div>;

const mapStateToProps = (state) => {
  return {
    show: state.headerFooterReducer.show,
    fields: state.gridLayoutReducer.fields,
    xFields: state.gridLayoutReducer.widthFields,
    yFields: state.gridLayoutReducer.heightFields,
    buttonDisabled: state.gridLayoutReducer.emptyGrid,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processGrid: (xFields, yFields, fields) => {
      dispatch(processGrid(xFields, yFields, fields));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(Header));
