import React, { useState } from "react";
import Header from "../LayOut/Header.jsx";
import FilterBox from "../Components/FilterBox.jsx";
import ContainerProductList from "../Components/ContainerProductList.jsx";
import Pagination from "../Components/Pagination.jsx";
import Footer from "../LayOut/Footer.jsx";

const AdultsProductsPage = () => {
    const [pageNumber, setPageNumber] = useState(1);

    const [reset, setReset] = useState(false);
    const [category, setCategory] = useState("");
    const [mostPopular, setMostPopular] = useState(false);

    return (
        <>
            <Header />
            <main className="container w-full justify-between my-12 py-4 px-7 flex flex-row">
                <FilterBox
                    setCategory={setCategory}
                    category={category}
                    reset={reset}
                    setReset={setReset}
                    setPageNumber={setReset}
                />

                <ContainerProductList
                    url={"/adults"}
                    pageNumber={pageNumber}
                    setCategory={setCategory}
                    category={category}
                    setReset={setReset}
                    reset={reset}
                />
            </main>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
            <Footer />
        </>
    );
};

export default AdultsProductsPage;
