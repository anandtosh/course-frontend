import React, { useEffect, useState } from 'react'
import CourseCard from './course_card'
import FullScreenLoader from '../../components/helpers/FullScreenLoader'
import api from '../../utility/apis'
import Scrollbar from '../../components/common/Scrollbar'

const CoursesView = () => {
    const [courses, setCourses] = useState(null)
    const [loading, setLoading] = useState(true)
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
        <Scrollbar>
            <div className='grid sm:grid-cols-1 md:grid-cols-4 justify-center items-center gap-8 p-6'>
                {courses.map((course) => (
                    <>
                        <CourseCard
                            title={course.course_name}
                            description={course.course_description}
                            to={`/courses/${course.id}`}
                        />
                    </>
                ))}
            </div>
        </Scrollbar>
    )
}

export default CoursesView