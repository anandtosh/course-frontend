import React, { useEffect, useState } from 'react'
import CourseCard from './course_card'
import FullScreenLoader from '../../components/helpers/FullScreenLoader'
import api from '../../utility/apis'
import Scrollbar from '../../components/common/Scrollbar'
import InputFormField from '../../components/common/forms/InputFormField'
import { Formik, Form } from 'formik'

const CoursesView = () => {
    const [courses, setCourses] = useState(null)
    const [loading, setLoading] = useState(true)
    const initialValues = {}
    const validationSchema = {}
    const onSubmit = () => { }
    useEffect(() => {
        api.get('/courses').then((resp) => {
            if (resp.data && resp.data.length > 0) {
                setCourses(resp.data)
            } else {
                setCourses(null)
            }
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <FullScreenLoader />
    }

    if (!courses) {
        return <>No courses</>
    }

    return (
        <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                // <Form>
                    <div className='grid grid-cols-5 h-full'>
                        <div className='col-span-1'>

                        </div>
                        <div className='col-span-4 flex flex-col h-full'>
                            <div className='flex-none min-h-[100px] flex items-center justify-center'>
                                <InputFormField name={'search'} placeholder={'Search here...'} className={'md:w-[500px]'} />
                            </div>
                            <div className='flex-grow'>
                                <Scrollbar>
                                    <div className='grid sm:grid-cols-1 md:grid-cols-4 justify-center items-center gap-8 p-6'>
                                        {courses.map((course) => (
                                            <>
                                                <CourseCard
                                                    key={course.id}
                                                    title={course.course_name}
                                                    description={course.course_description}
                                                    to={`/courses/${course.id}`}
                                                />
                                            </>
                                        ))}
                                    </div>
                                </Scrollbar>
                            </div>
                        </div>
                    </div>
                // </Form>
            )}
        </Formik>
    )
}

export default CoursesView