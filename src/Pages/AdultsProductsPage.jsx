import React, { useState } from "react";
import Header from "../LayOut/Header.jsx";
import FilterBox from "../Components/FilterBox.jsx";
import ContainerProductList from "../Components/ContainerProductList.jsx";
import Pagination from "../Components/Pagination.jsx";
import Footer from "../LayOut/Footer.jsx";

const AdultsProductsPage = () => {
    const [pageNumber, setPageNumber] = useState(1);

    const [reset, setReset] = useState(false);
    const [price, setPrice] = useState("");

    return (
        <>
            <Header />
            <main className="container w-full justify-between my-12 py-4 px-7 flex flex-row">
                <FilterBox
                    setPrice={setPrice}
                    price={price}
                    reset={reset}
                    setReset={setReset}
                    setPageNumber={setReset}
                />

                <ContainerProductList
                    url={"/adults"}
                    pageNumber={pageNumber}
                    setPrice={setPrice}
                    price={price}
                    reset={reset}
                    setReset={setReset}
                />
            </main>
            <Pagination pageNumber={pageNumber} />
            <Footer />
        </>
    );
};

export default AdultsProductsPage;
