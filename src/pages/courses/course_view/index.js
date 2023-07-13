import React, { useEffect, useState } from 'react'
import api from '../../../utility/apis'
import FullScreenLoader from '../../../components/helpers/FullScreenLoader'
import CourseDetails from './course_details'
import { useParams } from 'react-router-dom'
import Scrollbar from '../../../components/common/Scrollbar'

const SingleCourseView = () => {
    const [course, setCourse] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        api.get(`/courses/${id}`).then((resp) => {
            if (resp.data) {
                setCourse(resp.data)
            } else {
                setCourse(null)
            }
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <FullScreenLoader />
    }

    if (!course) {
        return <>No course</>
    }
    return (
        <Scrollbar>
            <div className='flex justify-center h-auto'>
                <CourseDetails course={course} />
            </div>
        </Scrollbar>
    )
}

export default SingleCourseView