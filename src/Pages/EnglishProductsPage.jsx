import React, { useState } from "react";
import Header from "../LayOut/Header.jsx";
import FilterBox from "../Components/FilterBox.jsx";
import ContainerProductList from "../Components/ContainerProductList.jsx";
import Pagination from "../Components/Pagination.jsx";
import Footer from "../LayOut/Footer.jsx";

const EnglishProductsPage = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [reset, setReset] = useState(false);
    const [category, setCategory] = useState("");

    return (
        <>
            <Header />
            <main className="af:hidden as:w-full as:flex-col lg:flex-row lg:gap-3 md:container justify-between my-12 py-4 px-7 as:flex flex-row">
                <FilterBox
                    setCategory={setCategory}
                    setReset={setReset}
                    setPageNumber={setPageNumber}
                />
                <ContainerProductList
                    url="/english_products"
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

export default EnglishProductsPage;
