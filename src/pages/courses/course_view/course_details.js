import React from 'react';
import { Link } from 'react-router-dom';
import useConfirm from '../../../hooks/useConfirmationHook';
import { toast } from 'react-toastify';
import api from '../../../utility/apis';

const CourseDetails = ({ course }) => {

  const {confirm} = useConfirm()
  const enrollUser = async () => {
    try{
      await confirm("Enroll to course", `Are you sure you want to enroll to course ${course.course_name}`)
      let resp = await api.post('/enrollments',{
        course_id: course.id
      })
      if(resp.status === 201){
        toast.success(`You are successfully enrolled to ${course.course_name}.`)
      }
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div className="bg-gray-100 p-10 m-5 rounded w-full sm:w-full md:w-2/3 dark:bg-gray-800 shadow-md">
      <div className='text-center'>
      <h1 className="text-2xl font-bold mb-2 text-blue-600">{course.course_name}</h1>
      <p className="mb-8">{course.course_description}</p>
      </div>

      {course.chapters.map((chapter,i) => (
        <div key={chapter.id} className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-500">Chapter {i+1}: {chapter.chapter_name}</h2>
          <p className="mb-2">{chapter.chapter_description}</p>

          <ul className="ml-4 list-disc list-outside">
            {chapter.lessons.map((lesson) => (
              <li key={lesson.id} className="mb-2">
                <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">{lesson.lesson_name}</span>
                <p className="mb-2">{lesson.lesson_description}</p>

                <ul className="ml-4 list-decimal">
                  {lesson.topics.map((topic) => (
                    <li key={topic.id} className="rounded-md">
                      {topic.topic_name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className=' text-center my-[30px]'>
          {/* <Link to={`/learning/courses/${course.id}`} className='bg-blue-600 p-3 px-5 rounded-[15px] text-white'>
            Enroll for {course.course_name}
          </Link> */}
          <button className='bg-blue-600 p-3 px-5 rounded-[15px] text-white'
            onClick={enrollUser}
          >
            Enroll for {course.course_name}
          </button>
      </div>
    </div>
  );
};

export default CourseDetails;
