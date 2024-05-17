import React from "react";
import useFetchData from "../Hooks/useFetchData";
import { NavLink } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";
import { IoArrowBack } from "react-icons/io5";

const CategoryBoxBar = () => {
    const { data, isLoading } = useFetchData("/category");

    return (
        <div className="bg-white w-full h-[100vh]">
            {isLoading ? (
                <div className="w-full h-12 flex items-center justify-center">
                    loading
                </div>
            ) : (
                <ul className="flex flex-col gap-3 px-4 mt-2">
                    <li className="hover:bg-green-200 primaryTransitions rounded-2xl px-2">
                        <NavLink
                            to="/offers"
                            className="flex justify-between items-center py-1 text-red-700 font-bold rounded-lg primaryTransition"
                        >
                            <span className="flex flex-row gap-3 items-center">
                                <TbPointFilled />
                                تخفیفات ویژه
                            </span>
                            <IoArrowBack />
                        </NavLink>
                    </li>
                    {data.map((item) => (
                        <NavLink
                            key={item.id}
                            to={`/${item.href}`}
                            className="flex hover:bg-green-200 primaryTransitions rounded-2xl px-2 cursor-pointer"
                        >
                            <li className="flex items-center justify-between w-full text-nowrap md:text-xs lg:text-base py-1 rounded-lg primaryTransition ">
                                <span className="flex flex-row gap-3 items-center">
                                    <TbPointFilled />
                                    {item.title}
                                </span>
                                <IoArrowBack />
                            </li>
                        </NavLink>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoryBoxBar;
