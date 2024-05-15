import React from "react";
import { FaPhone } from "react-icons/fa6";

function FooterContainer() {
    return (
        <div className="flex justify-between m-12 container mx-auto ">
            <div className="flex ">
                <div className="mx-4">
                    <p className="text-base mb-5 primaryTransition hover:scale-105 cursor-default">
                        <span className="font-bold">راهنمای </span>خرید
                    </p>
                    <p className="mt-3 cursor-pointer text-neutral-800 primaryTransition hover:scale-105 ">
                        چگونگی ثبت سفارش
                    </p>
                    <p className="mt-3 cursor-pointer text-neutral-800 primaryTransition hover:scale-105 ">
                        چگونگی خرید کالا
                    </p>
                    <p className="mt-3 cursor-pointer text-neutral-800 primaryTransition hover:scale-105 ">
                        چگونکی پرداخت
                    </p>
                </div>
                <div className="mx-4">
                    <p className="text-base mb-5 primaryTransition hover:scale-105 cursor-default">
                        <span className="font-bold">خدمات </span>مشتریان
                    </p>
                    <p className="mt-3 cursor-pointer text-neutral-800 primaryTransition hover:scale-105">
                        چگونگی ثبت سفارش
                    </p>
                    <p className="mt-3 cursor-pointer text-neutral-800 primaryTransition hover:scale-105">
                        چگونگی خرید کالا
                    </p>
                    <p className="mt-3 cursor-pointer text-neutral-800 primaryTransition hover:scale-105">
                        چگونکی پرداخت
                    </p>
                </div>
                <div className="mx-4">
                    <p className="text-base mb-5 primaryTransition hover:scale-105 cursor-default">
                        <span className="font-bold">مجموعه </span>فروشگاه
                    </p>
                    <p className="mt-3 cursor-pointer text-neutral-800 primaryTransition hover:scale-105">
                        چگونگی ثبت سفارش
                    </p>
                    <p className="mt-3 cursor-pointer text-neutral-800 primaryTransition hover:scale-105">
                        چگونگی خرید کالا
                    </p>
                    <p className="mt-3 cursor-pointer text-neutral-800 primaryTransition hover:scale-105">
                        چگونکی پرداخت
                    </p>
                </div>
                <div className="mx-4">
                    <p className="text-base mb-5 primaryTransition hover:scale-105 cursor-default">
                        <span className="font-bold">نقشه ی </span>فروشگاه
                    </p>
                    <p className="mt-3 cursor-pointer text-neutral-800 primaryTransition hover:scale-105">
                        چگونگی ثبت سفارش
                    </p>
                    <p className="mt-3 cursor-pointer text-neutral-800 primaryTransition hover:scale-105">
                        چگونگی خرید کالا
                    </p>
                    <p className="mt-3 cursor-pointer text-neutral-800 primaryTransition hover:scale-105">
                        چگونکی پرداخت
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="bg-primaryGreen rounded-xl p-2 text-white mb-3 primaryTransition hover:scale-105 cursor-pointer">
                    <p>
                        کارشناسان ما{" "}
                        <span className="font-bold">میزبان صدایتان</span> هستند
                        ❤
                    </p>
                </div>
                <div className="flex justify-center">
                    <span className="cursor-default">021-44000</span>
                    <FaPhone className="text-primaryGreen font-bold mr-1 mt-1" />
                </div>
            </div>
        </div>
    );
}

export default FooterContainer;
