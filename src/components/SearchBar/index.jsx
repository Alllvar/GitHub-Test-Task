import React from 'react';
import './index.scss'

export function SearchBar ({ setQuery }) {
    return (
        <input
            className="search-input"
            type="search"
            placeholder="Search for Users"
            onChange={event => setQuery(event.target.value)}
        />
    )
}