import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <Link
            to={`/about_product/${props.category}/${props.id}`}
            className="bg-white sm:mr-3 lg:mr-0 ml-3 h-[370px] rounded-xl px-2 py-3 cardOfferShadow flex flex-col relative overflow-hidden primaryTransition hover:scale-105"
        >
            <img
                src={props.img}
                alt={`${props.name}.png`}
                className="md:h-48 xl:h-56 w-full h-56 mx-auto rounded"
            />
            <h3 className="text-black font-bold text-sm my-2 mr-2">
                {props.name}
            </h3>
            <span className="flex flex-row gap-1 text-black mr-2">
                <p>{props.price}</p>
                <p>تومان</p>
            </span>

            <span className="flex justify-center flex-row-reverse gap-1 w-16 bg-primaryPink rounded-md px-1 py-1 text-xl priceShadow absolute bottom-3 left-3">
                <p className="text-white">{props.score}</p>
                <FaStar className="text-white " />
            </span>
        </Link>
    );
};

export default Card;
