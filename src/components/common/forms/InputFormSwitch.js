import React from 'react';
import { useField, ErrorMessage } from 'formik';
import { Switch } from '@headlessui/react';
import clsx from 'clsx';

// Helper checkbox input component using Headless UI Switch
const CheckboxInput = ({ label, name, ...inputProps }) => {
    const [field, meta, helpers] = useField({ name, type: 'checkbox' });

    const handleChange = () => {
        helpers.setValue(!field.value);
    };

    return (
        <div className="flex items-center">
            <Switch
                checked={field.value}
                onChange={handleChange}
                className={`${field.value ? 'bg-green-500' : 'bg-gray-300/50'}
                    relative inline-flex h-[24px] w-[46px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span
                    aria-hidden="true"
                    className={`${field.value ? 'translate-x-6' : 'translate-x-0'} pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    );
};

const InputFormSwitch = ({ label, name, icon, className, ...inputProps }) => {
    return (
        <div className={clsx("flex flex-row justify-between items-center min-h-[50px] p-3", className)}>
            <div className="">
                {icon && (
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        {icon}
                    </span>
                )}
                {label && (
                    <label htmlFor={name} className="block text-sm font-medium text-gray-900 dark:text-white">
                        {label}
                    </label>
                )}
            </div>
            <div className="">
                <CheckboxInput name={name} {...inputProps} />
            </div>
            <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
        </div>
    );
};

export default InputFormSwitch;
