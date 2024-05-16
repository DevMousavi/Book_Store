import React from "react";
import useFetchData from "./../Hooks/useFetchData.js";
import Loader from "./Loader/Loader.jsx";

const PartnerBrandsBox = () => {
    const { data, isLoading } = useFetchData("/partner_brands");
    return (
        <div className="text-black flex flex-row w-full mx-auto justify-between items-center mb-9 mt-3 px-52 py-7 rounded-md bg-white border border-solid border-primaryGreen cardOfferShadow">
            {isLoading ? (
                <div className="w-full h-24 flex items-center justify-center">
                    <Loader />
                </div>
            ) : (
                data.map((item) => (
                    <div
                        className="font-bold cardOfferShadow py-10 px-10 rounded-3xl bg-white"
                        key={item.id}
                    >
                        {item.title}
                    </div>
                ))
            )}
        </div>
    );
};

export default PartnerBrandsBox;
