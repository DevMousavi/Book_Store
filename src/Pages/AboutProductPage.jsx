import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../Hooks/useFetchData.js";
import Header from "../LayOut/Header.jsx";

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
            <main className="container bg-red-300 flex flex-row justify-between mt-10">
                {isLoading ? (
                    <h2>Loading</h2>
                ) : (
                    <>
                        <div className="bg-lightBlue w-[25%]"></div>
                        <div className="bg-gray-300 w-[73%]">a</div>
                    </>
                )}
            </main>
        </>
    );
};

export default AboutProductPage;
