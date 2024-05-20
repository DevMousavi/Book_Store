import React from "react";

import banner_1 from "./../assets/middle-offers/1.jfif";
import banner_2 from "./../assets/middle-offers/2.png";
import banner_3 from "./../assets/middle-offers/3.png";
import banner_4 from "./../assets/middle-offers/4.jfif";

function MiddleBanners() {
    return (
        <div className="af:hidden as:flex flex-row-reverse justify-around mb-6 flex-wrap">
            <img
                src={banner_1}
                alt="offer-banner"
                className="md:h-36 md:w-56 af:h-28 af:w-36 af:my-5 rounded-3xl cursor-pointer"
            />
            <img
                src={banner_2}
                alt="offer-banner"
                className="md:h-36 md:w-56 af:h-28 af:w-36 af:my-5 rounded-3xl cursor-pointer"
            />
            <img
                src={banner_3}
                alt="offer-banner"
                className="md:h-36 md:w-56 af:h-28 af:w-36 af:my-5 rounded-3xl cursor-pointer"
            />
            <img
                src={banner_4}
                alt="offer-banner"
                className="md:h-36 md:w-56 af:h-28 af:w-36 af:my-5 rounded-3xl cursor-pointer"
            />
        </div>
    );
}

export default MiddleBanners;
