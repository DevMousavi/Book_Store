import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CardOffers = (props) => {
    return (
        <Link
            to="/about_product"
            className="bg-white w-60 h-[370px] rounded-xl px-2 py-3 cardOfferShadow flex flex-col relative overflow-hidden primaryTransition hover:scale-105"
        >
            <img
                src={props.img}
                alt={`${props.name}.png`}
                className="w-full h-56 mx-auto rounded"
            />
            <h3 className="text-black font-bold text-sm my-2">{props.name}</h3>
            <span className="flex flex-row gap-1 text-black">
                <p>{props.second_price}</p>
                <p>تومان</p>
            </span>
            <span>
                <del className="flex flex-row gap-1 text-gray-500 text-xs">
                    <p>{props.first_price}</p>
                    <p>تومان</p>
                </del>
            </span>
            <span className="flex justify-center flex-row-reverse gap-1 w-12 rounded-md px-1 text-xl priceShadow absolute bottom-3 left-3">
                <p className="text-black">{props.score}</p>
                <FaStar className="text-red-400 " />
            </span>
            <p className="bg-green-600 text-center py-1 w-56 absolute top-5 mr-20 -rotate-45 ">
                {props.discount}%
            </p>
        </Link>
    );
};

export default CardOffers;
