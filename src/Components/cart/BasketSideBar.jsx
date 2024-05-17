import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { separateDigits } from "../../helpers/separateDigits";

function BasketSideBar({ state, clickHandler }) {
    return (
        <div className="lg:w-72 af:w-full">
            <div className="bg-white pt-24 px-8 pb-8 relative min-h-80 rounded-3xl mb-4 shadow-md">
                <div className="absolute top-0 right-[123px]">
                    <img
                        src="./../src/assets/shop.png"
                        alt="cart-logo"
                        width="50"
                        height="50"
                    />
                </div>
                <div className="flex justify-evenly mt-2">
                    <p>تعداد کالاها : </p>
                    <span>{state.itemsCount}</span>
                </div>
                <div className="flex justify-evenly border-b-2 border-dashed border-slate-400 pb-7 mt-4">
                    <p>جمع مبلغ کالاها : </p>
                    <span>{separateDigits(state.total)} تومان</span>
                </div>
                <div className="flex justify-evenly mt-7">
                    <p>وضعیت پرداخت : </p>
                    <span>پرداخت نشده </span>
                </div>
            </div>
            <div className="bg-primaryGreen text-white w-full rounded-xl h-14 flex items-center justify-center font-bold my-4 shadow-md">
                <button onClick={() => clickHandler("CHECKOUT")}>پرداخت</button>
                <IoIosArrowBack />
            </div>
        </div>
    );
}

export default BasketSideBar;
