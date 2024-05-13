import { useEffect, useState } from "react";
import { api } from "../server/config.js";

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(url);
                setData(response);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return { data, isLoading };
};

export default useFetchData;
