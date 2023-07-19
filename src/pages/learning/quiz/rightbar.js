import clsx from 'clsx'
import React, { useState } from 'react'
import { useQuizStore } from '../../../stores/useQuizStore'
import { toast } from 'react-toastify'
import TransitionModal from '../../../components/modals/TransitionModal'
import { useConfirmationModal } from '../../../hooks/useConfirmationHook'

const RightBarQuiz = (props) => {
    const { quiz, cqIndex, setCqIndex, unlocked, addUnlocked,addSelected,isSelected,question } = useQuizStore()
    const [isSubmitOpen,setIsSubmitOpen] = useState(false)
    const {confirm} = useConfirmationModal()
    const handleSaveAndNext = () => {
        // save question and turn to next get value from current question
        console.log(question.answer)
        if(question?.answer !== null && question?.answer !== undefined){
            addSelected(question.id,question.answer)
            setCqIndex(cqIndex+1)
        }else{
            console.log("toast")
            toast.error("Please select the answer first or click the question number to go to another question.")
        }
        // addSelected(question.id,question)
    }

    const submitQuiz = async() => {
        // setIsSubmitOpen(true)
        let resp = await confirm()
    }

    return (
        <div className='flex flex-col '>
            <div className="flex flex-wrap gap-5">
                {quiz?.questions?.map((_, index) => (
                    <button
                        key={index}
                        className={clsx(
                            `w-8 h-8 rounded-sm flex items-center justify-center text-sm font-semibold text-white shadow-sm shadow-gray-500 dark:shadow-stone-900 `,
                            {
                                'bg-blue-700': cqIndex === index,
                                'bg-green-500': cqIndex !== index && isSelected(_.id),
                                'bg-blue-400': unlocked.includes(_.id),
                                'bg-gray-400': cqIndex !== index && !unlocked.includes(_.id),
                            }
                        )}
                        onClick={() => {
                            setCqIndex(index)
                            addUnlocked(_.id)
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <div className='mt-[60px]'>
                <div className='grid grid-cols-2 gap-5'>
                    <button className='bg-blue-700 hover:bg-blue-800 text-white py-2 px-auto rounded'
                        onClick={(e) => setCqIndex(cqIndex > 0? cqIndex-1 : 0)}
                    >
                        Previous
                    </button>
                    <button className='bg-green-700 hover:bg-green-800 text-white py-2 px-auto rounded'
                        onClick={handleSaveAndNext}
                    >
                        Save & Next
                    </button>
                    <button className='col-span-2 bg-red-700 hover:bg-red-800 text-white py-2 px-auto rounded'
                        onClick={(e) => submitQuiz()}
                    >
                        Submit Quiz
                    </button>
                </div>
            </div>
            <TransitionModal isOpen={isSubmitOpen} setIsOpen={setIsSubmitOpen} title={'Submit Your Response'}>

            </TransitionModal>
        </div>
    )
}

export default RightBarQuiz