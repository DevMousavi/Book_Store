import React from "react";
import { Link } from "react-router-dom";
import CardOffers from "./CardOffers.jsx";

import { BsArrowLeftShort } from "react-icons/bs";
import useFetchData from "../Hooks/useFetchData.js";
import Loader from "./Loader/Loader.jsx";

const DiscountedProducts = () => {
    const { data, isLoading } = useFetchData("/offer?_page=1&_limit=4");

    return (
        <div className="as:w-[95%] lg:w-full as:mx-auto xl:h-[450px] my-10 rounded-xl text-white bg-primaryPink flex flex-col  px-11 py-6 cardOfferShadow">
            <div className="flex justify-between items-center border-b border-solid border-gray-200 pb-1">
                <p className="font-bold as:text-sm ms:text-2xl as:text-nowrap ">
                    تخفیف های ویژه
                </p>
                <Link
                    to="/offers"
                    className="flex flex-row-reverse items-center as:gap-1 as:text-xs md:text-base primaryTransition hover:scale-105"
                >
                    <BsArrowLeftShort className="as:text-xl md:text-2xl text-white as:hidden sm:flex" />
                    مشاهده بیشتر
                </Link>
            </div>
            <div className="w-full flex as:flex-col as:items-center as:gap-y-4 sm:flex-row sm:flex-wrap  xl:gap-y-0 lg:flex-nowrap lg:gap-x-3 xl:gap-x-0 justify-between mt-2">
                {isLoading ? (
                    <div className="w-full h-72 flex items-center justify-center">
                        <Loader />
                    </div>
                ) : (
                    data
                        .slice(0, 4)
                        .map((item) => (
                            <CardOffers
                                key={item.id}
                                name={item.name}
                                img={item.image}
                                first_price={item.initial_price}
                                second_price={item.final_price}
                                score={item.specifications.score}
                                discount={item.discount}
                            />
                        ))
                )}
            </div>
        </div>
    );
};

export default DiscountedProducts;
