import React from "react";
import Header from "../LayOut/Header.jsx";
import ContainerProductList from "../Components/ContainerProductList.jsx";
import FilterBox from "../Components/FilterBox.jsx";

const StationeryPage = () => {
    return (
        <>
            <Header />
            <main className="container w-full justify-between bg-slate-300 my-12 py-4 px-7 flex flex-row">
                <FilterBox />
                <ContainerProductList url="/stationery" />
            </main>
        </>
    );
};

export default StationeryPage;
