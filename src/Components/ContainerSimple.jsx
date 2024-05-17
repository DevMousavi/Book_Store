import React from "react";
import useFetchData from "../Hooks/useFetchData.js";
import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import { IoIosArrowRoundBack } from "react-icons/io";
import Loader from "./Loader/Loader.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ContainerSimple = ({ url, title, link }) => {
    const { data, isLoading } = useFetchData(url);

    return (
        <div className="as:w-[95%] as:mx-auto af:hidden as:flex  flex-col gap-4">
            <span className="flex flex-row justify-between items-center border-b border-solid border-primaryGreen">
                <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
                <Link
                    to={link}
                    className="flex flex-row items-center gap-2 font-bold hover:scale-105 hover:text-primaryPink primaryTransition"
                >
                    <p>مشاهده بیشتر</p>
                    <IoIosArrowRoundBack />
                </Link>
            </span>

            {isLoading ? (
                <div className="w-full h-64 flex items-center justify-center">
                    <Loader />
                </div>
            ) : (
                <div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1.2}
                        className="w-full mt-3 mb-10 py-3 px-3 sm:hidden"
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Card
                                    id={item.id}
                                    name={item.name}
                                    img={item.image}
                                    price={item.price}
                                    score={item.specifications.score}
                                    discount={item.discount}
                                    category={item.category}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="af:hidden sm:flex flex-row flex-wrap lg:flex-nowrap sm:justify-around  sm:gap-y-4 xl:justify-between xl:gap-y-0 mb-8">
                        {data.map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                img={item.image}
                                price={item.price}
                                score={item.specifications.score}
                                discount={item.discount}
                                category={item.category}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContainerSimple;
