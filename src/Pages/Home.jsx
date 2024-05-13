// React...
import React from "react";

// Components...
import Header from "../LayOut/Header.jsx";
import DiscountedProducts from "../Components/DiscountedProducts.jsx";

// Swiper...
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PartnerBrandsBox from "../Components/PartnerBrandsBox.jsx";
import ContainerSimple from "../Components/ContainerSimple.jsx";
import ColoredContainer from "../Components/ColoredContainer.jsx";

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
                <ContainerSimple
                    url="educational?_page=1&_limit=5"
                    link="/educational"
                    title="کمک درسی ..."
                />
                <ColoredContainer
                    url="/adults?_page=1&_limit=4"
                    title="عمومی بزرگ سالان..."
                    link="/adults_products"
                    bg_color="bg-lightBlue"
                    img_title="adults"
                />
                <ContainerSimple
                    url="english_products?_page=1&_limit=5"
                    link="/english_products"
                    title="کتاب های انگلیسی..."
                />
            </main>
        </>
    );
};

export default Home;
