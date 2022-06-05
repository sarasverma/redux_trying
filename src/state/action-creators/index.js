export const addMoney = (amount) => {
  return (dispatch) => {
    dispatch({ type: "add", payload: amount });
  };
};

export const subMoney = (amount) => {
  return (dispatch) => {
    dispatch({ type: "sub", payload: amount });
  };
};
