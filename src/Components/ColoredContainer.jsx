import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Card from "./Card";
import useFetchData from "../Hooks/useFetchData";
import Loader from "./Loader/Loader";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const ColoredContainer = ({ url, title, link, bg_color, img_title }) => {
  const { data, isLoading } = useFetchData(url);

  return (
    <div className="mb-20  ">
      <div className="flex justify-between items-center">
        <p className="font-bold md:text-3xl af:text-xl af:mx-3 md:mx-0 ">{title}</p>
        <Link
          to={link}
          className="flex flex-row-reverse items-center gap-1 primaryTransition hover:scale-105"
        >
          <span className="flex flex-row-reverse border-b border-solid border-gray-200 font-bold primaryTransition hover:text-primaryPink">
            <BsArrowLeftShort className="text-2xl" />
            <p> مشاهده بیشتر</p>
          </span>
        </Link>
      </div>
      <div
        className={`w-full h-[400px] my-3 rounded-xl ${bg_color} flex flex-col justify-center ColoredContainerShadow md:relative`}
      >
        <div className="md:absolute md:flex af:hidden flex-col-reverse bottom-[-18px] right-16 max-w-52 ">
          <img
            src={`./../src/assets/colored-container/${img_title}.png`}
            alt={img_title}
          />
        </div>
        <div className="w-full md:flex md:flex-row md:justify-between mt-2 md:pl-2 md:pr-72">
          {isLoading ? (
            <div className="w-full flex items-center justify-center">
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
                      key={item.id}
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
              <div className="af:hidden sm:flex flex-row flex-wrap sm:justify-around  sm:gap-y-4 xl:justify-between xl:gap-y-0 mb-8">
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
      </div>
    </div>
  );
};
export default ColoredContainer;
