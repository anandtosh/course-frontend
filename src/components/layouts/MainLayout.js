import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarMain from './NavbarMain';

const MainLayout = () => {
    return (
        <div className='flex flex-col h-screen overflow-x-hidden '>
            <NavbarMain />
            <main className='flex-grow h-full'>
                {/* <div className="mx-auto max-w-8xl py-6 sm:px-6 lg:px-8"> */}
                    <Outlet />
                {/* </div> */}
            </main>
            {/* <div className="flex h-[calc(100vh-4rem)]">
            <main className="flex-grow">
                <Outlet />
            </main>
            </div> */}
        </div>
    );
};

export default MainLayout;
