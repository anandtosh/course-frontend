import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputFormField from '../../../components/common/forms/InputFormField';
import {useAuthStore} from '../../../stores'

const GeneralSettings = () => {

    const {user} = useAuthStore()

    const initialValues = {
        name: user.name,
        phone: '',
        dateOfBirth: '',
        title: '',
        about: '',
        email: user.email,
    };

    const validationSchema = Yup.object({
        // name: Yup.string().required('Name is required'),
        // phone: Yup.string().required('Phone is required'),
        // dateOfBirth: Yup.date().required('Date of Birth is required'),
        // title: Yup.string().required('Title is required'),
        // about: Yup.string().required('About is required'),
        // email: Yup.string().email('Invalid email address').required('Email is required'),
    });

    const onSubmit = async (values) => {
        try {
            // Your submission logic here
            // For example, you can make an API call to submit the form data.
            // await api.post('/your/api/endpoint', values);
            // toast.success('Form submitted successfully.');
        } catch (error) {
            // toast.error('An error occurred while submitting the form. Please try again.');
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <h1 className='font-semibold text-xl my-4'>General Settings</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='col-span-1'>
                            <InputFormField label="Name" name="name" type="text" />
                        </div>
                        <div className='col-span-1'>
                            <InputFormField label="Phone" name="phone" type="text" />
                        </div>
                        <div className='col-span-1'>
                            <InputFormField label="Date of Birth" name="dateOfBirth" type="date" />
                        </div>
                        <div className='col-span-1'>
                            <InputFormField label="Title" name="title" type="text" />
                        </div>
                        <div className='col-span-1'>
                            <InputFormField label="About" name="about" type="text" />
                        </div>
                        <div className='col-span-1'>
                            <InputFormField label="Email" name="email" type="email" />
                        </div>
                    </div>
                    <div className='flex w-full justify-end mt-5 gap-2'>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="rounded-md w-[200px] bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                            {isSubmitting ? 'Please Wait...' : 'Reset'}
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="rounded-md w-[200px] bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {isSubmitting ? 'Please Wait...' : 'Save Changes'}
                        </button>
                    </div>

                </Form>
            )}
        </Formik>
    );
};

export default GeneralSettings