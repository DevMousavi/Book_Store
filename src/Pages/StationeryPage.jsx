import React, { useState } from "react";
import Header from "../LayOut/Header.jsx";
import ContainerProductList from "../Components/ContainerProductList.jsx";
import FilterBox from "../Components/FilterBox.jsx";
import Pagination from "../Components/Pagination.jsx";
import Footer from "../LayOut/Footer.jsx";

const StationeryPage = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [reset, setReset] = useState(false);
    const [category, setCategory] = useState("");

    return (
        <>
            <Header />
            <main className="container w-full justify-between  my-12 py-4 px-7 flex flex-row">
                <FilterBox setCategory={setCategory} setReset={setReset} />
                <ContainerProductList
                    url="/stationery"
                    pageNumber={pageNumber}
                    category={category}
                    reset={reset}
                />
            </main>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
            <Footer />
        </>
    );
};

export default StationeryPage;
