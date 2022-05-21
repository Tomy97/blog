import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
    const [status, setStatus] = useState({
        data: [],
        activePage: 1
    });

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${status.limit}`)
            .then(({ data }) => {
                setStatus((prev) => ({
                    ...prev,
                    data: data
                }));
            })
            .catch((error) => console.log(error));
    }, [status.limit])

    return {
        state: status,
        setStatus,
    }
}

export default useFetch;
