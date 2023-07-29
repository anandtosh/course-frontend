import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, Cog6ToothIcon, PowerIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { Link, useLocation, useParams } from 'react-router-dom'
import UserMenu from './partials/UserMenu'
import NotificationMenu from './partials/NotificationMenu'
import { useAuthStore } from '../../stores'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'All Courses', to: '/courses' },
  { name: 'My Courses', to: '/learning/courses' },
  { name: 'Quizzes', to: '/learning/quizzes' },
  { name: 'Exams', to: '/learning/exams' },
]

export default function Example() {

  const {token} = useAuthStore()
  const { pathname } = useLocation()

  return (
    <>
      {/* <div className="min-h-full"> */}
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="items-center hidden sm:flex">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className={clsx(
                            item.to == pathname
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.to == pathname ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:block">
                  {
                    token ?
                      <div className="ml-4 flex items-center md:ml-6">
                        <NotificationMenu />
                        {/* Profile dropdown */}
                        <UserMenu />
                      </div>
                      :
                      <div className='ml-4 flex items-center md:ml-6'>
                        <Link to={'/register'} className='bg-transparent border border-green-400 text-green-400 hover:border-green-300 hover:text-green-300 w-[120px] text-center py-2 rounded-full mx-4 hidden md:block'>
                          Register
                        </Link>
                        <Link to={'/login'} className='bg-transparent border border-blue-400 text-blue-400 hover:border-blue-300 hover:text-blue-300 w-[120px] text-center py-2 rounded-full ml-4'>
                          Login
                        </Link>
                      </div>
                  }
                </div>

              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    // as="a"
                    to={item.to}
                    className={clsx(
                      item.to == pathname ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.to == pathname ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header> */}
      {/* </div> */}
    </>
  )
}

