import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import UserProfileEditor from '../pages/settings/profile';
import MyCourses from '../pages/my_courses';
import Learning from '../pages/learning';

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />} >
                <Route path='/profile' element={<UserProfileEditor />} />
                <Route path="/enrollments" element={<MyCourses />} />
                <Route path="/enrollments/:enrollment_id" element={<Learning />} />
                <Route path="/enrollments/:enrollment_id/lessons/:lesson_id" element={<Learning />} />
            </Route>
        </Routes>
    )
}

export default PrivateRoutes