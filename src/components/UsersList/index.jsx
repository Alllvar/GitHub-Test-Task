import { Link } from 'react-router-dom';
import React from 'react';

export const renderUsers = (data) => data.map((item) => {
    return (
        <li className="list-element" key={item.id}>
            <Link className="list-element-link" to={`/users/${item.id}`}>
                <img className="avatar-list-image" src={item.avatar_url} alt={`avatar-${item.login}`} />
                <p>{item.login}</p>
                <h3>Repo: ##</h3>
            </Link>
        </li>
    )
})