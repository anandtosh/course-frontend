import React, { useEffect, useState } from 'react';
import LearningMain from './partials/LearningMain';
import { useParams } from 'react-router-dom';
import FullScreenLoader from '../../components/helpers/FullScreenLoader';
import api from '../../utility/apis';
import Quiz from './partials/Quiz'

const Learning = () => {
  const {id} = useParams()
  const [course, setCourse] = useState(null)

  useEffect(() => {
    if(id){
      api.get(`/courses/${id}`).then((resp) => {
        if(resp.status == '200'){
          setCourse(resp.data)
        }
      })
    }
  },[id])
  if(!course){
    return <FullScreenLoader/>
  }

  return (
    // <Quiz course={course}/>
    <LearningMain course={course}/>
  );
};

export default Learning;
