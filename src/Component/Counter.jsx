import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increseby1,
  decreaseby1,
  increseby10,
  decreaseby10,
} from "../Store/Counterslice/Index.jsx";

const Counter = () => {

  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
     <h1>Counter Value : {count}</h1>

      <button onClick={() => dispatch(increseby1())}>
        increseby1
      </button>

      <button onClick={() => dispatch(decreaseby1())}>
        decreaseby1
      </button>
       <button onClick={() => dispatch(increseby10())}>
        increseby10
      </button>
      <button onClick={() => dispatch(decreaseby10())}>
        decreaseby10
      </button>
    </div>
  );
};

export default Counter;