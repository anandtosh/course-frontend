import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcon } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const ButtonLink = ({ to, icon, title, subtitle, isActive,className }) => {
    return (
        <Link
            to={to}
            className={
                clsx(
                    "flex items-center py-2 justify-between hover:text-blue-600 dark:hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-gray-950",
                    isActive ? 'border-l-[5px] border-blue-600 text-blue-600 bg-gray-200 dark:bg-gray-950 my-2 px-[14px]' : 'text-gray-600 dark:text-gray-200 my-2 px-[20px]',
                    className
                )
            }
        >
            <div className="flex items-center">
                <FontAwesomeIcon icon={icon} className="mr-2" size={'1x'} />
                <div>
                    <h3 className="text-md font-semibold">{title}</h3>
                    <p className={clsx("text-sm text-gray-600 dark:text-gray-300",isActive && 'dark:text-gray-600')}>{subtitle}</p>
                </div>
            </div>
        </Link>
    );
};

export default ButtonLink;
