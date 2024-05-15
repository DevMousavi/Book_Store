import React, { useEffect, useState } from "react";
import CategoryBox from "../Components/CategoryBox.jsx";
import { Link } from "react-router-dom";
import LogoSRC from "./../assets/Logo.png";

import { CiSearch } from "react-icons/ci";
import { FaStar, FaUser } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { api } from "../server/config.js";

const Header = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [valueInput, setValueInput] = useState("");
    const [hiddenBox, setHiddenBox] = useState(true);

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

    return (
        <>
            <header className="w-full pt-6  bg-white relative">
                <div className="bg-primaryGreen w-full h-16 absolute top-0 z-10"></div>
                <div className="container flex flex-row items-center bg-white rounded-2xl px-2 relative z-20 border-b border-solid border-gray-200">
                    <Link to="/" className="hover:scale-105 primaryTransition">
                        <img src={LogoSRC} alt="Logo.png" />
                    </Link>
                    <div className="w-[50%] h-12 rounded-xl flex flex-row items-center bg-slate-200 mr-7">
                        <CiSearch className="w-9 h-24 " />
                        <input
                            type="text"
                            placeholder="محصول خود را جست و جو کنید..."
                            className="w-full h-11 rounded-md px-2 outline-none bg-slate-200"
                            onKeyDown={searchHandler}
                        />
                    </div>
                    <div className="mr-40 flex flex-row justify-between w-[28%] items-center">
                        <Link
                            to="/login"
                            className="flex items-center  flex-row gap-2 border border-black border-solid rounded-2xl px-5 py-3 hover:scale-105 primaryTransition"
                        >
                            <FaUser className="w-5 h-5" />
                            <p>ثبت نام / ورود</p>
                        </Link>
                        <Link
                            to="/cart"
                            className="flex flex-row gap-2 items-center bg-slate-200 rounded-2xl px-5 py-3 hover:scale-105 primaryTransition "
                        >
                            <IoMdCart className="w-6 h-6" />
                            <p> سبدخرید</p>
                            <p className="px-2 py-1 rounded-full priceShadow text-xs bg-white">
                                0
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
            <div className="w-full bg-white mt-0 headerShadow sticky top-0 z-50">
                <CategoryBox />
            </div>
        </>
    );
};

export default Header;
