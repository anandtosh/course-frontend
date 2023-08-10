import { faArrowLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import RenderDynamicHTML from '../../../components/common/RenderDynamicHTML';
import { withLearning } from '../hoc';
import api from '../../../utility/apis';
import FullScreenLoader from '../../../components/helpers/FullScreenLoader';
import RightBarProgress from './RightBarProgress';
import Scrollbar from '../../../components/common/Scrollbar';

const LearningMain = ({ course, ...props }) => {

    const { lesson_id } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const [lesson, setLesson] = useState(null)
    const [currentTopic, setCurrentTopic] = useState(null)
    const [totalTopics, setTotalTopics] = useState(0)
    const navigate = useNavigate()
    // const [thisTopic,setThisTopic] = useState(0)
    const topicNumber = searchParams.get('topic')

    const getTopicId = (lesson, topic_number) => {
        return lesson.topics.find((el) => el.topic_order == (topic_number - 1))?.['id']
    }
    // console.log(lesson_id)
    useEffect(() => {
        // when lesson changes check for topic 1
        if (lesson_id != undefined && course) {
            let lessons = course.chapters.reduce(
                (result, chapter) => result.concat(chapter.lessons),
                []
            );
            setLesson(lessons.find((el) => el.id === lesson_id))
        }
    }, [lesson_id])

    useEffect(() => {
        if (lesson && lesson?.topics) {
            // fetch first topic
            setSearchParams({ topic: 1 })
        }
    }, [JSON.stringify(lesson)])

    useEffect(() => {
        if (topicNumber && lesson) {
            // let topic = lesson.topics[0]
            let topicId = getTopicId(lesson, topicNumber)
            api.get(`/topics/${topicId}`).then((resp) => {
                setCurrentTopic(resp.data)
            }).catch((err) => {
                setCurrentTopic(null)
            })
            setTotalTopics(lesson.topics.length)
            // setThisTopic(lesson.topics.find((el,i) => el.id === topicId)['topic_order'] +1 )
        }
    }, [topicNumber, JSON.stringify(lesson)])

    const nextLesson = () => {
        setSearchParams({ topic: +(topicNumber) + 1 })
    }

    const prevLesson = () => {
        setSearchParams({ topic: topicNumber - 1 })
    }

    const startCourse = () => {
        // go to first lesson of this course
        // console.log(course.chapters[0].lessons[0].id)
        navigate(`/learning/courses/${course.id}/lessons/${course.chapters[0].lessons[0].id}`)
    }

    if (lesson_id == undefined) {
        return (
            <div className='flex flex-col justify-center items-center h-full'>
                <button className='bg-green-600 hover:bg-green-500 text-white px-8 py-2 rounded-md'
                    onClick={startCourse}
                >
                    Start Learning
                </button>
                <div className='mt-5 text-center'>
                    <h1 className="text-lg">Introduction</h1>
                    <p>{course.course_description}</p>
                </div>
            </div>
        )
    }

    if (!currentTopic) {
        return <FullScreenLoader />
    }
    // console.log(currentTopic)
    return (
        <div className='py-[30px] flex flex-row h-full'>
            <div className='flex-grow pr-[30px] overflow-auto'>
                <Scrollbar>
                    <div className="flex justify-between ">
                        <button className="text-lg"
                            onClick={prevLesson}
                            disabled={topicNumber == 1}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} className='mr-2' />
                            Previous
                        </button>
                        <h2 className="text-center text-[30px] font-semibold">
                            Topic {topicNumber}/{totalTopics}
                        </h2>
                        <button className="text-lg"
                            onClick={nextLesson}
                            disabled={topicNumber == totalTopics}
                        >
                            Next
                            <FontAwesomeIcon icon={faChevronRight} className='ml-2' />
                        </button>
                    </div>
                    <div className='pt-10'>
                        <RenderDynamicHTML html={currentTopic?.topic_content} />
                    </div>
                </Scrollbar>
            </div>
            <div className='min-w-[250px]'>
                <Scrollbar>
                    <RightBarProgress course={course} lesson={lesson} currentTopic={currentTopic} />
                </Scrollbar>
            </div>
        </div>
    )
}

export default withLearning(LearningMain)
