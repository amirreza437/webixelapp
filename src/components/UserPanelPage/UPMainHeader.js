'use client'
import React, { useState } from "react";
import Link from "next/link";
import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'
import { useEffect } from "react";



export default function UPMainHeader() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const [theme,setTheme] = useState('light')

    useEffect(() => {
        if ( theme === 'dark') {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    })

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className="flex items-center">
            <button className="xl:hidden" onClick={toggleDrawer}>
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path fill="#334155" fill-rule="evenodd" d="M3.464 20.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535ZM18.75 16a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75ZM18 12.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5h12ZM18.75 8a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75Z" clip-rule="evenodd"/>
                </svg>
            </button>
            <Drawer 
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            className="p-6">
                <div onClick={toggleDrawer} className="flex justify-between items-center">
                    <svg className="w-6 h-6 order-last" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                        <path d="M195.2 195.2a64 64 0 0 1 90.5 0L512 421.5l226.3-226.3a64 64 0 0 1 90.5 90.5L602.5 512l226.3 226.3a64 64 0 0 1-90.5 90.5L512 602.5 285.7 828.8a64 64 0 0 1-90.5-90.5L421.5 512 195.2 285.7a64 64 0 0 1 0-90.5z"/>
                    </svg>
                    <p className="font-black text-3xl text-[#FF0060]">وبیکسل</p>
                </div>
                <ul className="min-h-screen space-y-10 mt-10">
                    <Link href='/user-panel' className="text-slate-700 hover:text-[#FF0060] duration-200 flex items-center gap-x-2">صفحه اصلی پنل
                        <svg className="w-6 h-6 -order-last" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212C22 19.576 22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2c-1.108 0-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823Zm6.927 7.575a.75.75 0 1 0-.894 1.204A5.766 5.766 0 0 0 12 17.75a5.766 5.766 0 0 0 3.447-1.148.75.75 0 1 0-.894-1.204A4.267 4.267 0 0 1 12 16.25a4.267 4.267 0 0 1-2.553-.852Z" clip-rule="evenodd"/>
                        </svg>
                    </Link>
                    <Link href='/user-panel/courses' className="text-slate-700 hover:text-[#FF0060] duration-200 flex items-center gap-x-2">دوره ها
                        <svg className="w-6 h-6 -order-last" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M10.096 2.004c-3.474.027-5.38.208-6.632 1.46-.857.858-1.213 2.022-1.36 3.786H6.6l3.497-5.246ZM2.026 8.75C2 9.689 2 10.763 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.237 0-2.311-.026-3.25H2.026ZM21.896 7.25c-.147-1.764-.503-2.928-1.36-3.786-.598-.597-1.344-.95-2.337-1.16L14.9 7.25h6.995ZM16.54 2.088C15.33 2 13.845 2 12 2h-.099l-3.5 5.25H13.1l3.441-5.162Z"/>
                        </svg>
                    </Link>
                    <Link href='/' className="text-slate-700 hover:text-[#FF0060] duration-200 flex items-center gap-x-2">اعلانات
                        <svg className="w-6 h-6 -order-last" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h.258c-.405.567-.578 1.205-.662 1.831-.096.714-.096 1.595-.096 2.577v.184c0 .982 0 1.863.096 2.577.104.779.348 1.578 1.002 2.233.655.654 1.454.898 2.233 1.002.714.096 1.595.096 2.577.096h.184c.982 0 1.863 0 2.577-.096.626-.084 1.264-.257 1.831-.662V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Zm-5.75-8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>
                            <path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659C13 9.682 13 8.621 13 6.5c0-2.121 0-3.182.659-3.841C14.318 2 15.379 2 17.5 2c2.121 0 3.182 0 3.841.659C22 3.318 22 4.379 22 6.5c0 2.121 0 3.182-.659 3.841-.659.659-1.72.659-3.841.659Zm-2.53-7.03a.75.75 0 0 1 1.06 0l1.47 1.47 1.47-1.47a.75.75 0 1 1 1.06 1.06L18.56 6.5l1.47 1.47a.75.75 0 0 1-1.06 1.06L17.5 7.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/>
                        </svg>
                    </Link>
                    <Link href='/' className="text-slate-700 hover:text-[#FF0060] duration-200 flex items-center gap-x-2">ذخیره شده ها
                        <svg className="w-6 h-6 -order-last" xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M2 12c0-.882 0-1.68.01-2.407.056-.195.123-.366.203-.522a4.25 4.25 0 0 1 1.858-1.858c.411-.21.919-.333 1.706-.397.15-.013.307-.023.473-.03v4.045c0 .468 0 .851.017 1.153.018.298.054.606.177.881a2.25 2.25 0 0 0 2.587 1.273c.293-.07.56-.23.806-.398.25-.17.553-.404.924-.69l.018-.014c.47-.36.602-.456.723-.508a1.25 1.25 0 0 1 .996 0c.121.052.253.147.723.508l.018.015c.37.285.675.519.924.69.247.167.513.326.806.397a2.25 2.25 0 0 0 2.587-1.273c.123-.275.16-.583.177-.881.017-.302.017-.685.017-1.153V6.785c.166.008.323.018.473.03.787.065 1.295.189 1.707.398a4.25 4.25 0 0 1 1.857 1.858c.08.156.147.327.203.522.01.726.01 1.525.01 2.407 0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Zm19.843-5.277c-.173-1.474-.538-2.49-1.308-3.259C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464c-.769.77-1.134 1.785-1.307 3.26a5.75 5.75 0 0 1 1.233-.847c.658-.336 1.385-.484 2.265-.556.864-.071 1.94-.071 3.311-.071h6.068c1.371 0 2.447 0 3.311.07.88.073 1.607.221 2.265.557.45.228.863.514 1.233.846Z" clip-rule="evenodd"/>
                            <path fill="currentColor" d="M7.75 10.808V6.752c.38-.002.794-.002 1.25-.002h6c.456 0 .87 0 1.25.002v4.056c0 .496 0 .836-.015 1.09-.015.262-.043.343-.05.358a.75.75 0 0 1-.862.425c-.016-.004-.097-.032-.315-.18-.21-.143-.479-.35-.872-.653l-.067-.052c-.37-.285-.659-.507-.973-.644a2.75 2.75 0 0 0-2.192 0c-.314.137-.603.359-.973.644l-.067.052c-.393.303-.663.51-.873.653-.217.148-.298.176-.314.18a.75.75 0 0 1-.862-.425c-.007-.015-.035-.096-.05-.358a21.485 21.485 0 0 1-.015-1.09Z"/>
                        </svg>
                    </Link>
                    <Link href='/' className="text-slate-700 hover:text-[#FF0060] duration-200 flex items-center gap-x-2">خروج
                        <svg className="w-6 h-6 -order-last" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M9.707 2.409C9 3.036 9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067.707.627 1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689-.712-.878-1.91-1.087-4.304-1.504l-2.328-.407c-2.162-.377-3.243-.565-3.95.062ZM12 10.169c.414 0 .75.351.75.784v2.094c0 .433-.336.784-.75.784s-.75-.351-.75-.784v-2.094c0-.433.336-.784.75-.784Z" clip-rule="evenodd"/>
                            <path fill="currentColor" d="M7.547 4.5c-2.058.003-3.131.048-3.815.732C3 5.964 3 7.142 3 9.5v5c0 2.357 0 3.535.732 4.268.684.683 1.757.729 3.815.732-.047-.624-.047-1.344-.047-2.123V6.623c0-.78 0-1.5.047-2.123Z"/>
                        </svg>
                    </Link>
                </ul>
            </Drawer>
            <div className="hidden xl:block bg-white w-[300px] rounded-xl rounded-tr-none p-6 h-24 dark:bg-[#0E2338]">
                <Link href='/' className="font-black text-5xl text-[#FF0060]">وبیکسل</Link>
            </div>
            <div className="bg-white flex justify-between items-center w-full rounded-r-xl p-8 mr-2 h-24 dark:bg-[#0E2338]">
                <ul className="sm:flex justify-start items-center ">
                    <p className="text-slate-700 font-bold text-sm md:text-base lg:text-lg dark:text-[#EEEEEE]">نام کاربری شما، خوش آمدید!</p>
                    <i class="sm:flex hidden mx-5 h-8 border-l border-gray-350 border-opacity-30"></i>
                    <span className="text-gray-800 text-opacity-80 font-light hidden sm:block text-xs md:text-sm dark:text-[#EEEEEE] dark:text-opacity-70">تاریخ امروز : یکشنبه 11 تیر </span>
                </ul>
                <ul className="flex justify-end gap-x-2 sm:gap-x-4">
                    <li onClick={handleThemeSwitch} className="rounded-full hover:text-[#FF0060] duration-200 p-2" id="darkMode">
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
                            <path fill="currentColor" fillRule="evenodd" d="M12 1.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75ZM1.25 12c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM12 19.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75Z" clipRule="evenodd"/>
                            <path fill="currentColor" d="M3.67 3.72a.75.75 0 0 1 1.06-.05L6.95 5.7a.75.75 0 0 1-1.01 1.1L3.72 4.79a.75.75 0 0 1-.05-1.06ZM20.33 3.72c.28.3.26.78-.05 1.06L18.06 6.8a.75.75 0 1 1-1.01-1.11l2.22-2.03a.75.75 0 0 1 1.06.05ZM17.03 17.02c.29-.29.76-.29 1.06 0l2.22 2.23a.75.75 0 1 1-1.06 1.06l-2.22-2.22a.75.75 0 0 1 0-1.07ZM6.98 17.02c.29.3.29.77 0 1.07L4.75 20.3a.75.75 0 0 1-1.06-1.06l2.22-2.23c.3-.29.77-.29 1.07 0Z"/>
                        </svg>
                    </li>
                    <Link href="/user-panel/notifications" className="rounded-full hover:text-[#FF0060] duration-200 p-2 hidden lg:block">
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="notification">
                            <path fill="currentColor" d="M18.75 9v.7c0 .85.24 1.68.7 2.38l1.1 1.72a2.8 2.8 0 0 1-1.52 4.21 25.8 25.8 0 0 1-14.06 0 2.8 2.8 0 0 1-1.52-4.2l1.1-1.73c.46-.7.7-1.53.7-2.38V9c0-3.87 3.02-7 6.75-7a6.88 6.88 0 0 1 6.75 7Z" opacity=".5"/>
                            <path fill="currentColor" d="M7.24 18.55a5 5 0 0 0 9.52 0c-3.15.59-6.37.59-9.52 0Z"/>
                        </svg>
                    </Link>
                    <Link href="/user-panel" className="rounded-full hover:text-[#FF0060] duration-200 p-2" id="profile">
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <circle cx="12" cy="6" r="4" fill="currentColor"/>
                            <path fill="currentColor" d="M20 17.5c0 2.49 0 4.5-8 4.5s-8-2.01-8-4.5S7.58 13 12 13s8 2.01 8 4.5Z" opacity=".5"/>
                        </svg>
                    </Link>
                </ul>
            </div>
        </div>
    )
}