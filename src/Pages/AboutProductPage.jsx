import React from "react";
import Header from "../LayOut/Header.jsx";
import { useParams } from "react-router-dom";

const AboutProductPage = (props) => {
    const params = useParams();
    console.log(params);
    return (
        <>
            <Header />
            <main className="container bg-red-300 flex flex-row justify-between mt-10">
                <div className="bg-lightBlue w-[25%]"></div>
                <div className="bg-gray-300 w-[73%]">a</div>
            </main>
        </>
    );
};

export default AboutProductPage;
