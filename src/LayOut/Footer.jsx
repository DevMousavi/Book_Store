import React from "react";
import FooterServicesList from "../Components/FooterServicesList";
import FooterContainer from "../Components/FooterContainer";

function Footer() {
    return (
        <div className="mt-20 ">
            <FooterServicesList />
            <FooterContainer />
        </div>
    );
}

export default Footer;
