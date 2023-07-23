import React, { useState } from 'react'
import TransitionModal from './TransitionModal'

const ConfirmationModal = ({ title, content ,onConfirm, onReject, ...props }) => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <TransitionModal
            title={title || 'Please Confirm'}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            onClose={() => {setIsOpen(false);onReject()}}
        >
            {
                <div className='mt-3'>
                   {content || 'Click Yes if you want to proceed'}
                </div>
            }
            <div className='flex flex-row justify-end gap-5 mt-5'>
                <button className='bg-green-500 hover:bg-green-600 px-5 py-1 text-white rounded'
                    onClick={(e) => {setIsOpen(false);onConfirm()}}
                >
                    Yes
                </button>
                <button className='bg-red-500 hover:bg-red-600 px-5 py-1 text-white rounded'
                    onClick={(e) => {setIsOpen(false);onReject()}}
                >
                    No
                </button>
            </div>
        </TransitionModal>
    )
}

export default ConfirmationModal