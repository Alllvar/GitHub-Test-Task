import React  from 'react';
import { Link, useParams } from 'react-router-dom';
import './index.scss'
import { SearchBar } from '../SearchBar';
import { useGetUserRepos } from '../../api/getUserRepos';
import { renderRepos } from '../ReposList';

export default function UserPage () {
    const params = useParams()
    const { repos, reposLoading, setQuery, user, userLoading } = useGetUserRepos(params.id)


    if (userLoading || reposLoading) {
        return <span className="loading">Loading...</span>
    }

    if (!user || !repos) {
        return <span className="loading">Failed to load data</span>
    }

    return (
        <div className="user-container">
            <Link to="/"><span className="back-link">Back to users list</span></Link>
            <h1>GitHub Searcher</h1>
            <div className="user-info-container">
                <img className="avatar-image" src={user.avatar_url} alt={`avatar-${user.login}`} />
                <ul className="user-list-info">
                    <li className="user-list-element">Name: {user.name}</li>
                    <li className="user-list-element">Email: {user.email}</li>
                    <li className="user-list-element">Location: {user.location}</li>
                    <li className="user-list-element">Join Date: {new Date(user.created_at).toLocaleDateString("en-US")}</li>
                    <li className="user-list-element">{user.followers} Followers</li>
                    <li className="user-list-element">Following {user.following}</li>
                </ul>
            </div>
            <p className="bio">{user.bio}</p>
            <SearchBar setQuery={setQuery} />
            <ul className="repos-container">
                {renderRepos(repos)} />
            </ul>
        </div>
    )
}