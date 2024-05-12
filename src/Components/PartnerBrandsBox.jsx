import React, { useEffect, useState } from "react";
import { api } from "../server/config";

const PartnerBrandsBox = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/partner_brands");
                setData(response);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="text-black flex flex-row w-full mx-auto justify-between items-center mb-9 mt-3 px-52 py-7 rounded-2xl border border-solid border-primaryGreen cardOfferShadow">
            {isLoading ? (
                <h1>Loading</h1>
            ) : (
                data.map((item) => (
                    <div
                        className="font-bold cardOfferShadow py-10 px-10 rounded-3xl"
                        key={item.id}
                    >
                        {item.title}
                    </div>
                ))
            )}
        </div>
    );
};

export default PartnerBrandsBox;
