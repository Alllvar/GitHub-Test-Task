import React from 'react';
import { useGetUsers } from '../../api/getData'
import { SearchBar } from '../SearchBar'
import { renderUsers } from '../UsersList';
import './index.scss'

export default function UsersList () {
    const { data, loading, setQuery } = useGetUsers()

    if (loading) {
        return <div className="loading">Loading...</div>
    }

    if (!data) {
        return <div className="loading">Failed to load data</div>
    }

    console.log(data, 'data')

    return (
        <div className="users-list-container">
            <h1>GitHub Searcher</h1>
            <SearchBar setQuery={setQuery} />
            <ul className="users-container">
                {renderUsers(data)}
            </ul>
        </div>
    )
}