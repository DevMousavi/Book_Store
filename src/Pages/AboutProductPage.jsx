import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../Hooks/useFetchData.js";
import Header from "../LayOut/Header.jsx";
import { IoStorefrontSharp } from "react-icons/io5";
import { ImTruck } from "react-icons/im";
import { checkKeyInObject } from "../Helper/checkKeyInObject.js";
import { IoIosCheckmark } from "react-icons/io";
import { LuShoppingBasket } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { MdFactory } from "react-icons/md";

const AboutProductPage = () => {
    const params = useParams();
    console.log(params);

    const { data, isLoading } = useFetchData(
        `${params.category}?id=${params.id}`
    );
    console.log(data);

    return (
        <>
            <Header />
            <main className="container bg-slate-100 flex flex-row justify-between my-10">
                {isLoading ? (
                    <h2>Loading</h2>
                ) : (
                    <>
                        <div className="cardOfferShadow  bg-white rounded-xl w-[25%] h-[470px] flex flex-col px-4 py-6">
                            <img
                                src={data[0].image}
                                alt={`${data[0].name}.png`}
                                className="w-full"
                            />
                            <span className="flex flex-row gap-1 items-center my-3">
                                <span className="flex flex-row-reverse items-center gap-2">
                                    <p className="font-bold">فروشنده:</p>
                                    <IoStorefrontSharp className="w-6 h-6 text-primaryGreen" />
                                </span>
                                <p className="text-gray-600">
                                    {data[0].specifications.seller}
                                </p>
                            </span>
                            <span className="flex flex-row gap-2 items-center">
                                <ImTruck className="w-6 h-6 text-primaryGreen" />
                                <p>آماده ارسال</p>
                                <IoIosCheckmark className="w-7 h-7 text-primaryPink" />
                            </span>
                            <div className="flex flex-row items-center justify-between">
                                <span className="flex flex-row justify-center items-center gap-1">
                                    {checkKeyInObject(
                                        data[0],
                                        "final_price"
                                    ) ? (
                                        <p className="font-bold">
                                            {data[0].final_price}
                                        </p>
                                    ) : (
                                        <p className="font-bold">
                                            {data[0].price}
                                        </p>
                                    )}
                                    <p className="text-gray-600">تومان</p>
                                </span>
                                <Link
                                    to="/cart"
                                    className="bg-primaryPink text-base text-white w-[59%] cardOfferShadow h-11 flex justify-center gap-1 items-center rounded-lg primaryTransition hover:scale-105 hover:bg-primaryGreen "
                                >
                                    <p>افزون به سبد خرید</p>
                                    <LuShoppingBasket />
                                </Link>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white cardOfferShadow py-5 px-10 w-[73%] flex flex-col">
                            <h1 className="text-3xl font-bold">
                                {data[0].name}
                            </h1>
                            <div className="my-2 flex items-center justify-between pb-1 border-b-[1px] border-primaryGreen">
                                <span className="text-gray-600">
                                    {checkKeyInObject(
                                        data[0].specifications,
                                        "writer"
                                    ) ? (
                                        <p>{`اثری از ${data[0].specifications.writer}`}</p>
                                    ) : (
                                        <p>{null}</p>
                                    )}
                                </span>

                                <span className="flex flex-row items-center justify-center gap-2 bg-orange-500 px-2 py-1 text-white rounded-lg">
                                    <p>
                                        {`${data[0].specifications.score} از 5`}
                                    </p>
                                    <FaStar />
                                </span>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <MdFactory className="w-6 h-6 text-primaryGreen" />
                                <h5 className="my-3 font-bold">تولید کننده:</h5>
                                <h4 className="text-gray-600">
                                    {data[0].specifications.producer}
                                </h4>
                            </div>
                            <div className="mt-3 w-[40%]">
                                <h3 className="font-bold text-xl mb-2">
                                    مشخصات:
                                </h3>
                                <div className="flex flex-row items-center justify-between text-gray-700">
                                    <span className="flex flex-col gap-2">
                                        <p>وزن:</p>
                                        <p>تعداد صفحات:</p>
                                    </span>
                                    <span className="text-primaryGreen">
                                        <p>
                                            ....................................
                                        </p>
                                        <p>
                                            ....................................
                                        </p>
                                    </span>
                                    <span className="flex flex-col gap-2">
                                        <p>
                                            گرم {data[0].specifications.weight}
                                        </p>
                                        <p>
                                            {
                                                data[0].specifications
                                                    .number_of_pages
                                            }
                                        </p>
                                    </span>
                                </div>
                                <div className="mt-6 font-bold text-xl flex flex-col">
                                    <h6>توضیحات:</h6>
                                    <p className="mt-2 text-base text-gray-600">
                                        {data[0].description}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full  my-14 text-primaryPink">
                                <h2 className="text-xl font-bold">
                                    دیدگاه کاربران...
                                </h2>
                                <div className="w-full">
                                    {data[0].comment.map((item) => (
                                        <div className="w-full mt-4 text-gray-700 bg-orange-100 px-6 py-10 border-2 border-dashed rounded-md border-blue">
                                            <span className="w-full flex flex-col gap-6 ">
                                                <h2 className="text-black font-bold text-sm">
                                                    کاربر ...
                                                </h2>
                                                <p className="">{item}</p>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </>
    );
};

export default AboutProductPage;
