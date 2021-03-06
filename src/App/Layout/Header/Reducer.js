/*
Copyright 2020, Michel Heusser
ALl rights reserved
https://github.com/michheusser
*/

// **************************** REDUCER ****************************
let headerReducer = (state = { show: true }, action) => {
  // Has the information of wether the footer should slide out of the screen
  // if the drawing board is in use
  if (action.type === "GRID_MOUSE_DOWN") {
    let newState = { show: false };
    return newState;
  }
  if (action.type === "GRID_MOUSE_UP") {
    let newState = { show: true };
    return newState;
  }
  return state;
};

export default headerReducer;
