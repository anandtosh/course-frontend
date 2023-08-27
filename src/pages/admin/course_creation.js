import React, { useEffect, useRef, useState } from 'react';
import { Switch } from '@headlessui/react';
import AdminLogin from './admin_login';
import { useAdminStore } from '../../stores';
import api from '../../utility/apis';
import { toast } from 'react-toastify';
import Scrollbar from '../../components/common/Scrollbar';
import useWebSocketClient from '../../hooks/useWebsocketClient';

const App = () => {
    const [showLogs, setShowLogs] = useState(false);
    const [courseName, setCourseName] = useState('')
    const { token, resetAuth, course, setCourse } = useAdminStore()
    const { message, sendMessage } = useWebSocketClient();
    const [messages, setMessages] = useState([])
    const [userInteracted, setUserInteracted] = useState(false);
    const [btnDisabled,setButttonDisabled] = useState(false)
    const msgRef = useRef(null)

    const toggleContent = () => {
        setShowLogs(!showLogs);
    };

    const handleQuizGenerate = (i, j) => {
        let updated = { ...course }
        updated.chapters[i].lessons[j].hasQuiz = !(updated?.chapters[i]?.lessons[j]?.hasQuiz)
        setCourse(updated)
    }

    const handleGetRoadmap = async () => {
        if (!courseName) {
            toast.error("Please enter course name")
            return
        }
        setButttonDisabled(true)
        let response = await api.get('/admin/course-roadmap?course=' + courseName)
        if (response.status == 200) {
            setCourse(response.data)
        }
        setButttonDisabled(false)
    }

    const handleCreateCourse = async () => {
        let response = await api.post('/admin/course-roadmap', {
            roadmap: course
        })
        setButttonDisabled(true)
        if (response.status == 200) {
            toast.success("Course Queued for creation")
            setShowLogs(true)
        }
        setButttonDisabled(false)
    }

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = msgRef.current;
        const isUserNearBottom = scrollTop + clientHeight >= scrollHeight - 10; // A small threshold to account for potential rounding errors

        if (isUserNearBottom) {
            setUserInteracted(false);
        } else {
            setUserInteracted(true);
        }
    };

    const scrollToBottom = () => {
        if (msgRef.current) {
            let lastChild = msgRef.current.lastChild
            if(lastChild){
                lastChild.scrollIntoView({ block: 'end' })
            }
        }
    };

    useEffect(() => {
        course && setCourseName(course?.course)
    }, [course])

    useEffect(() => {
        if (message?.toString().trim()) {
            setMessages((msg) => [...msg, { message: message, timestamp: new Date().getTime() }])
            if (!userInteracted) {
                scrollToBottom();
            }
        }
    }, [message])

    return (
        <div className="flex h-full">
            {/* Left Panel */}
            <div className="w-1/4 h-full bg-gray-50 p-4">
                {
                    token ?
                        <>
                            <input
                                type="text"
                                placeholder="Course Name"
                                className="w-full p-2 mb-4 border rounded"
                                value={courseName}
                                disabled={!!course}
                                onChange={(e) => setCourseName(e.target.value)}
                            />
                            {
                                course ?
                                    <button className="w-full p-2 bg-blue-500 text-white rounded mb-4"
                                        onClick={handleCreateCourse}
                                        disabled={btnDisabled}
                                    >
                                        Create Course
                                    </button>
                                    :
                                    <button className="w-full p-2 bg-blue-500 text-white rounded mb-4"
                                        onClick={handleGetRoadmap}
                                        disabled={btnDisabled}
                                    >
                                        Get Course Roadmap
                                    </button>
                            }
                            <div className="flex justify-between items-center mb-4">
                                <span className="mr-2">Show Logs</span>
                                <Switch
                                    checked={showLogs}
                                    onChange={toggleContent}
                                    className={`${showLogs ? 'bg-blue-500' : 'bg-gray-300'
                                        } relative inline-flex items-center h-6 rounded-full w-11`}
                                >
                                    <span className="sr-only">Toggle Content</span>
                                    <span
                                        className={`${showLogs ? 'translate-x-6' : 'translate-x-1'
                                            } inline-block w-4 h-4 transform bg-white rounded-full`}
                                    />
                                </Switch>
                            </div>
                            <button className="w-full p-2 bg-red-500 text-white rounded"
                                onClick={resetAuth}
                            >
                                Logout
                            </button>
                        </>
                        :
                        <AdminLogin />
                }
            </div>

            {/* Right Panel */}
            <div className="flex-1 h-full p-4 bg-gray-100">
                <Scrollbar>
                    {!showLogs ? (
                        course &&
                        <div className='px-20 py-10 bg-gray-200 rounded'>
                            {course.chapters.map((chapter, i) => (
                                <div key={chapter.chapter} className="mb-4">
                                    <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-500">
                                        Chapter {i + 1}: {chapter.chapter}
                                    </h2>
                                    <p className="mb-2">{chapter.description}</p>

                                    <ul className="ml-4 list-disc list-outside">
                                        {chapter.lessons.map((lesson, j) => (
                                            <li key={lesson.lesson} className="mb-2">
                                                <label className="flex items-center justify-between">
                                                    <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                                        {lesson.lesson}
                                                    </span>
                                                    <input
                                                        type="checkbox"
                                                        checked={lesson?.hasQuiz}
                                                        onChange={() => handleQuizGenerate(i, j)}
                                                        className="transform scale-150 ml-2"
                                                    />
                                                </label>
                                                <p className="mb-2">{lesson.description}</p>

                                                <ul className="ml-4 list-decimal">
                                                    {lesson.topics.map((topic) => (
                                                        <li key={topic} className="rounded-md">
                                                            {topic}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            {/* Content B */}
                            <div className="bg-gray-900 text-white p-4 rounded">
                                <h2 className="text-xl font-semibold mb-2">Logs</h2>
                                <div className="border-t border-gray-800 pt-2"
                                    ref={msgRef}
                                    // onScroll={handleScroll}
                                >
                                    {messages.map((msg) => (
                                        <div className="flex mb-2">
                                            <span className="text-gray-400 mr-2">[{msg.timestamp}]</span>
                                            <span>{msg.message}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </Scrollbar>
            </div>
        </div>
    );
};

export default App;
