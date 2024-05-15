import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Card from "./Card";
import useFetchData from "../Hooks/useFetchData";

export const ColoredContainer = ({ url, title, link, bg_color, img_title }) => {
    const { data, isLoading } = useFetchData(url);

    return (
        <div className="mb-20  ">
            <div className="flex justify-between items-center">
                <p className="font-bold text-3xl ">{title}</p>
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
                                category={item.category}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
export default ColoredContainer;
