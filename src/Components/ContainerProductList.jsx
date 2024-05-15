import React from "react";
import useFetchData from "../Hooks/useFetchData";
import Card from "./Card";

const ContainerProductList = ({ url }) => {
    const { data, isLoading } = useFetchData(url);
    console.log(data);

    return (
        <div className="w-[77%] cardOfferShadow p-5 rounded-2xl bg-white flex flex-wrap items-center justify-between gap-x-2 gap-y-10">
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                data
                    .slice(1, 22)
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
