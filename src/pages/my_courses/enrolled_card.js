import React from 'react'
import { Link } from 'react-router-dom'

const EnrolledCard = ({ title, description, to }) => {
  return (
    <div className="h-full rounded overflow-hidden shadow-md  bg-gray-100 dark:bg-gray-800 flex-grow-0 flex-shrink-0">
      <div className="h-full px-6 py-4 flex flex-col justify-between ">
        <div className='card-header'>
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 dark:text-gray-300 text-base">{description}</p>
        </div>
        <div className='card-footer flex mt-3'>
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
          <Link to={to} className='text-white bg-green-600 shadow-sm w-full p-2 text-center rounded-md'>
            Open in course player
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EnrolledCard