import React from "react";
import Header from "../LayOut/Header.jsx";
import BasketCard from "../Components/cart/BasketCard.jsx";
import BasketSideBar from "../Components/cart/BasketSideBar.jsx";
// import { useCart } from "../Context/CartContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import Footer from "../LayOut/Footer.jsx";

const Cart = () => {
    const [state, dispatch] = useCart();
    const clickHandler = (type, payload) => {
        dispatch({ type, payload });
    };
    return (
        <>
            <Header />
            <main className="flex justify-between xl:container my-20 lg:flex-nowrap af:flex-wrap">
                <div className="bg-white pt-4 px-8 pb-8 af:mx-5 lg:mx-0 grow lg:ml-2 af:w-full min-h-80 rounded-3xl mb-4 shadow-md">
                    {state.selecteditems.map((product) => (
                        <BasketCard
                            key={product.id}
                            data={product}
                            clickHandler={clickHandler}
                        />
                    ))}
                </div>
                <BasketSideBar state={state} clickHandler={clickHandler} />
            </main>
            <Footer />
        </>
    );
};

export default Cart;
