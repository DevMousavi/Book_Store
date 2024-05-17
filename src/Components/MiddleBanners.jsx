import React from "react";

function MiddleBanners() {
    return (
        <div className="af:hidden as:flex flex-row-reverse justify-around mb-6 flex-wrap">
            <img
                src="./../src/assets/middle-offers/1.jfif"
                alt="offer-banner"
                className="md:h-36 md:w-56 af:h-28 af:w-36 af:my-5 rounded-3xl cursor-pointer"
            />
            <img
                src="./../src/assets/middle-offers/2.png"
                alt="offer-banner"
                className="md:h-36 md:w-56 af:h-28 af:w-36 af:my-5 rounded-3xl cursor-pointer"
            />
            <img
                src="./../src/assets/middle-offers/3.png"
                alt="offer-banner"
                className="md:h-36 md:w-56 af:h-28 af:w-36 af:my-5 rounded-3xl cursor-pointer"
            />
            <img
                src="./../src/assets/middle-offers/4.jfif"
                alt="offer-banner"
                className="md:h-36 md:w-56 af:h-28 af:w-36 af:my-5 rounded-3xl cursor-pointer"
            />
        </div>
    );
}

export default MiddleBanners;
