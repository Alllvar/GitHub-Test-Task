import { useEffect, useState } from 'react';

export const useGetUser = (userId) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);

    const getUser = async () => {
        try {
            const response = await fetch(
                `https://api.github.com/user/${userId}`
            );

            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            let actualData = await response.json();
            setData(actualData);

        } finally {
            setLoading(false);
        }
    }

    useEffect(
        () => {
            if (userId) {
                getUser()
            }
        }, [userId]
    );

    return { data, loading };
};


