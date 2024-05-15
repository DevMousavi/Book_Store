import React, { useState } from "react";
import Header from "../LayOut/Header.jsx";
import ContainerProductList from "../Components/ContainerProductList.jsx";
import FilterBox from "../Components/FilterBox.jsx";
import Pagination from "../Components/Pagination.jsx";

const StationeryPage = () => {
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <>
            <Header />
            <main className="container w-full justify-between  my-12 py-4 px-7 flex flex-row">
                <FilterBox />
                <ContainerProductList
                    url="/stationery"
                    pageNumber={pageNumber}
                />
            </main>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </>
    );
};

export default StationeryPage;
