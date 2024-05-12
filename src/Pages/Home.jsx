import React from "react";
import Header from "../LayOut/Header.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
    return (
        <>
            <Header />
            <main className=" container mt-6">
                <div className="w-full">
                    <div className="w-[70%]">
                        <Swiper spaceBetween={50} slidesPerView={1}>
                            <SwiperSlide>
                                <img
                                    src="./../src/assets/Slider/3.jpg"
                                    alt="baner_1.jpg"
                                    className="w-full rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="./../src/assets/Slider/4.jpg"
                                    alt="baner_1.jpg"
                                    className="w-full rounded-2xl"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
