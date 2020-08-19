import React from "react";
import { connect } from "react-redux";
import {
  processGrid,
  finishedProcess,
  mouseDown,
  mouseUp,
  openPane,
} from "./GridActions";
import { Box } from "@material-ui/core";
import FieldUI from "./Field/FieldComponent";

class GridUI extends React.Component {
  constructor(props) {
    super(props);
    this.fields = null;
  }
  componentDidUpdate() {
    if (this.props.goClicked) {
      this.processGrid();
    }
  }
  updateFields() {
    if (!this.props.goClicked) {
      this.fields = new Array(this.props.xFields)
        .fill(null)
        .map((_) => new Array(this.props.yFields).fill(false));
    }
  }
  setFieldActive(x, y) {
    function setActive(active) {
      this.fields[x][y] = active;
    }
    return setActive;
  }
  processGrid() {
    this.props.process(this.props.xFields, this.props.yFields, this.fields);
    this.props.openPane();
    this.props.finishedProcess();
  }

  render() {
    this.updateFields();
    let table = [];
    for (let y = 0; y < this.props.yFields; y++) {
      table.push(
        <tr key={y}>
          {new Array(this.props.xFields).fill(null).map((_, x) => {
            return (
              <FieldUI
                key={`ID${y}&${x}`}
                fieldSize={this.props.fieldSize}
                border={this.props.fieldBorder}
                x={x}
                y={y}
                setFieldActive={this.setFieldActive(x, y).bind(this)}
                active={this.fields[x][y]}
                backgroundActivated={"grey"}
                background={"white"}
              />
            );
          })}
        </tr>
      );
    }
    return (
      <Box
        draggable="false"
        style={{
          display: "flex",
          justify: "center",
          touchAction: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <table
          style={{
            borderCollapse: "collapse",
            tableLayout: "fixed",
            margin: 0,
            padding: 0,
            top: this.props.marginTop,
            left: this.props.marginLeft,
            position: "absolute",
          }}
          onMouseDown={this.props.mouseDown}
          onMouseUp={this.props.mouseUp}
          onTouchStart={(event) => {
            console.log(event);
            this.props.mouseDown();
          }}
          onTouchEnd={this.props.mouseUp}
          draggable="false"
        >
          <tbody draggable="false">{table}</tbody>
        </table>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    xFields: state.gridLayoutReducer.widthFields,
    yFields: state.gridLayoutReducer.heightFields,
    fieldSize: state.gridLayoutReducer.fieldSize,
    fieldBorder: state.gridLayoutReducer.fieldBorder,
    marginLeft: state.gridLayoutReducer.marginLeft,
    marginTop: state.gridLayoutReducer.marginTop,
    goClicked: state.headerReducer.goClicked,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    process: (xFields, yFields, fields) => {
      dispatch(processGrid(xFields, yFields, fields));
    },
    finishedProcess: () => {
      dispatch(finishedProcess());
    },
    mouseDown: () => {
      dispatch(mouseDown());
    },
    mouseUp: () => {
      dispatch(mouseUp());
    },
    openPane: () => {
      dispatch(openPane());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridUI);
