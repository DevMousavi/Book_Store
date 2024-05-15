import React from "react";
import Header from "../LayOut/Header.jsx";
import BasketCard from "../Components/cart/BasketCard.jsx";
import BasketSideBar from "../Components/cart/BasketSideBar.jsx";
import { useCart } from "../context/CartContext.jsx";

const Cart = () => {
  const [state, dispatch] = useCart();
  console.log(state);
  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };
  return (
    <>
      <Header />
      <div className="flex justify-between container my-20">
        <div className="bg-white pt-4 px-8 pb-8 relative min-w-[900px] min-h-80 rounded-3xl mb-4 shadow-md">
          {state.selecteditems.map((product) => (
            <BasketCard key={product.id} data={product} clickHandler={clickHandler} />
          ))}
        </div>
        <BasketSideBar state={state} clickHandler={clickHandler} />
      </div>
    </>
  );
};

export default Cart;
