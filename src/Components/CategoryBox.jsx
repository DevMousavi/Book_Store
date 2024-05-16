import React from "react";
import { NavLink } from "react-router-dom";
import { RiDiscountPercentFill } from "react-icons/ri";
import useFetchData from "../Hooks/useFetchData.js";

const CategoryBox = () => {
    const { data, isLoading } = useFetchData("/category");

    return (
        <>
            {isLoading ? (
                <div className="w-full h-12 flex items-center justify-center"></div>
            ) : (
                <ul className="flex flex-row justify-between w-[60%] px-5 bg-gray-200 rounded-bl-2xl rounded-br-2xl h-14  items-center mx-auto">
                    <li>
                        <NavLink
                            to="/offers"
                            className="px-2 flex flex-row gap-2 items-center py-1 text-red-700 font-bold bg-yellow-200 rounded-lg primaryTransition hover:bg-green-200"
                        >
                            <RiDiscountPercentFill className="text-2xl" />
                            تخفیفات ویژه
                        </NavLink>
                    </li>
                    {data.map((item) => (
                        <li key={item.id}>
                            <NavLink
                                to={`/${item.href}`}
                                className="px-2 py-1 bg-white rounded-lg primaryTransition hover:bg-gray-600 hover:text-white hover:font-bold"
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default CategoryBox;
