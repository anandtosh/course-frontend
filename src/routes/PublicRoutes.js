import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Home from '../pages/home';
import About from '../pages/about';
import Learning from '../pages/learning';
import Editor from '../pages/editor';
import NotFoundComponent from '../pages/not_found';
import CoursesView from '../pages/courses';
import SingleCourseView from '../pages/courses/course_view';
import FileFolderWriter from '../pages/editor/multi_model';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import VerificationCompleted from '../pages/auth/verification_completed';
import VerificationFailed from '../pages/auth/verification_failed';
import AuthLayout from '../components/layouts/AuthLayout';
import MyCourses from '../pages/my_courses';

const PublicRoutes = () => {
    return (
        <Routes>
            <Route element={<AuthLayout />} >
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Route>
            <Route path='/verification-completed' element={<VerificationCompleted />} />
            <Route path='/verification-failed' element={<VerificationFailed />} />
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<CoursesView />} />
                <Route path="/courses/:id" element={<SingleCourseView />} />
                <Route path="/learning/courses" element={<MyCourses />} />
                <Route path="/learning/courses/:id" element={<Learning />} />
                <Route path="/learning/courses/:id/lessons/:lesson_id" element={<Learning />} />
                {/* <Route path="/learning" element={<Learning/>} /> */}
                <Route path="/editor" element={<FileFolderWriter />} />
            </Route>
            <Route path="/*" element={<NotFoundComponent />} />
        </Routes>
    );
};

export default PublicRoutes;
