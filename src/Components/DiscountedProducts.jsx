import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardOffers from "./CardOffers.jsx";

import { BsArrowLeftShort } from "react-icons/bs";
import { api } from "../server/config.js";

const DiscountedProducts = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/offer");
                setData(response);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="w-full h-[450px] my-10 rounded-xl text-white bg-primaryPink flex flex-col px-11 py-6 cardOfferShadow">
            <div className="flex justify-between items-center border-b border-solid border-gray-200 pb-1">
                <p className="font-bold text-2xl">تخفیف های ویژه</p>
                <Link
                    to="/offers"
                    className="flex flex-row-reverse items-center gap-1 primaryTransition hover:scale-105"
                >
                    <BsArrowLeftShort className="text-2xl text-white" />
                    مشاهده بیشتر
                </Link>
            </div>
            <div className="w-full flex flex-row justify-between mt-2">
                {isLoading ? (
                    <h1>Loading</h1>
                ) : (
                    data
                        .slice(0, 4)
                        .map((item) => (
                            <CardOffers
                                key={item.id}
                                name={item.name}
                                img={item.image}
                                first_price={item.initial_price}
                                second_price={item.final_price}
                                score={item.specifications.score}
                                discount={item.discount}
                            />
                        ))
                )}
            </div>
        </div>
    );
};

export default DiscountedProducts;
