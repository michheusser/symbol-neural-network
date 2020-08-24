let headerFooterReducer = (state = { show: true }, action) => {
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

export default headerFooterReducer;