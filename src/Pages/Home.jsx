// React...
import React from "react";

// Components...
import Header from "../LayOut/Header.jsx";
import DiscountedProducts from "../Components/DiscountedProducts.jsx";

// Swiper...
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PartnerBrandsBox from "../Components/PartnerBrandsBox.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <main className=" container mt-6">
                <img
                    src="./../src/assets/baner_1.png"
                    alt="baner_1.png"
                    className="my-2 "
                />
                <div className="w-full flex items-center justify-between">
                    <div className="w-[70%] cursor-pointer cardOfferShadow rounded-2xl">
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
                    <div className="w-[25%] h-[350px] rounded-2xl ">
                        <img
                            src="./../src/assets/baner_2.png"
                            alt="baner_2.png"
                            className="w-full h-full rounded-2xl"
                        />
                    </div>
                </div>
                <DiscountedProducts />
                <h2 className="text-3xl text-primaryGreen mt-14">
                    همکاری ها ...
                </h2>
                <PartnerBrandsBox />
            </main>
        </>
    );
};

export default Home;
