import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputFormField from '../../../components/common/forms/InputFormField';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import api from '../../../utility/apis';

const ForgotPassword = () => {

  const navigate = useNavigate()

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const onSubmit = async (values) => {
    try {
      let resp = await api.post('/auth/forgot-password', {
        email: values.email,
      });
      if (resp.status === 200) {
        // save token and redirect to home
        // navigate('/')
        toast.success('Password Reset Email Sent Succesfully.')
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

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to={'/register'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Register here
          </Link>
        </p>
      </div>
    </>
  );
};

export default ForgotPassword;
