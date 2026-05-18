import React from "react";
import Counter from "./Component/Counter.jsx";
import Product from "./Component/Product.jsx";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
        <h1 className="cart-title">😎Shoping cart</h1>
      <Product />
    </div>
  );
};

export default App;