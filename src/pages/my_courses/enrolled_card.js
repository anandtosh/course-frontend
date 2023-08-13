import React from 'react'
import { Link } from 'react-router-dom'
import CircleProgress from '../../components/common/widgets/CircleProgress'

const EnrolledCard = ({ title, description, percent, to }) => {
  return (
    <div className="h-full rounded overflow-hidden shadow-md  bg-gray-100 dark:bg-gray-800 flex-grow-0 flex-shrink-0">
      <div className="h-full px-6 py-4 flex flex-col justify-between ">
        <div className='card-header flex flex-row justify-between items-center mb-5'>
          <div className="font-bold text-xl mb-2">{title}</div>
          <CircleProgress innerRadius={30} strokeWidth={10} percent={percent} />
        </div>
        <div className='card-body'>
          <p className="text-gray-700 dark:text-gray-300 text-base">{description}</p>
        </div>
        <div className='card-footer flex mt-3'>
          <Link to={to} className='text-white bg-green-600 shadow-sm w-full p-2 text-center rounded-md'>
            {percent ? 'Resume Learning' : 'Start Learning'}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EnrolledCard