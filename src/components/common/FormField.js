import React from 'react';
import { Field, ErrorMessage } from 'formik';
import clsx from 'clsx';

const FormField = ({ label, name, type, icon, ...inputProps }) => {
    return (
        <div className='grid grid-col-1'>
            {
                label &&
                <label htmlFor={name} className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    {label}
                </label>
            }
            <div class="flex">
                {
                    icon &&
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        {icon}
                    </span>
                }
                <Field
                    id={name}
                    name={name}
                    type={type}
                    className={clsx(
                        icon ?
                            "rounded-none rounded-r-lg bg-gray-50 border outline-none text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            :
                            "bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    )}
                    {...inputProps}
                />
            </div>
            <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
        </div>
    );

};

export default FormField;
