import React, { useEffect, useState } from "react";
import { api } from "./../server/config.js";
import { NavLink } from "react-router-dom";

const CategoryBox = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/category");
                setData(response);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <ul>
            <li>
                <NavLink to="/sdd">{data[0].title}</NavLink>
            </li>
            <li>
                <NavLink to="/sddfgdfd">{data[1].title}</NavLink>
            </li>
            <li>
                <NavLink to="/sdfgfdgdd">{data[2].title}</NavLink>
            </li>
            <li>
                <NavLink to="/sdfgdfgdd">{data[3].title}</NavLink>
            </li>
            <li>
                <NavLink to="/sdgdgdd">{data[4].title}</NavLink>
            </li>
        </ul>
    );
};

export default CategoryBox;
