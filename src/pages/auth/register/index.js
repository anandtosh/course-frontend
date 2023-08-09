import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../../utility/apis';
import InputFormField from '../../../components/common/forms/InputFormField';
import { EnvelopeIcon, FingerPrintIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { FingerPrintIcon as FingerPrintIconSolid } from '@heroicons/react/20/solid';

const Register = () => {
    const initialValues = {
        email: '',
        name: '',
        password: '',
        confirm_password: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const onSubmit = async (values) => {
        try {
            let resp = await api.post('/auth/signup', {
                email: values.email,
                name: values.name,
                password: values.password,
            });
            if (resp.status === 201) {
                toast.success('Signed up successful, Please check your email for verification.');
            }
        } catch (error) {
            // toast.error('An error occurred while registering. Please try again.');
        }
    };

    return (
        <>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
                Register with us
            </h2>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-6">
                            <InputFormField
                                label="Name"
                                name="name"
                                type="text"
                                icon={<UserCircleIcon className='w-5 h-5' />}
                                autoComplete="name"
                            />
                            <InputFormField
                                label="Email address"
                                name="email"
                                type="email"
                                icon={<EnvelopeIcon className='w-5 h-5' />}
                                autoComplete="email"
                            />
                            <InputFormField
                                label="Password"
                                name="password"
                                type="password"
                                icon={<FingerPrintIcon className='w-5 h-5' />}
                                autoComplete="password"
                            />
                            <InputFormField
                                label="Confirm Password"
                                name="confirm_password"
                                type="password"
                                icon={<FingerPrintIconSolid className='w-5 h-5' />}
                                autoComplete="password"
                            />

                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {isSubmitting ? 'Registering...' : 'Register'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link to={'/login'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Login here
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Register;
