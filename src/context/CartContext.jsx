import React, { createContext, useContext, useReducer } from "react";
// import { sumItem } from "../Helpers/helper";
// import {sumItem}
import { sumItem } from "../helpers/helper";
const initialState = {
    selecteditems: [],
    itemsCount: 0,
    total: 0,
    checkOut: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            if (
                !state.selecteditems.find(
                    (item) =>
                        item.id === action.payload.id &&
                        item.category === action.payload.category
                )
            ) {
                state.selecteditems.push({ ...action.payload, numbers: 1 });
            }

            return {
                ...state,
                ...sumItem(state.selecteditems),
                checkOut: false,
            };
        case "INCREASE":
            const increaseIndex = state.selecteditems.findIndex(
                (item) => item.id === action.payload.id
            );

            state.selecteditems[increaseIndex].numbers += 1;
            return {
                ...state,
                ...sumItem(state.selecteditems),
            };
        case "DECREASE":
            const decreaseIndex = state.selecteditems.findIndex(
                (item) => item.id === action.payload.id
            );

            state.selecteditems[decreaseIndex].numbers -= 1;
            return {
                ...state,
                ...sumItem(state.selecteditems),
            };
        case "DELETE":
            const newSelectedItems = state.selecteditems.filter(
                (item) => item.id !== action.payload.id
            );

            return {
                ...state,
                selecteditems: [...newSelectedItems],
                ...sumItem(newSelectedItems),
            };
        case "CHECKOUT":
            return {
                selecteditems: [],
                itemsCount: 0,
                total: 0,
                checkOut: true,
            };

        default:
            throw new Error("Invalid Action!");
    }
};

const CartContext = createContext();

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

const useCart = () => {
    const { state, dispatch } = useContext(CartContext);
    return [state, dispatch];
};

export default CartProvider;
export { useCart };
