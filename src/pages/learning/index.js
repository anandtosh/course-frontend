import React, { useEffect, useState } from 'react';
import LearningMain from './partials/LearningMain';
import { useParams } from 'react-router-dom';
import FullScreenLoader from '../../components/helpers/FullScreenLoader';
import api from '../../utility/apis';
import Quiz from './partials/Quiz'
import QuizContainer from './quiz';
import { useEnrollmentStore } from '../../stores';

const Learning = () => {
  const {enrollment_id} = useParams()
  const [course, setCourse] = useState(null)
  const {setEnrollment} = useEnrollmentStore()

  useEffect(() => {
    if(enrollment_id){
      api.get(`/enrollments/${enrollment_id}`).then((resp) => {
        if(resp.status == '200'){
          setCourse(resp.data.course)
          setEnrollment(resp.data)
        }
      })
    }
  },[enrollment_id])
  
  if(!course){
    return <FullScreenLoader/>
  }

  return (
    // <Quiz course={course}/>
    // <QuizContainer course={course} />
    <LearningMain course={course}/>
  );
};

export default Learning;
