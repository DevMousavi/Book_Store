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
        <>
            <div className="as:hidden lg:flex lg:flex-col w-[21%] h-80 bg-white rounded-xl cardOfferShadow px-5 py-6 relative">
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
            <div className="af:hidden as:flex lg:hidden as:flex-col">
                <h2 className="font-bold mb-2 -mt-8 text-right">
                    فیلتر بر اساس:
                </h2>
                <div className="mb-5 flex flex-row items-center justify-between">
                    <button
                        onClick={highestPriceHandler}
                        className="hover:text-primaryPink font-bold border border-gray-500 border-solid rounded-md px-2 py-2 bg-white"
                    >
                        بیشترین قیمت
                    </button>
                    <button
                        onClick={lowestPriceHandler}
                        className="hover:text-primaryPink font-bold border border-gray-500 border-solid rounded-md px-2 py-2 bg-white"
                    >
                        کمترین قیمت
                    </button>
                    <button
                        onClick={mostPopularHandler}
                        className="hover:text-primaryPink font-bold border border-gray-500 border-solid rounded-md px-2 py-2 bg-white"
                    >
                        محبوب ترین
                    </button>
                    <FaArrowsRotate
                        onClick={() => setReset(false)}
                        className=" text-primaryPink hover:text-primaryGreen w-5 h-5 cursor-pointer primaryTransition hover:rotate-[390deg]"
                    />
                </div>
            </div>
        </>
    );
};

export default FilterBox;
