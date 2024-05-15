import React, { useEffect, useState } from "react";
import useFetchData from "../Hooks/useFetchData";
import Card from "./Card";

const ContainerProductList = ({ url, pageNumber, sortLeast, sortMost }) => {
    const { data, isLoading } = useFetchData(url);

    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(22);

    useEffect(() => {
        if (pageNumber === 1) {
            setNumber1(1);
            setNumber2(22);
        } else if (pageNumber === 2) {
            setNumber1(23);
            setNumber2(44);
        } else if (pageNumber === 3) {
            setNumber1(25);
            setNumber2(66);
        } else if (pageNumber === 4) {
            setNumber1(67);
            setNumber2(88);
        } else if (pageNumber === 4) {
            setNumber1(89);
            setNumber2(200);
        }
    }, [pageNumber, data]);

    return (
        <div className="w-[77%] cardOfferShadow p-5 rounded-2xl bg-white flex flex-wrap items-center justify-between gap-x-2 gap-y-10">
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                data
                    .slice(number1, number2)
                    .map((item) => (
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
    );
};

export default ContainerProductList;
