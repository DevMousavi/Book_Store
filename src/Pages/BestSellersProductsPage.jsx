import React, { useState } from "react";
import Header from "../LayOut/Header.jsx";
import FilterBox from "../Components/FilterBox.jsx";
import ContainerProductList from "../Components/ContainerProductList.jsx";
import Pagination from "../Components/Pagination.jsx";
import Footer from "../LayOut/Footer.jsx";

const BestSellersProductsPage = () => {
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <>
            <Header />
            <main className="container w-full justify-between my-12 py-4 px-7 flex flex-row">
                <FilterBox />
                <ContainerProductList
                    url="/best_sellers"
                    pageNumber={pageNumber}
                />
            </main>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
            <Footer />
        </>
    );
};

export default BestSellersProductsPage;
