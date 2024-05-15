import React from "react";

const FilterBox = () => {
    return (
        <div className="w-[21%] h-80 bg-white rounded-xl cardOfferShadow px-5 py-6">
            <h2 className="font-bold mb-10 text-center">فیلتر بر اساس:</h2>
            <div className="flex flex-col gap-4 items-center">
                <button className="bg-primaryPink text-white w-40 h-10 rounded-md cardOfferShadow primaryTransition hover:scale-105 ">
                    بیشترین قیمت
                </button>
                <button className="bg-primaryPink text-white w-40 h-10 rounded-md cardOfferShadow primaryTransition hover:scale-105 ">
                    کمترین قیمت
                </button>
                <button className="bg-primaryPink text-white w-40 h-10 rounded-md cardOfferShadow primaryTransition hover:scale-105 ">
                    محبوب ترین
                </button>
            </div>
        </div>
    );
};

export default FilterBox;
