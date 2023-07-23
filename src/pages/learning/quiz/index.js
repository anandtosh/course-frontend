import React, { useEffect, useState } from 'react'
import Options from './options'
import Question from './question'
import Timer from './timer'
import { useSearchParams } from 'react-router-dom'
import api from '../../../utility/apis'
import FullScreenLoader from '../../../components/helpers/FullScreenLoader'
import Scrollbar from '../../../components/common/Scrollbar'
import MultipleOptions from './multiple_options'
import RightBarQuiz from './rightbar'
import { useQuizStore } from '../../../stores'

const QuizContainer = () => {
    const { quiz, setQuiz, cqIndex, setCqIndex, question, setQuestion, selected,setTimeRemaining } = useQuizStore()
    const [searchParams, seSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // get quiz data and update in state
        let quiz_id = searchParams.get('quiz')
        if (quiz_id && !quiz) {
            api.get(`/quizzes/${quiz_id}`).then((resp) => {
                if (resp.status === 200) {
                    setQuiz(resp.data)
                    setTimeRemaining(15*60)
                }
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(false)
        }
    }, [])

    /**
     * above part is for loading a quiz
     * below to iterate and set question
     */

    useEffect(() => {
        if (quiz?.questions?.[0]) {
            setCqIndex(0)
        }
    }, [quiz])

    const [currentSelection, setCurrentSelection] = useState(null)

    useEffect(() => {
        if (!currentSelection) {
            if (question) {
                let que = question
                delete que.answer
                setQuestion({ ...que })
            }
        } else {
            question?.question_type == 'MCMA' ? setQuestion({ ...question, answer: currentSelection?.map((el) => { return el.id }) }) : setQuestion({ ...question, answer: currentSelection.id })
        }
    }, [currentSelection])

    useEffect(() => {
        let que = quiz?.questions?.[cqIndex];
        setQuestion(que)
        let ans = selected.find((element) => element.id === que.id)?.['answer'] ?? null
        if (que?.question_type === 'MCQ') {
            setCurrentSelection(que?.options?.filter((el) => (ans === el.id) || ans?.includes(el.id))[0] ?? null)
        }
        if (que?.question_type === 'MCMA') {
            setCurrentSelection(que?.options?.filter((el) => (ans === el.id) || ans?.includes(el.id)) ?? [])
        }
        if (que?.question_type === 'T/F') {
            setCurrentSelection(ans == true)
        }
    }, [cqIndex])

    if (loading) {
        return <FullScreenLoader />
    }
    if (!quiz) {
        return <>No quiz found</>
    }

    return (
        <>
            <div className='flex flex-row h-full'>
                <div className='flex-grow'>
                    <Scrollbar>
                        <div className='px-4 flex flex-row justify-between mx-10 mt-10'>
                            <Question />
                            <Timer />
                        </div>
                        <div className=' w-full'>
                            {(() => {
                                switch (question?.question_type) {
                                    case 'T/F':
                                        return <Options
                                            answers={[{ id: 'true', option_text: "True" }, { id: 'false', option_text: "False" }]}
                                            className={'mx-10'}
                                        />;
                                    case 'MCQ':
                                        return <Options
                                            answers={question?.options}
                                            className={'mx-10'}
                                            selected={currentSelection}
                                            setSelected={(answer) => { setCurrentSelection(answer) }}
                                        />;
                                    case 'MCMA':
                                        return <MultipleOptions
                                            answers={question?.options}
                                            className={'mx-10'}
                                            selected={currentSelection ?? []}
                                            setSelected={(answers) => { setCurrentSelection(answers) }}
                                        />
                                    default:
                                        return <p className={'mx-10 px-4'}>This Question is Unsupported, Report Here</p>;
                                }
                            })()}
                        </div>
                    </Scrollbar>
                </div>
                <div className='bg-gray-200 dark:bg-slate-700 w-1/4 max-w-[300px] pt-10 px-4'>
                    <RightBarQuiz />
                </div>
            </div>
        </>
    )
}

export default QuizContainer