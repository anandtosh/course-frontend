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

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<CoursesView />} />
                <Route path="/courses/:id" element={<SingleCourseView />} />
                <Route path="/learning/courses/:id" element={<Learning />} />
                <Route path="/learning/courses/:id/lessons/:lesson_id" element={<Learning />} />
                {/* <Route path="/learning" element={<Learning/>} /> */}
                <Route path="/editor" element={<FileFolderWriter/>} />
                <Route path="/*" element={<NotFoundComponent/>} />
            </Route>
        </Routes>
    );
};

export default PublicRoutes;
