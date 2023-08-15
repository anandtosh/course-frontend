import React, { useState } from 'react';
import AccordionMenu from '../../components/common/AccordionMenu';
import Scrollbar from '../../components/common/Scrollbar';
import { faBookBookmark, faIdCard, faTableList } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

export const withLearning = (Component) => {
  return function LearningWithMain({course,...props}) {
    const {enrollment_id} = useParams()

    const [visiblePortion, setVisiblePortion] = useState(1)
    const isSmall = useMediaQuery({maxWidth: 640})

    let menu = course.chapters.map((el) => {
      return {
        title: el.chapter_name,
        submenu: el.lessons.map((lesson) => {
          return {
            icon:faBookBookmark,
            to: `/app/enrollments/${enrollment_id}/lessons/${lesson.id}`,
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
          <div className={clsx(isSmall ? ( visiblePortion === 0 ? "w-full mx-3" : "hidden") : "w-1/4 min-w-[300px] m-[30px]")}>
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
              <Component visiblePortion={visiblePortion} isSmall={isSmall} course={course} {...props} />
            </Scrollbar>
          </div>
        </div>
        <div className='h-[70px] bg-gray-200 flex sm:hidden shadow-sm flex-row items-center justify-between px-4'>
              <button
                className={clsx(' flex flex-col items-center w-[200px]',visiblePortion == 0 ? 'text-blue-700': 'text-blue-500')}
                onClick={(e) => setVisiblePortion(0)}
              >
                <FontAwesomeIcon icon={faBookBookmark} size={'lg'}/>
                Chapters
              </button>
              <button
                className={clsx(' flex flex-col items-center w-[200px]',visiblePortion == 1 ? 'text-blue-700': 'text-blue-500')}
                onClick={(e) => setVisiblePortion(1)}
              >
                <FontAwesomeIcon icon={faIdCard} size={'lg'}/>
                Learning
              </button>
              <button
                className={clsx(' flex flex-col items-center w-[200px]',visiblePortion == 2 ? 'text-blue-700': 'text-blue-500')}
                onClick={(e) => setVisiblePortion(2)}
              >
                <FontAwesomeIcon icon={faTableList} size={'lg'}/>
                Stats
              </button>
        </div>
      </div>
    );
  };
};