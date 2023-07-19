import { useState } from 'react'
import { Fragment } from 'react'
import { Switch } from '@headlessui/react'
import MarkdownViewer from '../../../components/common/MarkdownViewer'
import clsx from 'clsx'

export default function MultipleOptions({ answers, className,selected, setSelected = () => {}, ...props }) {
    // const [selected, setSelected] = useState([]) // Use an array to hold multiple selected options
    if(!Array.isArray(selected)){
        selected = null
    }
    const handleSelectedChange = (value) => {
        if (selected?.includes(value)) {
            setSelected(selected?.filter((item) => item !== value)) // Remove the value if already selected
        } else {
            setSelected([...selected, value]) // Add the value if not selected
        }
    }

    return (
        <div className={clsx('w-full px-4 py-16', className)}>
            <div className="w-full max-w-md">
                <Switch.Group>
                    <div className="space-y-4">
                        {answers?.map((answer) => (
                            <Switch
                                key={answer.id}
                                checked={selected?.includes(answer) || ''}
                                onChange={() => handleSelectedChange(answer)}
                                className={({ checked }) =>
                                    `${checked ? 'bg-green-800 bg-opacity-75 text-white' : 'bg-white dark:bg-blue-700'
                                    }
                relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none w-full`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <Switch.Label as="span" className={`font-medium`}>
                                                        {answer.name}
                                                    </Switch.Label>
                                                    <Switch.Description
                                                        as="span"
                                                        className={`inline ${selected?.includes(answer)
                                                            ? 'text-sky-100'
                                                            : 'text-gray-500 dark:text-gray-200'
                                                            }`}
                                                    >
                                                        <MarkdownViewer content={answer?.option_text} />
                                                    </Switch.Description>
                                                </div>
                                            </div>
                                            {selected?.includes(answer) && (
                                                <div className="shrink-0 text-white">
                                                    <SwitchIcon className="h-6 w-6" />
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </Switch>
                        ))}
                    </div>
                </Switch.Group>
            </div>
        </div>
    )
}

function SwitchIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
