import React, { useEffect, useState } from 'react'
import Scrollbar from '../../components/common/Scrollbar'
import CourseCard from '../courses/course_card'
import FullScreenLoader from '../../components/helpers/FullScreenLoader'
import api from '../../utility/apis'
import EnrolledCard from './enrolled_card'

const MyCourses = () => {
    const [enrollments, setEnrollments] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        api.get('/enrollments').then((resp) => {
            console.log(resp)
            if (resp.data && resp.data.length > 0) {
                setEnrollments(resp.data)
            } else {
                setEnrollments(null)
            }
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <FullScreenLoader />
    }

    if (!enrollments) {
        return <>No courses</>
    }

    return (
        <Scrollbar>
            <div className='grid sm:grid-cols-1 md:grid-cols-4 justify-center items-center gap-8 p-6'>
                {enrollments.map(({course}) => (
                    <>
                        <EnrolledCard
                            title={course.course_name}
                            description={course.course_description}
                            to={`/learning/courses/${course.id}`}
                        />
                    </>
                ))}
            </div>
        </Scrollbar>
    )
}

export default MyCourses