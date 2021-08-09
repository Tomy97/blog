import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
    const [status, setStatus] = useState({
        data: [],
        limit: 10,
        activePage: 1
    });

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${status.limit}`)
            .then((res) => {
                setStatus((prev) => ({
                    ...prev,
                    data: res.data
                }));
            })
            .catch((error) => console.log(error));
    }, [status.limit])

    const handlePageChange = (pageNumber) => {
        setStatus((prev) => ({ ...prev, activePage: pageNumber }));
        axios
            .get(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}`)
            .then((res) => {
                setStatus((prev) => ({
                    ...prev,
                    data: res.data
                }));
            })
            .catch((error) => console.log(error));
    };

    return {
        state: status,
        setStatus,
        handlePageChange
    }
}

export default useFetch;
