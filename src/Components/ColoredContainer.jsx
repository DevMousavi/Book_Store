import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Card from "./Card";
import useFetchData from "../Hooks/useFetchData";

export const ColoredContainer = ({ url, title, link, bg_color, img_title }) => {
    const { data, isLoading } = useFetchData(url);

    return (
        <div className="mb-20 relative ">
            <div className="flex justify-end items-center">
                <p className="font-bold text-base z-40 absolute top-16 right-[120px]">
                    {title}
                </p>
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
                className={`w-full h-[400px] my-3 rounded-xl ${bg_color} flex flex-col justify-center ColoredContainerShadow relative`}
            >
                <div className="absolute flex flex-col-reverse bottom-[-18px] right-16 max-w-52 ">
                    <img
                        src={`./../src/assets/colored-container/${img_title}.png`}
                        alt=""
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="631"
                        height="105"
                        viewBox="0 0 231 75"
                        fill="none"
                        className="relative mb-6 left-48"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 0C31.5006 0.949537 50.52 17.872 56.1955 26.4544L55.986 25.8011L82.4924 58.631C99.3032 79.4521 131.038 79.4521 147.849 58.6309L174.356 25.8011L174.146 26.4544C179.822 17.872 198.844 0.949537 230.349 0H0Z"
                            fill="#f1f5f9"
                        ></path>
                    </svg>
                </div>
                <div className="w-full flex flex-row justify-between mt-2 pl-2 pr-72">
                    {isLoading ? (
                        <h1>Loading ...</h1>
                    ) : (
                        data.map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                img={item.image}
                                price={item.price}
                                score={item.specifications.score}
                                discount={item.discount}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
export default ColoredContainer;
