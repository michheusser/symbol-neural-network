import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

//
const useStyles = (theme) => ({});

class TemplateUI extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return <div></div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(TemplateUI));
