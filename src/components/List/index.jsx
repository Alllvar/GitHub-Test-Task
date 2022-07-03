import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

export default function List ({ data, isUserslist }) {
    console.log(data, 'datatatatat')
    const renderUsers = () => data.map((item) => {
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

    const renderRepos = () => data.items.map(item => {
        return (
            <li className="list-element" key={item.id} >
                <a className="list-element-link" href={item.clone_url}>
                    <h5 className="repos-name">{item.name}</h5>
                    <div className="repo-info-wrap">
                        <span className="forks-wrap">{item.forks} Forks</span>
                        <span className="forks-wrap">{item.stargazers_count} Stars</span>
                    </div>
                </a>
            </li>
        )
    })

    // eslint-disable-next-line default-case
    switch (isUserslist) {
        case true:
            return (
                <ul className="repos-container">
                    {renderUsers()}
                </ul>
            )
        case false:
            return (
                <ul className="repos-container">
                    {renderRepos()}
                </ul>
            )
    }
}