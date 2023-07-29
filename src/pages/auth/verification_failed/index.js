// src/components/SuccessMessage.js
import { ShieldExclamationIcon } from '@heroicons/react/20/solid';
// import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const VerificationFailed = () => {
    return (
        <div className="flex items-center justify-center h-screen dark:bg-slate-400">
            <div className="flex flex-col items-center p-6 bg-white rounded shadow-md ">
                <div className='text-gray-700'>
                    anandbhatnagar.com
                </div>
                <ShieldExclamationIcon className='h-20 w-20 text-red-500' />
                <p className="text-xl font-semibold text-center text-gray-800">Email verification failed!</p>
                <p className='text-gray-600'>Either this verification link expired or invalid</p>
                <div className='flex flex-row gap-4'>
                    <Link to="/login" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Go to Login
                    </Link>
                    <Link to="/login" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Resend Link
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VerificationFailed;
