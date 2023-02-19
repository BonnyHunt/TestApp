import React, { useEffect, useState } from "react";

function useGetStudents(API) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    useEffect(() => {

            setIsLoading(true)
            fetch(API).then((res) => res.json())
            .then((isOnData) => setData(isOnData))
            .catch((isError) => setError(isError))
            .finally(() => setIsLoading(false))

    }, [])
    return {
        isLoading,
        data,
        error
    }
};

export { useGetStudents };