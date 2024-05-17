import React, { useEffect, useState } from "react";
import CategoryBox from "../Components/CategoryBox.jsx";
import { Link } from "react-router-dom";
import LogoSRC from "./../assets/Logo.png";
import CancelICON from "./../assets/Cancel_Icon.png";

import { CiSearch } from "react-icons/ci";
import { FaStar, FaUser } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { api } from "../server/config.js";
import { FaBars } from "react-icons/fa";

import { useCart } from "../context/CartContext.jsx";
import CategoryBoxBar from "../Components/CategoryBoxBar.jsx";

const Header = () => {
    const [bar, setBar] = useState(false);
    const [data, setData] = useState([]);
    const [valueInput, setValueInput] = useState("");
    const [hiddenBox, setHiddenBox] = useState(true);

    console.log(bar);

    const searchHandler = (event) => {
        if (event.key === "Enter") setValueInput(event.target.value);
        if (event.key === "Enter") setHiddenBox(false);
        if (event.nativeEvent.keyCode == 8) setHiddenBox(true);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (valueInput !== "") {
                    const response = await api.get(
                        `/products?name=${valueInput}`
                    );
                    setData(response);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [valueInput]);

    const [state] = useCart();

    return (
        <>
            <header className="af:hidden md:flex w-full pt-6 bg-white relative">
                <div className="bg-primaryGreen w-full h-16 absolute top-0 z-10"></div>
                <div className="container flex flex-row items-center bg-white rounded-2xl px-2 md:py-0 xl:py-2 relative z-20 border-b border-solid border-gray-200">
                    <Link to="/" className="hover:scale-105 primaryTransition">
                        <img
                            src={LogoSRC}
                            alt="Logo.png"
                            className="md:w-12 xl:w-16"
                        />
                    </Link>
                    <div className="md:w-[30%] xl:w-[50%] md:h-11 xl:h-12 rounded-xl flex flex-row items-center bg-slate-200 mr-7">
                        <CiSearch className="w-9 h-24 " />
                        <input
                            type="text"
                            placeholder="محصول خود را جست و جو کنید..."
                            className="w-full h-full rounded-md px-2 outline-none bg-slate-200 md:text-xs xl:text-base"
                            onKeyDown={searchHandler}
                        />
                    </div>
                    <div className="md:mr-32 lg:mr-72 xl:mr-40 flex md:gap-4 xl:gap-0 flex-row justify-between w-[28%] md:h-16 xl:h-0 items-center">
                        <Link
                            to="/login"
                            className="flex items-center  flex-row gap-2 border border-black border-solid rounded-2xl px-5 py-3 hover:scale-105 primaryTransition"
                        >
                            <FaUser className="w-5 h-5" />
                            <p className="md:text-xs xl:text-base text-nowrap">
                                ثبت نام / ورود
                            </p>
                        </Link>
                        <Link
                            to="/cart"
                            className="flex flex-row gap-2 items-center bg-slate-200 rounded-2xl px-5 py-3 hover:scale-105 primaryTransition "
                        >
                            <IoMdCart className="w-6 h-6" />
                            <p className="md:text-xs xl:text-base text-nowrap">
                                سبدخرید
                            </p>
                            <p className="px-2 py-1 rounded-full priceShadow text-xs bg-white">
                                {state.itemsCount}
                            </p>
                        </Link>
                    </div>
                </div>
                <div
                    className={`container z-[200] absolute ${
                        hiddenBox ? "hidden" : "flex"
                    } top-[98px] left-0 right-0`}
                >
                    <div className="w-[80%] h-96 p-6 bg-white cardOfferShadow rounded-xl overflow-y-auto">
                        {data.map((item) => (
                            <Link
                                to={`/about_product/${item.category}/${item.id}`}
                                key={item.id}
                                className="flex flex-row items-center justify-between border rounded-md px-3 hover:scale-105 primaryTransition"
                            >
                                <img
                                    src={item.image}
                                    alt={`${item.name}.png`}
                                    className="w-24 rounded-full"
                                />
                                <p className="text-lg font-bold">{item.name}</p>
                                <span className="flex flex-row items-center justify-center gap-2 bg-orange-500 px-2 py-1 text-white rounded-lg ">
                                    <p>
                                        {`${data[0].specifications.score} از 5`}
                                    </p>
                                    <FaStar />
                                </span>
                                <span className="flex flex-row gap-1 items-center">
                                    <p className="font-bold">{item.price}</p>
                                    <p className="text-gray-600 text-xs">
                                        تومان
                                    </p>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
            <div className="as:hidden md:flex w-full bg-white mt-0 headerShadow sticky top-0 z-50">
                <CategoryBox />
            </div>
            {/* ===============================Responsive================================== */}
            <header className="af:hidden as:flex as:flex-col md:hidden">
                <div className="as:flex flex-row-reverse w-full items-center justify-between mt-4 px-4">
                    <Link
                        to="/login"
                        className="flex items-center  flex-row gap-2 border border-black border-solid rounded-2xl px-2 py-2 hover:scale-105 primaryTransition"
                    >
                        <FaUser className="w-4 h-4" />
                    </Link>
                    <Link to="/" className="hover:scale-105 primaryTransition">
                        <img
                            src={LogoSRC}
                            alt="Logo.png"
                            className="w-[40%] mx-auto"
                        />
                    </Link>
                    <FaBars
                        onClick={() => setBar(true)}
                        className="w-5 h-5 hover:rotate-[540deg] primaryTransition"
                    />
                </div>
            </header>
            <div className="af:hidden as:flex as:flex-row md:hidden bg-slate-100 py-2 headerShadow z-50 h-16 as:items-center as:justify-between mt-5 px-4 sticky top-0">
                <div className="as:w-[80%] md:h-8 as:h-full rounded-xl flex flex-row items-center bg-slate-200 ">
                    <CiSearch className="w-9 h-24 " />
                    <input
                        type="text"
                        placeholder="محصول خود را جست و جو کنید..."
                        className="w-full h-full rounded-md px-2 outline-none bg-slate-200 md:text-xs xl:text-base"
                        onKeyDown={searchHandler}
                    />
                </div>
                <Link
                    to="/cart"
                    className="flex flex-row gap-2 as:w-10 sm:w-[10%] h-full items-center justify-center border border-solid  border-black rounded-2xl  hover:scale-105 primaryTransition relative"
                >
                    <IoMdCart className=" w-6 h-6 " />

                    <p className="px-1 py-0 flex items-center justify-center rounded-lg priceShadow text-sm bg-primaryPink text-white absolute bottom-0 right-0  ">
                        {state.itemsCount}
                    </p>
                </Link>
            </div>
            <div
                className={`w-full bg-white z-50 fixed top-0 ${
                    bar ? "flex flex-col" : "hidden"
                }`}
            >
                <span className="flex w-full flex-row items-center justify-between bg-green-500 px-4 py-3">
                    <Link to="/">
                        <img
                            src={LogoSRC}
                            alt="logo.png"
                            className="w-10 hover:scale-105 primaryTransition "
                        />
                    </Link>
                    <img
                        src={CancelICON}
                        alt="Cancel_Icon.png"
                        className="w-7 primaryTransition hover:rotate-[540deg] rounded-full"
                        onClick={() => setBar(false)}
                    />
                </span>
                <div>
                    <CategoryBoxBar />
                </div>
            </div>
        </>
    );
};

export default Header;
