import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, description, to }) => {

  const [hovered, setHovered] = React.useState(false);

  const cardAnimation = useSpring({
    // transform: hovered ? 'scale(1.05)' : 'scale(1)',
    transform: `perspective(600px) rotateX(${hovered ? 10 : 0}deg) rotateY(${hovered ? -5 : 0
      }deg)`,
    // boxShadow: hovered ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.12)',
  });

  return (
    <animated.div
      className="h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={cardAnimation}
    >
      <div className="h-full rounded overflow-hidden shadow-md  bg-gray-100 dark:bg-gray-800 flex-grow-0 flex-shrink-0">
        <div className="h-full px-6 py-4 flex flex-col justify-between ">
          <div className='card-header'>
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 dark:text-gray-300 text-base">{description}</p>
          </div>
          <div className='card-footer'>
            {/* <div className='flex space-x-2'>
              <span class="bg-gray-200 text-gray-700 rounded-full px-4 py-2 text-sm font-semibold">
                Quizzes
              </span>
              <span class="bg-gray-200 text-gray-700 rounded-full px-4 py-2 text-sm font-semibold">
                Quizzes
              </span>
              <span class="bg-gray-200 text-gray-700 rounded-full px-4 py-2 text-sm font-semibold">
                Quizzes
              </span>
            </div> */}
            <Link to={to} className='text-blue-700'>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default CourseCard;
