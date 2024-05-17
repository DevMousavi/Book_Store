import React from "react";

const Pagination = ({ setPageNumber, pageNumber }) => {
    const nexPageHandler = () => {
        setPageNumber(pageNumber + 1);
        if (pageNumber >= 5) {
            setPageNumber(5);
        }
    };

    const previousPageHandler = () => {
        setPageNumber(pageNumber - 1);
        if (pageNumber <= 1) {
            setPageNumber(1);
        }
    };

    return (
        <div className="af:hidden container mb-20 w-full as:flex flex-row gap-5 items-center justify-center">
            <button
                onClick={nexPageHandler}
                className="w-32 h-8 bg-white rounded-lg text-black cardOfferShadow font-bold primaryTransition hover:scale-105"
            >
                صفحه بعدی
            </button>
            <span className="flex flex-row items-end justify-center gap-2">
                <p className="font-bold text-primaryGreen">...</p>
                <p className="bg-primaryGreen px-2 py-1 rounded-full text-white font-bold">
                    {pageNumber}
                </p>
                <p className="font-bold text-primaryGreen">...</p>
            </span>
            <button
                onClick={previousPageHandler}
                className="w-32 h-8 bg-white rounded-lg text-black cardOfferShadow font-bold primaryTransition hover:scale-105 "
            >
                صفحه قبلی
            </button>
        </div>
    );
};

export default Pagination;
