import React from "react";
import CategoryBox from "./CategoryBox.jsx";
import { Link } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";

const Header = () => {
    return (
        <>
            <header className="w-full pt-1 pb-1 bg-white">
                <div className="container flex flex-row items-center priceShadow bg-white rounded-3xl px-2">
                    <Link to="/" className="hover:scale-105 primaryTransition">
                        <img src="./../src/assets/Logo.png" alt="Logo.png" />
                    </Link>
                    <div className="w-[50%] h-12 rounded-xl flex flex-row items-center bg-slate-200 mr-7">
                        <CiSearch className="w-9 h-24 " />
                        <input
                            type="text"
                            placeholder="محصول خود را جست و جو کنید..."
                            className="w-full h-11 rounded-md px-2 outline-none bg-slate-200"
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
            </header>
            <div className="w-full bg-white mt-0 headerShadow sticky top-0">
                <CategoryBox />
            </div>
        </>
    );
};

export default Header;
