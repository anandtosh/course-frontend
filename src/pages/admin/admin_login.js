import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputFormField from '../../components/common/forms/InputFormField';
import { EnvelopeIcon, FingerPrintIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import api from '../../utility/apis';
import { useAdminStore, useAuthStore } from '../../stores';

const AdminLogin = () => {

    const { setToken } = useAdminStore()
    const navigate = useNavigate()

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const onSubmit = async (values) => {
        try {
            let resp = await api.post('/admin/login', {
                email: values.email,
                secret: values.password,
            });
            if (resp.status === 200) {
                // save token and redirect to home
                setToken(resp.data.token)
                // setUser(resp.data.user)
                // navigate('/')
                // console.log(resp)
                toast.success('Login successful.')
            }
        } catch (error) {
            // toast.error('An error occurred while login. Please try again.');
        }
    };

    return (
        <>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
                Admin Login
            </h2>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-6">
                            {/* Use InputFormField for each input field */}
                            <InputFormField
                                label="Email address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                icon={<EnvelopeIcon className='w-5 h-5' />}
                            />
                            <InputFormField
                                label="Password"
                                name="password"
                                type="password"
                                labelRightWidet={
                                    <div className="text-sm">
                                        <Link to={'/forgot-password'} className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </Link>
                                    </div>
                                }
                                autoComplete="current-password"
                                icon={<FingerPrintIcon className='w-5 h-5' />}
                            />

                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {isSubmitting ? 'Please Wait...' : 'Login'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>

            </div>
        </>
    );
};

export default AdminLogin;
