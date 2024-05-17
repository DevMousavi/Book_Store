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
import MiddleBanners from "../Components/MiddleBanners.jsx";
import Footer from "../LayOut/Footer.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <main className="as:w-80% as:mx-auto md:container as:mt-0 md:mt-6">
                <img
                    src="./../src/assets/baner_1.png"
                    alt="baner_1.png"
                    className="as:mb-1 my-2 as:h-20 as:hidden sm:flex"
                />
                <div className="w-full flex flex-row md:gap-2 md:my-8 items-center justify-between as:px-2 sm:my-6 lg:my-20 md:mx-0 as:h-64">
                    <div className="as:w-full md:w-[80%] cursor-pointer cardOfferShadow rounded-2xl">
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
                    <div className="w-[25%] h-[350px] rounded-2xl as:hidden md:flex md:h-[95%] lg:h-80 xl:h-[400px]">
                        <img
                            src="./../src/assets/baner_2.png"
                            alt="baner_2.png"
                            className="w-full h-full rounded-2xl "
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
                    title="کمک درسی"
                />
                <ColoredContainer
                    url="/adults?_page=1&_limit=4"
                    title="عمومی بزرگسال"
                    link="/adults_products"
                    bg_color="bg-lightBlue"
                    img_title="adults"
                />
                <ContainerSimple
                    url="english_products?_page=1&_limit=5"
                    link="/english_products"
                    title="کتاب های انگلیسی"
                />

                <div className="flex flex-col gap-1 mb-9">
                    <img
                        src="./../src/assets/b-1.png"
                        alt="b-1.png"
                        className="w-full cardOfferShadow rounded-xl"
                    />
                    <div className="flex flex-row w-full justify-between items-center">
                        <img
                            src="./../src/assets/b-2.png"
                            alt="b-2.png"
                            className="rounded-2xl cardOfferShadow"
                        />
                        <img
                            src="./../src/assets/b-3.png"
                            alt="b-3.png"
                            className="rounded-2xl cardOfferShadow"
                        />
                    </div>
                </div>
                <ColoredContainer
                    url="/educational?_page=1&_limit=4"
                    title="آموزشی"
                    link="/educational"
                    bg_color="bg-darkBlue"
                    img_title="educational"
                />
                <ContainerSimple
                    url="kids_and_teens?_page=1&_limit=5"
                    link="/kids_and_teens"
                    title="کتاب کودک و نوجوان"
                />
                <MiddleBanners />
                <ColoredContainer
                    url="/stationery?_page=1&_limit=4"
                    title="لوازم التحریر"
                    link="/best_sellers"
                    bg_color="bg-blue"
                    img_title="stationery"
                />
                <img
                    src="./../src/assets/last-banner.jpg"
                    alt="last-banner"
                    className="rounded-3xl cursor-pointer my-6"
                />
            </main>
            <Footer />
        </>
    );
};

export default Home;
