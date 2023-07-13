import React from 'react';
import AccordionMenu from '../../components/common/AccordionMenu';
import Scrollbar from '../../components/common/Scrollbar';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';

export const withLearning = (Component) => {
  return function LearningWithMain({course,...props}) {

    let menu = course.chapters.map((el) => {
      return {
        title: el.chapter_name,
        submenu: el.lessons.map((lesson) => {
          return {
            icon:faBookBookmark,
            to: `/learning/courses/${course.id}/lessons/${lesson.id}`,
            title:lesson.lesson_name,
            subtitle:lesson.lesson_description
          }
        })
      }
    })
    return (
      <div className='flex flex-col h-full'>
        {/* <div className='flex h-[50px] bg-gray-200 items-center px-[30px]'>
          helo
        </div> */}
        <div className="flex flex-grow">
          <div className="w-1/4 min-w-[300px] m-[30px]">
            <Scrollbar>
              {
                menu.map((el) => (
                  <AccordionMenu title={el.title} menu={el.submenu} />
                ))
              }
              {/* <AccordionMenu title={'hello'} content={'how are you my friend'} />
              <AccordionMenu title={'hello'} content={'how are you my friend'} />
              <AccordionMenu title={'hello'} content={'how are you my friend'} />
              <AccordionMenu title={'hello'} content={'how are you my friend'} /> */}
            </Scrollbar>
          </div>
          <div className="flex-grow">
            <Scrollbar>
              <Component course={course} {...props} />
            </Scrollbar>
          </div>
        </div>
      </div>
    );
  };
};