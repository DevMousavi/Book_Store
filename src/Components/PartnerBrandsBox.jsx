import React from "react";
import useFetchData from "./../Hooks/useFetchData.js";
import Loader from "./Loader/Loader.jsx";

const PartnerBrandsBox = () => {
    const { data, isLoading } = useFetchData("/partner_brands");
    return (
        <div
            className="as:w-[95%] as:mx-auto text-black af:hidden as:flex as:flex-wrap  as:flex-row md:w-full mx-auto sm:justify-around md
        
        xl:justify-between items-center mb-9 mt-3 as:px-3 md:px-12 py-7 rounded-md bg-white border border-solid border-primaryGreen cardOfferShadow"
        >
            {isLoading ? (
                <div className="w-full h-24 flex items-center justify-center">
                    <Loader />
                </div>
            ) : (
                data.map((item) => (
                    <div
                        className="font-bold cardOfferShadow py-10 px-10 as:w-full sm:w-56 text-center as:mb-3 rounded-3xl bg-white"
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
