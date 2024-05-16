import React, { useEffect, useState } from "react";
import useFetchData from "../Hooks/useFetchData";
import CardOffers from "./CardOffers";
import Loader from "./Loader/Loader";

const ContainerProductListOffer = ({ url, pageNumber }) => {
    const { data, isLoading } = useFetchData(url);

    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(22);

    useEffect(() => {
        if (pageNumber === 1) {
            setNumber1(1);
            setNumber2(21);
        } else if (pageNumber === 2) {
            setNumber1(21);
            setNumber2(41);
        } else if (pageNumber === 3) {
            setNumber1(21);
            setNumber2(61);
        } else if (pageNumber === 4) {
            setNumber1(61);
            setNumber2(81);
        } else if (pageNumber === 4) {
            setNumber1(81);
            setNumber2(200);
        }
    }, [pageNumber]);

    return (
        <div className="w-full cardOfferShadow p-5 rounded-2xl bg-white flex flex-wrap items-center justify-between gap-x-2 gap-y-10">
            {isLoading ? (
                <div className="w-full h-72 flex items-center justify-center">
                    <Loader />
                </div>
            ) : (
                data
                    .slice(number1, number2)
                    .map((item) => (
                        <CardOffers
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            img={item.image}
                            first_price={item.initial_price}
                            second_price={item.final_price}
                            score={item.specifications.score}
                            discount={item.discount}
                            category={item.category}
                        />
                    ))
            )}
        </div>
    );
};

export default ContainerProductListOffer;
