import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce'

export const useGetUsers = () => {
    const [query, setQuery] = useState('')
    const debouncedValue = useDebounce(query, 300);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async (debouncedValue) => {
        try {
            const response = await fetch(
                `https://api.github.com/search/users?q=${debouncedValue}+in:login`
            );
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            let actualData = await response.json();
            setData(actualData.items);
        } finally {
            setLoading(false);
        }
    }

    useEffect(
        () => {
            getData(debouncedValue)
        }, [debouncedValue]
    );

    return { data, loading, setQuery };
};


