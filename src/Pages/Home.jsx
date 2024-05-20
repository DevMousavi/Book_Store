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

// Banners...
import b_1 from "./../assets/Slider/3.jpg";
import b_2 from "./../assets/topBanner.png";
import b_4 from "./../assets/Slider/4.jpg";
import bb from "./../assets/b-1.png";
import bbb from "./../assets/b-2.png";
import bbbb from "./../assets/b-3.png";
import BannerDown from "./../assets/BannerDown.jpg";

const Home = () => {
    return (
        <>
            <h6 className="af:flex as:hidden w-full bg-primaryGreen text-2xl space-4 p-3 font-bold">
                این سایت در اندازه دستگاه شما قابل مشاهده نیست لطفا با دستگاه
                دیگری امتحان کنید
            </h6>
            <Header />
            <main className="as:w-80% as:mx-auto md:container as:mt-0 md:mt-6">
                <img
                    src="./../src/assets/baner_1.png"
                    alt="baner_1.png"
                    className=" as:mb-1 my-2 as:h-20 af:hidden sm:flex as:mx-auto"
                />
                <div className="af:hidden w-full as:flex flex-row md:gap-2 md:my-8 items-center justify-between as:px-2 sm:my-6 lg:my-20 md:mx-0 as:h-64">
                    <div className="as:w-full md:w-[80%] cursor-pointer cardOfferShadow rounded-2xl">
                        <Swiper spaceBetween={50} slidesPerView={1}>
                            <SwiperSlide>
                                <img
                                    src={b_1}
                                    alt="baner_1.jpg"
                                    className="w-full rounded-2xl"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={b_4}
                                    alt="baner_1.jpg"
                                    className="w-full rounded-2xl"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="w-[25%] h-[350px] rounded-2xl as:hidden md:flex md:h-[95%] lg:h-80 xl:h-[400px]">
                        <img
                            src={b_2}
                            alt="baner_2.png"
                            className="w-full h-full rounded-2xl "
                        />
                    </div>
                </div>
                <DiscountedProducts />
                <h2 className="af:hidden as:flex as:text-xl as:font-bold sm:text-2xl md:text-3xl text-black mt-14 as:mr-3 md:mr-0">
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

                <div className="af:hidden as:w-[95%] as:mx-auto as:flex flex-col gap-1 mb-9">
                    <img
                        src={bb}
                        alt="b-1.png"
                        className="w-full cardOfferShadow rounded-xl"
                    />
                    <div className="flex flex-row w-full justify-between items-center">
                        <img
                            src={bbb}
                            alt="b-2.png"
                            className="rounded-2xl cardOfferShadow as:hidden lg:flex lg:w-[290px] "
                        />
                        <img
                            src={bbbb}
                            alt="b-3.png"
                            className="rounded-2xl cardOfferShadow lg:w-[650px] lg:h-72 xl:w-full"
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
                    src={BannerDown}
                    alt="last-banner"
                    className="af:hidden sm:flex rounded-3xl cursor-pointer my-6"
                />
            </main>
            <Footer />
        </>
    );
};

export default Home;
