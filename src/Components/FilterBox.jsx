import React from "react";
import { FaArrowsRotate } from "react-icons/fa6";

const FilterBox = ({ setCategory, setReset, setPageNumber }) => {
    const highestPriceHandler = () => {
        setCategory("highestPrice");
        setReset(true);
        setPageNumber(1);
    };
    const lowestPriceHandler = () => {
        setCategory("lowestPrice");
        setReset(true);
        setPageNumber(1);
    };

    const mostPopularHandler = () => {
        setCategory("MostPopular");
        setReset(true);
        setPageNumber(1);
    };

    return (
        <div className="w-[21%] h-80 bg-white rounded-xl cardOfferShadow px-5 py-6 relative">
            <h2 className="font-bold mb-10 text-center">فیلتر بر اساس:</h2>
            <div className="flex flex-col gap-4 items-center">
                <button
                    onClick={highestPriceHandler}
                    className="bg-primaryPink text-white w-40 h-10 rounded-md cardOfferShadow primaryTransition hover:scale-105 "
                >
                    بیشترین قیمت
                </button>
                <button
                    onClick={lowestPriceHandler}
                    className="bg-primaryPink text-white w-40 h-10 rounded-md cardOfferShadow primaryTransition hover:scale-105 "
                >
                    کمترین قیمت
                </button>
                <button
                    onClick={mostPopularHandler}
                    className="bg-primaryPink text-white w-40 h-10 rounded-md cardOfferShadow primaryTransition hover:scale-105 "
                >
                    محبوب ترین
                </button>
            </div>
            <FaArrowsRotate
                onClick={() => setReset(false)}
                className="absolute bottom-5 left-5 text-primaryPink hover:text-primaryGreen w-5 h-5 cursor-pointer primaryTransition hover:rotate-[390deg]"
            />
        </div>
    );
};

export default FilterBox;
