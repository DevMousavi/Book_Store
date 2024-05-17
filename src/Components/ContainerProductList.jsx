import React, { useEffect, useState } from "react";
import useFetchData from "../Hooks/useFetchData";
import Card from "./Card";
import Loader from "./Loader/Loader";

const ContainerProductList = ({ url, pageNumber, category, reset }) => {
    const { data, isLoading } = useFetchData(url);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (reset == false) {
            setFilteredData(data);
        } else {
            if (category === "highestPrice") {
                const sortedData = [...data].sort((a, b) => b.price - a.price);
                setFilteredData(sortedData);
            } else if (category == "lowestPrice") {
                const sortedData = [...data].sort((a, b) => a.price - b.price);
                setFilteredData(sortedData);
            } else if (category == "MostPopular") {
                const sortedData = [...data].sort(
                    (a, b) => b.specifications.score - a.specifications.score
                );
                setFilteredData(sortedData);
            }
        }
    }, [data, reset, category]);

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
        <>
            <div className="w-full cardOfferShadow p-5 rounded-2xl bg-white flex flex-wrap items-center as:justify-around  md:justify-around xl:justify-between gap-x-2 gap-y-10">
                {isLoading ? (
                    <div className="w-full h-96 flex items-center justify-center">
                        <Loader />
                    </div>
                ) : (
                    filteredData
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
        </>
    );
};

export default ContainerProductList;
