import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputFormField from '../../../components/common/forms/InputFormField';
import { FingerPrintIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import api from '../../../utility/apis';

const Login = () => {
    const { token } = useParams()
    const [tokenVerified, setTokenVerified] = useState(false)

    const initialValues = {
        password: '',
        confirm_password: ''
    };

    const validationSchema = Yup.object({
        password: Yup.string().required('Password is required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    useEffect(() => {
        (async () => {
            try {
                let resp = await api.post('/auth/reset-password', {
                    token
                });
                if (resp.status === 200) {
                    setTokenVerified(true)
                }
            } catch (error) {
                setTokenVerified(false)
            }
        })()
    }, [])

    const onSubmit = async (values) => {
        try {
            let resp = await api.post('/auth/reset-password', {
                password: values.password,
                token
            });
            if (resp.status === 204) {
                toast.success('Password changed successfully.')
            }
        } catch (error) {
            // toast.error('An error occurred while login. Please try again.');
        }
    };

    return (
        <>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
                Reset Your Password
            </h2>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {
                    tokenVerified ?
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className="space-y-6">
                                    {/* Use InputFormField for each input field */}
                                    <InputFormField
                                        label="Password"
                                        name="password"
                                        type="password"
                                        icon={<FingerPrintIcon className='w-5 h-5' />}
                                    />
                                    <InputFormField
                                        label="Confirm Password"
                                        name="confirm_password"
                                        type="password"
                                        icon={<FingerPrintIcon className='w-5 h-5' />}
                                    />

                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            {isSubmitting ? 'Please Wait...' : 'Reset Password'}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        :
                        <p className='text-center bg-red-300 text-red-800 dark:text-white bg-opacity-70 p-3 rounded-md'>
                            This link is not valid or expired please generate a password reset link from forgot password page.
                        </p>
                }

            </div>
        </>
    );
};

export default Login;
