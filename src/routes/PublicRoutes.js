import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Home from '../pages/home';
import About from '../pages/about';

import CoursesView from '../pages/courses';
import SingleCourseView from '../pages/courses/course_view';
import FileFolderWriter from '../pages/editor/multi_model';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import VerificationCompleted from '../pages/auth/verification_completed';
import VerificationFailed from '../pages/auth/verification_failed';
import AuthLayout from '../components/layouts/AuthLayout';

import ResetPassword from '../pages/auth/reset_password';
import ForgotPassword from '../pages/auth/forgot_password';
import NotFoundComponent from '../pages/not_found';

const PublicRoutes = () => {
    return (
        <Routes>
            <Route element={<AuthLayout />} >
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/reset-password/:token' element={<ResetPassword/>} />
            </Route>
            <Route path='/verification-completed' element={<VerificationCompleted />} />
            <Route path='/verification-failed' element={<VerificationFailed />} />
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<CoursesView />} />
                <Route path="/courses/:id" element={<SingleCourseView />} />
                
                {/* <Route path="/learning" element={<Learning/>} /> */}
                <Route path="/editor" element={<FileFolderWriter />} />
            </Route>
            <Route path='*' element={<NotFoundComponent/>}/>
        </Routes>
    );
};

export default PublicRoutes;
