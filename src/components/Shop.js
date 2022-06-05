import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { addMoney, subMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="container" style={{ width: "20%", height: "45px" }}>
      {/* <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(actionCreators.subMoney(100));
        }}
      >
        -
      </button>
      Balance
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(actionCreators.addMoney(100));
        }}
      >
        +
      </button> */}
      <button
        className="btn btn-primary"
        onClick={() => {
          subMoney(100);
        }}
      >
        -
      </button>
      Balance
      <button
        className="btn btn-primary"
        onClick={() => {
          addMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
