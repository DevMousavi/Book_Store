import React from "react";
import Header from "../LayOut/Header.jsx";
import BasketCard from "../Components/cart/BasketCard.jsx";
import BasketSideBar from "../Components/cart/BasketSideBar.jsx";

const Cart = () => {
  return (
    <>
      <Header />
      <div className="flex justify-between container my-20">
        <BasketCard />
        <BasketSideBar />
      </div>
    </>
  );
};

export default Cart;
