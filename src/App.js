import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersList from './components/UsersPage';
import UserPage from './components/UserPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UsersList />} />
                <Route path="/users/:id" element={<UserPage />} />
            </Routes>
        </BrowserRouter>
    );
}