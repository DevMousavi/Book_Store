import React from "react";
import { Link } from "react-router-dom";
import CardOffers from "./CardOffers.jsx";

import { BsArrowLeftShort } from "react-icons/bs";
import useFetchData from "../Hooks/useFetchData.js";
import Loader from "./Loader/Loader.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const DiscountedProducts = () => {
    const { data, isLoading } = useFetchData("/offer?_page=1&_limit=4");

    return (
        <div className="af:hidden as:flex as:w-[95%] lg:w-full as:mx-auto as:h-[480px] md:h-auto my-10 rounded-xl text-white bg-primaryPink as:overflow-hidden flex-col as:px-6 md:px-11 py-6 cardOfferShadow">
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
            <div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.8}
                    className="w-[400px] as:pb-9 as:pt-6  mx-auto flex as:flex-row as:items-center as:flex-nowrap justify-between mt-2 sm:hidden "
                >
                    {isLoading ? (
                        <div className="w-full h-72 flex items-center justify-center">
                            <Loader />
                        </div>
                    ) : (
                        data.slice(0, 4).map((item) => (
                            <SwiperSlide key={item.id}>
                                <CardOffers
                                    name={item.name}
                                    img={item.image}
                                    first_price={item.initial_price}
                                    second_price={item.final_price}
                                    score={item.specifications.score}
                                    discount={item.discount}
                                />
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
                <div className="af:hidden sm:flex flex-co">
                    {isLoading ? (
                        <div className="w-full h-72 flex items-center justify-center">
                            <Loader />
                        </div>
                    ) : (
                        <div className="flex flex-row flex-wrap items-center sm:h-[900px] lg:h-[360px] sm:mt-7  xl:w-full sm:justify-around xl:justify-between gap-y-5">
                            {data.slice(0, 4).map((item) => (
                                <CardOffers
                                    key={item.id}
                                    name={item.name}
                                    img={item.image}
                                    first_price={item.initial_price}
                                    second_price={item.final_price}
                                    score={item.specifications.score}
                                    discount={item.discount}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DiscountedProducts;
