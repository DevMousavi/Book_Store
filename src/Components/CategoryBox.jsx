import React, { useEffect, useState } from "react";
import { api } from "./../server/config.js";
import { NavLink } from "react-router-dom";
import { RiDiscountPercentFill } from "react-icons/ri";

const CategoryBox = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/category");
                setData(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <h1>loading</h1>
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

                    <li>
                        <NavLink
                            to="/kids_and_teens"
                            className="px-2 py-1 bg-white rounded-lg primaryTransition hover:bg-gray-600 hover:text-white hover:font-bold"
                        >
                            {data[0].title}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/adults_products"
                            className="px-2 py-1 bg-white rounded-lg primaryTransition hover:bg-gray-600 hover:text-white hover:font-bold"
                        >
                            {data[1].title}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/educational"
                            className="px-2 py-1 bg-white rounded-lg primaryTransition hover:bg-gray-600 hover:text-white hover:font-bold"
                        >
                            {data[2].title}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/best_sellers"
                            className="px-2 py-1 bg-white rounded-lg primaryTransition hover:bg-gray-600 hover:text-white hover:font-bold"
                        >
                            {data[3].title}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/english_products"
                            className="px-2 py-1 bg-white rounded-lg primaryTransition hover:bg-gray-600 hover:text-white hover:font-bold"
                        >
                            {data[4].title}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/educational"
                            className="px-2 py-1 bg-white rounded-lg primaryTransition hover:bg-gray-600 hover:text-white hover:font-bold"
                        >
                            {data[5].title}
                        </NavLink>
                    </li>
                </ul>
            )}
        </>
    );
};

export default CategoryBox;
