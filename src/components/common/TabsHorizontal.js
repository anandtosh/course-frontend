import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

const TabsHorizontal = ({categories = {},...props}) => {
    return (
        <Tab.Group>
            <Tab.List className="flex flex-wrap sm:flex-nowrap space-x-1 rounded bg-slate-500 dark:bg-gray-500 p-1">
                {Object.keys(categories).map((category) => (
                    <Tab
                        key={category}
                        className={({ selected }) =>
                            clsx(
                                'w-full rounded py-2.5 text-sm font-medium leading-5 text-blue-100',
                                'focus:outline-none',
                                selected
                                    ? 'text-white bg-black/40 dark:bg-black/60 shadow-sm shadow-black'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                            )
                        }
                    >
                        {category}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
                {Object.values(categories).map((el, idx) => (
                    <Tab.Panel
                        key={idx}
                        className={clsx(
                            'rounded-md bg-white dark:bg-gray-700 shadow-md p-3 border border-gray-200 dark:border-none',
                            // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                        )}
                    >
                        {el.tabComponent}
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

export default TabsHorizontal