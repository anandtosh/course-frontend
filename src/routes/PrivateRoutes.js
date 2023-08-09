import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import UserProfileEditor from '../pages/settings/profile';

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>} >
                <Route path='/profile' element={<UserProfileEditor/>} />
            </Route>
        </Routes>
    )
}

export default PrivateRoutes