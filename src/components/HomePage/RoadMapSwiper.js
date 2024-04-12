'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function RoadMapSwiper() {

    return (
        <Swiper 
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },

            1024: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }}
        navigation={false}
        pagination={{ clickable: true }}
        >
        <SwiperSlide className="glass2 rounded-md hover:bg-white hover:shadow-sm transition duration-200">
            <div className="p-4">
                <div className="grid grid-cols-1 min-[345px]:flex justify-between items-center">
                    <p>لوگوی رود مپ</p>
                    <p className="text-sm font-light">تعداد مراحل رود مپ</p>
                </div>
                <div className="grid gap-y-2 my-5">
                    <h3 className="font-bold text-xl">اسم رود مپ</h3>
                    <p className="font-light text-sm">توضیحات رود مپ</p>
                </div>
            </div>
            <hr className="border-gray-200"/>
            <div className="p-4">
                <a href="#" className="group flex justify-start items-center font-semibold hover:text-[#FF0060] gap-x-1">مشاهده رود مپ
                    <svg className="w-3 h-3 rotate-[225deg] group-hover:text-[#FF0060]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                        <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                    </svg>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide className="glass2 rounded-md hover:bg-white hover:shadow-sm transition duration-200">
            <div className="p-4">
                <div className="grid grid-cols-1 min-[345px]:flex justify-between items-center">
                    <p>لوگوی رود مپ</p>
                    <p className="text-sm font-light">تعداد مراحل رود مپ</p>
                </div>
                <div className="grid gap-y-2 my-5">
                    <h3 className="font-bold text-xl">اسم رود مپ</h3>
                    <p className="font-light text-sm">توضیحات رود مپ</p>
                </div>
            </div>
            <hr className="border-gray-200"/>
            <div className="p-4">
                <a href="#" className="group flex justify-start items-center font-semibold hover:text-[#FF0060] gap-x-1">مشاهده رود مپ
                    <svg className="w-3 h-3 rotate-[225deg] group-hover:text-[#FF0060]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                        <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                    </svg>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide className="glass2 rounded-md hover:bg-white hover:shadow-sm transition duration-200">
            <div className="p-4">
                <div className="grid grid-cols-1 min-[345px]:flex justify-between items-center">
                    <p>لوگوی رود مپ</p>
                    <p className="text-sm font-light">تعداد مراحل رود مپ</p>
                </div>
                <div className="grid gap-y-2 my-5">
                    <h3 className="font-bold text-xl">اسم رود مپ</h3>
                    <p className="font-light text-sm">توضیحات رود مپ</p>
                </div>
            </div>
            <hr className="border-gray-200"/>
            <div className="p-4">
                <a href="#" className="group flex justify-start items-center font-semibold hover:text-[#FF0060] gap-x-1">مشاهده رود مپ
                    <svg className="w-3 h-3 rotate-[225deg] group-hover:text-[#FF0060]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                        <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                    </svg>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide className="glass2 rounded-md hover:bg-white hover:shadow-sm transition duration-200">
            <div className="p-4">
                <div className="grid grid-cols-1 min-[345px]:flex justify-between items-center">
                    <p>لوگوی رود مپ</p>
                    <p className="text-sm font-light">تعداد مراحل رود مپ</p>
                </div>
                <div className="grid gap-y-2 my-5">
                    <h3 className="font-bold text-xl">اسم رود مپ</h3>
                    <p className="font-light text-sm">توضیحات رود مپ</p>
                </div>
            </div>
            <hr className="border-gray-200"/>
            <div className="p-4">
                <a href="#" className="group flex justify-start items-center font-semibold hover:text-[#FF0060] gap-x-1">مشاهده رود مپ
                    <svg className="w-3 h-3 rotate-[225deg] group-hover:text-[#FF0060]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                        <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                    </svg>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide className="glass2 rounded-md hover:bg-white hover:shadow-sm transition duration-200">
            <div className="p-4">
                <div className="grid grid-cols-1 min-[345px]:flex justify-between items-center">
                    <p>لوگوی رود مپ</p>
                    <p className="text-sm font-light">تعداد مراحل رود مپ</p>
                </div>
                <div className="grid gap-y-2 my-5">
                    <h3 className="font-bold text-xl">اسم رود مپ</h3>
                    <p className="font-light text-sm">توضیحات رود مپ</p>
                </div>
            </div>
            <hr className="border-gray-200"/>
            <div className="p-4">
                <a href="#" className="group flex justify-start items-center font-semibold hover:text-[#FF0060] gap-x-1">مشاهده رود مپ
                    <svg className="w-3 h-3 rotate-[225deg] group-hover:text-[#FF0060]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                        <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                    </svg>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide className="glass2 rounded-md hover:bg-white hover:shadow-sm transition duration-200">
            <div className="p-4">
                <div className="grid grid-cols-1 min-[345px]:flex justify-between items-center">
                    <p>لوگوی رود مپ</p>
                    <p className="text-sm font-light">تعداد مراحل رود مپ</p>
                </div>
                <div className="grid gap-y-2 my-5">
                    <h3 className="font-bold text-xl">اسم رود مپ</h3>
                    <p className="font-light text-sm">توضیحات رود مپ</p>
                </div>
            </div>
            <hr className="border-gray-200"/>
            <div className="p-4">
                <a href="#" className="group flex justify-start items-center font-semibold hover:text-[#FF0060] gap-x-1">مشاهده رود مپ
                    <svg className="w-3 h-3 rotate-[225deg] group-hover:text-[#FF0060]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                        <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                    </svg>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide className="glass2 rounded-md hover:bg-white hover:shadow-sm transition duration-200">
            <div className="p-4">
                <div className="grid grid-cols-1 min-[345px]:flex justify-between items-center">
                    <p>لوگوی رود مپ</p>
                    <p className="text-sm font-light">تعداد مراحل رود مپ</p>
                </div>
                <div className="grid gap-y-2 my-5">
                    <h3 className="font-bold text-xl">اسم رود مپ</h3>
                    <p className="font-light text-sm">توضیحات رود مپ</p>
                </div>
            </div>
            <hr className="border-gray-200"/>
            <div className="p-4">
                <a href="#" className="group flex justify-start items-center font-semibold hover:text-[#FF0060] gap-x-1">مشاهده رود مپ
                    <svg className="w-3 h-3 rotate-[225deg] group-hover:text-[#FF0060]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                        <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                    </svg>
                </a>
            </div>
        </SwiperSlide>
        </Swiper>
  );
};