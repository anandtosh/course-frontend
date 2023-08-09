import React from 'react';
import { Formik, Form } from 'formik';
import InputFormSwitch from '../../../components/common/forms/InputFormSwitch';
import * as Yup from "yup"


const NotificationSettings = () => {
    const initialValues = {
    };

    const validationSchema = Yup.object({
        
    });

    const onSubmit = async (values) => {
        try {
           console.log(values) 
        } catch (error) {
            
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
                    <h1 className='font-semibold text-xl mt-4'>General Settings</h1>
                    <p className='mb-8'>Here you can set Your Notification preferences</p>
                    <div className='grid grid-cols-1 md:grid-cols-1 gap-3'>
                        <div className='col-span-1'>
                            <InputFormSwitch
                                label="Get Enroll Notifications"
                                name="get_enroll_notifications"
                                type="checkbox"
                                className={'border border-gray-400 rounded-md'}
                            />
                        </div>
                        <div className='col-span-1'>
                            <InputFormSwitch
                                label="Get Payment Notifications"
                                name="get_payment_notifications"
                                type="checkbox"
                                className={'border border-gray-400 rounded-md'}
                            />
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

export default NotificationSettings;
