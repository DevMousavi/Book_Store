import React, { useState } from "react";
import Header from "../LayOut/Header.jsx";
import Pagination from "../Components/Pagination.jsx";
import ContainerProductListOffer from "../Components/ContainerProductListOffer.jsx";
import Footer from "../LayOut/Footer.jsx";

const OfferProductsPage = () => {
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <>
            <Header />
            <main className="md:container justify-between my-12 py-4 px-7 flex flex-row">
                <ContainerProductListOffer
                    url="/offer"
                    pageNumber={pageNumber}
                />
            </main>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
            <Footer />
        </>
    );
};

export default OfferProductsPage;
