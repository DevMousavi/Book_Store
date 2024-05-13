import React from "react";
import Header from "../LayOut/Header.jsx";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const ErrorHandler = () => {
    return (
        <>
            <Header />
            <main className="flex flex-col container justify-center items-center gap-10">
                <img
                    src="./../src/assets/404.png"
                    alt="404.png"
                    className="w-[40%] mt-7"
                />
                <div className="flex flex-col justify-center items-center gap-6">
                    <p className="text-gray-600 font-bold">
                        متاسفم! صفحه ای که به دنبال آن می گردید یافت نشد
                    </p>
                    <Link className="bg-primaryPink text-white font-bold w-40 text-xl h-12 rounded-xl cardOfferShadow flex justify-center gap-2 items-center primaryTransition hover:scale-105 ">
                        صفحه اصلی
                        <TiArrowBack />
                    </Link>
                </div>
            </main>
        </>
    );
};

export default ErrorHandler;
