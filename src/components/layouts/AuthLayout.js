import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import img1 from '../../assets/banners/OIG.jpg';
import img2 from '../../assets/banners/OIG.k.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const AuthLayout = () => {


    return (
        <div className='min-h-screen grid grid-cols-5'>
            <div className='col-span-5 md:col-span-2 flex flex-col items-center justify-center'>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="flex items-center justify-center">
                        <Link to={'/'} className="font-bold text-blue-500 text-md mx-auto h-10 w-full text-center">
                            anandbhatnagar.com
                        </Link>
                    </div>
                    {/* <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
                        Sign in to your account
                    </h2> */}
                </div>
                <div className='w-full px-6 md:px-0 '>
                    <Outlet />
                </div>
            </div>
            <div className='col-span-3 h-full hidden md:block'>
                <Swiper
                    initialSlide={null}
                    spaceBetween={10}
                    navigation={true}
                    loop={true}
                    centeredSlides={true}
                    modules={[Navigation, Thumbs]}
                    className="h-screen w-full"
                >
                    <SwiperSlide className="flex h-screen justify-center items-center">
                        <img src={img1} alt='img1' className="object-cover w-full h-full" />
                    </SwiperSlide>
                    <SwiperSlide className="flex h-screen justify-center items-center">
                        <img src={img2} alt='img2' className="object-cover w-full h-full" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default AuthLayout