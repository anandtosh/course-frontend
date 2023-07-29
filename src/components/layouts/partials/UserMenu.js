import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Cog6ToothIcon, PowerIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../../stores'
import { MD5 } from 'crypto-js'

// const user = {
//     name: 'Tom Cook',
//     email: 'tom@example.com',
//     imageUrl:
//         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }



export default function UserMenu() {
    
    const {user,resetAuth} = useAuthStore()
    const navigate = useNavigate()

    const userNavigation = [
        { name: 'My Profile', href: '/profile', icon: <UserCircleIcon className="h-5 w-5" aria-hidden="true" /> },
        { name: 'Settings', href: '/settings', icon: <Cog6ToothIcon className="h-5 w-5" aria-hidden="true" /> },
        { name: 'Sign out', onClick: async () => { await resetAuth();navigate('/login')}, icon: <PowerIcon className="h-5 w-5" aria-hidden="true" /> },
    ]

    return (
        <Menu as="div" className="relative ml-3">
            <div>
                <Menu.Button className={'flex flex-row items-center gap-3'}>
                    <div className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={user?.image || getGravatarURL(user.email)} alt="" />
                    </div>
                    <div className='flex flex-col  items-start text-sm'>
                        <span className='text-white hidden sm:block'>Hi, {user.name}</span>
                        {/* <span className='text-gray-300'>{user.email}</span> */}
                    </div>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-gray-700 p-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item key={user.name}>
                        {({ active }) => (
                            <div className='flex flex-row items-center gap-3 px-4 py-2'>
                                <div className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-10 w-10 rounded-full" src={user.image || getGravatarURL(user.email)} alt="" />
                                </div>
                                <div className='flex flex-col  items-start text-sm'>
                                    <span className='text-white'>Hi, {user.name}</span>
                                    <span className='text-gray-300'>{user.email}</span>
                                </div>
                            </div>
                        )}
                    </Menu.Item>
                    <div className='my-1 border-t border-gray-500'></div>
                    {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                            {({ active }) => (
                                <Link
                                    to={item.href}
                                    onClick={item?.onClick}
                                    className={clsx(
                                        'flex flex-row gap-2 items-center cursor-pointer',
                                        active ? 'bg-gray-800 hover:bg-gray-600 rounded-md' : '',
                                        'block px-4 py-2 text-sm text-gray-100'
                                    )}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

function getGravatarURL( email ) {
  // Trim leading and trailing whitespace from
  // an email address and force all characters
  // to lower case
  const address = String( email ).trim().toLowerCase();

  // Create an MD5 hash of the final string
  const hash = MD5( address );

  // Grab the actual image URL
  return `https://www.gravatar.com/avatar/${ hash }`;
}