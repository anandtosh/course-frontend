import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

const RightBarProgress = ({ course, lesson, currentTopic, ...props }) => {
    const lessons = course.chapters.reduce((lessons, chapter) => (
        lessons = lessons.concat(chapter.lessons)
    ), [])

    function getNextLessonId() {
        let id = lesson.id
        const currentIndex = lessons.findIndex(lesson => lesson.id === id);
        if (currentIndex !== -1 && currentIndex < lessons.length - 1) {
            return lessons[currentIndex + 1].id;
        }
        return null; // Return null if the given lesson ID is not found or if it's the last lesson
    }

    function getPreviousLessonId() {
        let id = lesson.id
        const currentIndex = lessons.findIndex(lesson => lesson.id === id);
        if (currentIndex > 0) {
            return lessons[currentIndex - 1].id;
        }
        return null; // Return null if the given lesson ID is not found or if it's the first lesson
    }

    return (
        <div className='p-3'>
            <div className='mb-10 flex flex-col gap-3 text-center'>
                {getPreviousLessonId() && <Link to={`/learning/courses/${course.id}/lessons/${getPreviousLessonId()}`} className='border border-red-600 rounded-md p-2 text-red-600 '>
                    Previous Lesson
                </Link>}
                {getNextLessonId() && <Link to={`/learning/courses/${course.id}/lessons/${getNextLessonId()}`} className='border border-green-600 rounded-md p-2 text-green-600 '>
                    Next Lesson
                </Link>}
            </div>
            <div className='font-bold text-blue-600'>
                Topics
            </div>
            <div className='pt-3'>
                {lesson?.topics?.map((el) => (
                    <p className={clsx('my-2', currentTopic.id === el.id && 'font-bold')}>{el.topic_name}</p>
                ))}
            </div>
            
        </div>
    )
}

export default RightBarProgress