import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NavbarMain from './NavbarMain';

const MainLayout = () => {
    return (
        <>
        <NavbarMain/>
        <div className="flex h-[calc(100vh-80px)]">

            {/* {sidebar()} */}
            
            <main className="flex-grow">
                {/* Content */}
                <Outlet />
            </main>
        </div>
        </>
    );

    function sidebar() {
        return <aside className="w-64 bg-gray-200">
            <div className="p-4">
                {/* Logo */}
                <div className="flex items-center mb-4">
                    <span className="text-xl font-bold">Logo</span>
                </div>
            </div>
            <nav className="p-4 flex flex-col">
                {/* Sidebar Menu */}
                <ul>
                    <li className="mb-2">
                        <Link to="/" className="flex items-center">
                            <FontAwesomeIcon icon={faHome} className="mr-2 w-[20px]" /> <span className="ml-2">Home</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/about" className="flex items-center">
                            <FontAwesomeIcon icon={faInfo} className="mr-2 w-[20px]" /> <span className="ml-2">About</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        {/* Dropdown Menu */}
                        <details>
                            <summary className="flex items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-[20px]" /> <span className="ml-2">Contact</span>
                            </summary>
                            <ul className="ml-4">
                                <li>
                                    <Link to="/contact" className="flex items-center">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact/support" className="flex items-center">
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </nav>
        </aside>;
    }
};

export default MainLayout;
