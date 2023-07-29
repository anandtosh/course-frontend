import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BellIcon, CheckCircleIcon, Cog6ToothIcon, ExclamationCircleIcon, InformationCircleIcon, PowerIcon, StopCircleIcon, StopIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { Link } from 'react-router-dom'


const icons = {
    info: {icon: <InformationCircleIcon className='w-6 h-6 text-blue-600'/>, bg: 'bg-blue-600'},
    error: {icon: <StopCircleIcon className='w-6 h-6 text-red-600'/>, bg: 'bg-red-600'},
    success: {icon: <CheckCircleIcon className='w-6 h-6 text-green-600'/>, bg: 'bg-green-600'},
    warning: {icon: <ExclamationCircleIcon className='w-6 h-6 text-yellow-500'/>, bg: 'bg-yellow-600'},
}

const notifications = [
    {
        id: 1,
        title: "New Message",
        message: "You have a new message from John.",
        timestamp: new Date(),
        type: "info",
        read: false,
        priority: 2,
        icon: "message.png",
        action: {
            label: "View Message",
            link: "/inbox"
        }
    },
    {
        id: 2,
        title: "Payment Received",
        message: "Payment of $1000 has been received.",
        timestamp: new Date(),
        type: "success",
        read: false,
        priority: 3,
        icon: "payment.png",
        action: {
            label: "View Transaction",
            link: "/transactions/12345"
        }
    },
    {
        id: 3,
        title: "Upcoming Event",
        message: "Reminder: Team meeting at 3:00 PM.",
        timestamp: new Date(),
        type: "warning",
        read: true,
        priority: 1,
        icon: "calendar.png",
        action: {
            label: "Join Meeting",
            link: "/meetings/9876"
        }
    },
    {
        id: 4,
        title: "Error Occurred",
        message: "An unexpected error has occurred.",
        timestamp: new Date(),
        type: "error",
        read: false,
        priority: 3,
        icon: "error.png",
        action: null // No action specified for this notification
    },
    {
        id: 5,
        title: "New Friend Request",
        message: "You have a new friend request from Lisa.",
        timestamp: new Date(),
        type: "info",
        read: false,
        priority: 2,
        icon: "friend_request.png",
        action: {
            label: "Accept Request",
            link: "/friends/requests"
        }
    }
];


export default function NotificationMenu() {
    return (
        <Menu as="div" className="relative mx-3">
            <div>
                <Menu.Button className={''}>
                    <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-gray-700 p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {/* <div className='my-1 border-b border-gray-500'>
                        <p>View All Notifications</p>
                    </div> */}
                    {notifications.map((notification) => (
                        <Menu.Item key={notification.name}>
                            {({ active }) => (
                                <div className="flex items-center gap-2 my-2 bg-gray-800  rounded-md p-2">
                                    {/* <img src={notification.icon} alt="Notification Icon" className="w-8 h-8 mr-4" /> */}
                                    {icons[notification.type].icon}
                                    <div className='w-full'>
                                        <div className='flex flex-row items-center justify-between'>
                                            <p className="text-gray-100 font-semibold">{notification.title}</p>
                                            {notification.action && (
                                                <Link
                                                    to={notification.action.link}
                                                    className={clsx(icons[notification.type].bg,"text-white text-sm inline-block px-1 rounded-md")}
                                                >
                                                    {notification.action.label}
                                                </Link>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-300 mt-1">{notification.message}</p>
                                    </div>
                                </div>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
