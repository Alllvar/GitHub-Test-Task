import { useEffect, useState } from "react";
import { useDebounce } from '../hooks/useDebounce';
import { useGetUser } from './getUser';

export const useGetUserRepos = (userId) => {
    const [query, setQuery] = useState('')
    const debouncedValue = useDebounce(query, 300);
    const [repos, setRepos] = useState(null)
    const [reposLoading, setReposLoading] = useState(true);
    const { data: user, loading: userLoading } = useGetUser(userId)

    const getUserRepos = async () => {
        try {
            const response = await fetch(
                `https://api.github.com/search/repositories?q=${debouncedValue}+in:name+user:${user?.login}`
            );

            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }

            let actualData = await response.json()
            setRepos(actualData);
        } finally {
            setReposLoading(false);
        }
    }

    useEffect(
        () => {
            if (user?.login) {
                getUserRepos(debouncedValue)
            }
        }, [debouncedValue, user?.login]
    );


    return { repos, reposLoading, setQuery, user, userLoading };
};


