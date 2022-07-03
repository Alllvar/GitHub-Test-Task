import React from 'react';
import './index.scss'

export const renderRepos = (data) => data.items.map(item => {
    console.log(data)
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