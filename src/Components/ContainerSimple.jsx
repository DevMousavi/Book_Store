import React from "react";
import useFetchData from "../Hooks/useFetchData.js";
import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import { IoIosArrowRoundBack } from "react-icons/io";

const ContainerSimple = ({ url, title, link }) => {
    const { data, isLoading } = useFetchData(url);

    return (
        <div className="flex flex-col gap-4">
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
            <div className="w-full flex flex-row justify-between mt-2 mb-20">
                {isLoading ? (
                    <h1>Loading ...</h1>
                ) : (
                    data
                        .slice(0, 6)
                        .map((item) => (
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
    );
};

export default ContainerSimple;
