import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addtocart,
  removecart,
  clearcart,
} from "../Cardslice/Index.jsx";

const Product = () => {

  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.cart.product
  );

  const cart = useSelector(
    (state) => state.cart.cart
  );

  // Console Check
  console.log("Products:", products);

  console.log("Cart:", cart);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div
      style={{
        backgroundColor: "#0f0f0f",
        minHeight: "100vh",
        padding: "30px",
        color: "white",
        fontFamily: "Arial",
      }}
    >

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          backgroundColor: "#111",
          padding: "30px",
          borderRadius: "15px",
        }}
      >

        {/* Heading */}
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "40px",
          }}
        >
          🛒 Shopping Cart
        </h1>

        {/* Products Heading */}
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          🛍 Products
        </h2>

        {/* Products */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {products.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#1e1e1e",
                padding: "15px",
                borderRadius: "10px",
                width: "250px",
              }}
            >

              {/* Product Name + Price */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <h3>{item.name}</h3>

                <h3>₹{item.price}</h3>
              </div>

              {/* Button */}
              <button
                onClick={() => {

                  console.log(
                    "Added Item:",
                    item
                  );

                  dispatch(addtocart(item));
                }}
                style={{
                  width: "100%",
                  backgroundColor: "#4caf50",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>

        <hr
          style={{
            margin: "40px 0",
            border: "1px solid #333",
          }}
        />

        {/* Cart Heading */}
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          🛒 Your Cart
        </h2>

        {/* Cart Items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#1e1e1e",
                padding: "15px 20px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >

              {/* Item Name */}
              <h3>{item.name}</h3>

              {/* Price */}
              <h3>₹{item.price}</h3>

              {/* Remove Button */}
              <button
                onClick={() =>
                  dispatch(removecart(item.id))
                }
                style={{
                  backgroundColor: "#ff3b30",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Total Price */}
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <h1>
            Total Price: ₹{totalPrice}
          </h1>

          <button
            onClick={() =>
              dispatch(clearcart())
            }
            style={{
              marginTop: "15px",
              backgroundColor: "#222",
              color: "white",
              border: "1px solid #555",
              padding: "12px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Clear Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default Product;