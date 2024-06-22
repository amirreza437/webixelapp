'use client'
import { useRef, useState } from "react"
import Drawer from 'react-modern-drawer'
import Link from 'next/link'


import 'react-modern-drawer/dist/index.css'


export default function MainHeader() {
    const [ searchBox , setSearchBox ] = useState(false)
    const focusPoint = useRef(null)
    
    const searchBarClickHandler = () => {
        setSearchBox(true);
    }

    const overlayClickHandler = () => {
        setSearchBox(false)
    }

    const [isOpen, setIsOpen] = useState(false)
    
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    return (
        <div className="bg-white sticky p-12 rounded-b-[240px] z-50">
            <div className="container mx-auto max-w-[1288px]">
                <div className="flex justify-between items-center lg:grid lg:grid-cols-9">
                    <div className="text-center lg:col-span-2">
                        <p className="font-black text-3xl text-[#FF0060]">وبیکسل</p>
                    </div>
                    <div className="block lg:hidden -order-1">
                        <button onClick={toggleDrawer}>
                        <svg className='w-6 h-6 text-[#393646]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M20.75 7c0 .41-.34.75-.75.75H4a.75.75 0 0 1 0-1.5h16c.41 0 .75.34.75.75ZM20.75 12c0 .41-.34.75-.75.75H4a.75.75 0 0 1 0-1.5h16c.41 0 .75.34.75.75ZM20.75 17c0 .41-.34.75-.75.75H4a.75.75 0 0 1 0-1.5h16c.41 0 .75.34.75.75Z" clipRule="evenodd"/>
                        </svg>
                        </button>
                        <Drawer open={isOpen} onClose={toggleDrawer} direction='right'>
                            <div className="grid grid-cols-1 gap-y-4 p-5">
                                <div onClick={toggleDrawer} className="flex justify-between items-center">
                                    <svg className="w-7 h-7 order-last" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                        <path d="M195.2 195.2a64 64 0 0 1 90.5 0L512 421.5l226.3-226.3a64 64 0 0 1 90.5 90.5L602.5 512l226.3 226.3a64 64 0 0 1-90.5 90.5L512 602.5 285.7 828.8a64 64 0 0 1-90.5-90.5L421.5 512 195.2 285.7a64 64 0 0 1 0-90.5z"/>
                                    </svg>
                                    <p className="font-black text-3xl text-[#FF0060]">وبیکسل</p>
                                </div>
                                <div>
                                    <ul className="flex justify-center gap-x-2 mt-2">
                                        <li className="rounded-full bg-[#ECEEEF] hover:bg-[#FF0060] hover:text-white p-2 flex">
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="notification">
                                                <path fill="currentColor" d="M18.75 9v.7c0 .85.24 1.68.7 2.38l1.1 1.72a2.8 2.8 0 0 1-1.52 4.21 25.8 25.8 0 0 1-14.06 0 2.8 2.8 0 0 1-1.52-4.2l1.1-1.73c.46-.7.7-1.53.7-2.38V9c0-3.87 3.02-7 6.75-7a6.88 6.88 0 0 1 6.75 7Z" opacity=".5"/>
                                                <path fill="currentColor" d="M7.24 18.55a5 5 0 0 0 9.52 0c-3.15.59-6.37.59-9.52 0Z"/>
                                            </svg>
                                        </li>
                                        <li className="rounded-full bg-[#ECEEEF] hover:bg-[#FF0060] hover:text-white p-2 order-first" id="darkMode">
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
                                                <path fill="currentColor" fillRule="evenodd" d="M12 1.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75ZM1.25 12c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM12 19.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75Z" clipRule="evenodd"/>
                                                <path fill="currentColor" d="M3.67 3.72a.75.75 0 0 1 1.06-.05L6.95 5.7a.75.75 0 0 1-1.01 1.1L3.72 4.79a.75.75 0 0 1-.05-1.06ZM20.33 3.72c.28.3.26.78-.05 1.06L18.06 6.8a.75.75 0 1 1-1.01-1.11l2.22-2.03a.75.75 0 0 1 1.06.05ZM17.03 17.02c.29-.29.76-.29 1.06 0l2.22 2.23a.75.75 0 1 1-1.06 1.06l-2.22-2.22a.75.75 0 0 1 0-1.07ZM6.98 17.02c.29.3.29.77 0 1.07L4.75 20.3a.75.75 0 0 1-1.06-1.06l2.22-2.23c.3-.29.77-.29 1.07 0Z"/>
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                                <div className="my-5">
                                    <form className="relative flex justify-center items-center w-full h-12 rounded-md">
                                        <input className="bg-[#ECEEEF] peer h-full w-full outline-none text-sm text-gray-700 p-4 pr-5 rounded-md" type="search" placeholder="دنبال چیزی هستی؟" />
                                    </form>
                                </div>
                                <div>
                                    <ul className="flex flex-col justify-center gap-y-5 text-[#393646]">
                                        <li className="hover:text-[#FF0060] font-medium">
                                            <Link href="/" className="flex justify-between items-center">صفحه اصلی
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"/>
                                                    <path fill="currentColor" fillRule="evenodd" d="M12 1.25c-.7 0-1.35.2-2.05.54-.67.33-1.45.81-2.43 1.42L5.46 4.49c-.92.57-1.66 1.03-2.23 1.47-.59.45-1.04.9-1.37 1.5-.32.6-.47 1.23-.54 1.98a31.5 31.5 0 0 0-.07 2.73v1.61c0 1.9 0 3.4.15 4.58.16 1.2.49 2.18 1.23 2.95.75.77 1.7 1.12 2.88 1.28 1.14.16 2.6.16 4.43.16h4.12c1.83 0 3.3 0 4.43-.16a4.65 4.65 0 0 0 2.88-1.28 4.92 4.92 0 0 0 1.23-2.95c.15-1.17.15-2.68.15-4.58v-1.61c0-1.12 0-2-.07-2.73a4.94 4.94 0 0 0-.54-1.98 4.78 4.78 0 0 0-1.37-1.5c-.57-.44-1.3-.9-2.23-1.47l-2.06-1.28c-.98-.6-1.76-1.09-2.43-1.42A4.59 4.59 0 0 0 12 1.25ZM8.28 4.5a29 29 0 0 1 2.33-1.36c.58-.28.99-.39 1.39-.39.4 0 .81.1 1.4.4a29 29 0 0 1 2.32 1.35l2 1.25c.96.6 1.64 1.01 2.14 1.4.49.37.77.68.96 1.03.2.36.3.77.37 1.4.06.65.06 1.47.06 2.62v1.53c0 1.97 0 3.37-.14 4.44-.14 1.05-.4 1.65-.82 2.1-.43.44-1 .7-2 .84a34.8 34.8 0 0 1-4.29.14h-4c-1.9 0-3.26 0-4.29-.14-1-.14-1.57-.4-2-.84-.43-.45-.68-1.05-.82-2.1a38.54 38.54 0 0 1-.14-4.45V12.2c0-1.15 0-1.97.06-2.62.06-.63.17-1.04.37-1.4.19-.35.47-.66.96-1.03.5-.39 1.18-.8 2.14-1.4l2-1.25Z" clipRule="evenodd"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="hover:text-[#FF0060] font-medium">
                                            <Link href="/articles" className="flex justify-between items-center">مقالات
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path fill="currentColor" fillRule="evenodd" d="M15.61 1.58a2.75 2.75 0 0 1 3.14 2.73v1.37c1.19.63 2 1.88 2 3.32v10A3.75 3.75 0 0 1 17 22.75H7A3.75 3.75 0 0 1 3.25 19V5a.78.78 0 0 1 0-.07c0-.9.67-1.68 1.56-1.8l10.8-1.55ZM4.75 6.75V19c0 1.24 1 2.25 2.25 2.25h10c1.24 0 2.25-1 2.25-2.25V9c0-1.24-1-2.25-2.25-2.25H4.75Zm.32-1.5h12.18v-.94c0-.76-.67-1.35-1.43-1.24L5.02 4.6a.32.32 0 0 0 .05.64ZM7.25 12c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 3.5c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="hover:text-[#FF0060] font-medium">
                                            <Link href="/roadmaps" className="flex justify-between items-center">رود مپ ها
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path fill="currentColor" fillRule="evenodd" d="M3.25 10.14c0-4.9 3.9-8.89 8.75-8.89 4.84 0 8.75 4 8.75 8.9 0 2.36-.67 4.9-1.87 7.1a11.68 11.68 0 0 1-5.1 5.1 4.2 4.2 0 0 1-3.56 0 11.68 11.68 0 0 1-5.1-5.1 15.24 15.24 0 0 1-1.87-7.1ZM12 2.75c-4 0-7.25 3.3-7.25 7.4 0 2.09.6 4.39 1.68 6.38 1.09 1.99 2.62 3.62 4.42 4.46a2.7 2.7 0 0 0 2.3 0c1.8-.84 3.33-2.47 4.42-4.46 1.08-2 1.68-4.29 1.68-6.39 0-4.1-3.26-7.39-7.25-7.39Zm-1.03 3.18c.66-.24 1.4-.24 2.06 0l2.35.86c.54.2.87.68.87 1.21a1.3 1.3 0 0 1-.87 1.21l-.13.05v2.44c0 .67-.4 1.33-1.08 1.58-.53.2-1.4.47-2.17.47-.78 0-1.64-.27-2.17-.47a1.67 1.67 0 0 1-1.08-1.58V9.26l-.13-.05A1.3 1.3 0 0 1 7.75 8c0-.53.33-1.02.87-1.21l2.35-.86Zm-.72 3.88v1.89c0 .1.06.16.1.17.5.19 1.15.38 1.65.38s1.15-.19 1.65-.38c.04-.01.1-.06.1-.17V9.8l-.72.27c-.66.24-1.4.24-2.06 0l-.72-.26Zm2.27-2.47c-.33-.12-.7-.12-1.04 0L9.68 8l1.8.66c.33.12.7.12 1.04 0l1.8-.66-1.8-.66Z" clipRule="evenodd"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="hover:text-[#FF0060] font-medium">
                                            <Link href="/about-us" className="flex justify-between items-center">درباره ما
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path fill="currentColor" fillRule="evenodd" d="M15.68 1.68c.18.38.01.82-.36 1L9.86 5.25h4.2c1.83 0 3.29 0 4.43.15 1.17.16 2.12.5 2.87 1.24.75.75 1.08 1.7 1.24 2.87.15 1.14.15 2.6.15 4.43v.12c0 1.83 0 3.29-.15 4.43a4.71 4.71 0 0 1-1.24 2.87 4.71 4.71 0 0 1-2.87 1.24c-1.14.15-2.6.15-4.43.15H9.94c-1.83 0-3.29 0-4.43-.15a4.71 4.71 0 0 1-2.87-1.24 4.71 4.71 0 0 1-1.24-2.87c-.15-1.14-.15-2.6-.15-4.43v-.12c0-1.83 0-3.29.15-4.43a4.71 4.71 0 0 1 1.24-2.87A4.71 4.71 0 0 1 5.51 5.4a12.57 12.57 0 0 1 .67-.08l8.5-4a.75.75 0 0 1 1 .36ZM5.7 6.9c-1 .14-1.58.39-2 .81-.43.43-.68 1-.82 2.01A36 36 0 0 0 2.75 14c0 1.9 0 3.26.14 4.29.14 1 .39 1.59.81 2 .43.43 1 .69 2.01.82 1.03.14 2.38.14 4.29.14h4c1.9 0 3.26 0 4.29-.14 1-.13 1.58-.39 2-.81.43-.42.69-1 .82-2.01.14-1.03.14-2.38.14-4.29 0-1.9 0-3.26-.14-4.29-.13-1-.39-1.58-.81-2-.43-.43-1-.68-2.01-.82A36 36 0 0 0 14 6.75h-4a36 36 0 0 0-4.29.14ZM8 11.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM4.25 14a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm8.5-3c0-.41.34-.75.75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 3c0-.41.34-.75.75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 3c0-.41.34-.75.75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="hover:text-[#FF0060] font-medium">
                                            <Link href="/contact-us" className="flex justify-between items-center">تماس با ما
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path fill="currentColor" fillRule="evenodd" d="M5.26 9.56a6.75 6.75 0 0 1 13.48 0A2.75 2.75 0 0 1 22.75 12v2a2.75 2.75 0 0 1-2.9 2.75 2.6 2.6 0 0 1-2.6-2.6V10a5.25 5.25 0 0 0-10.5 0v4.15a2.6 2.6 0 0 1-2.6 2.6H4A2.75 2.75 0 0 1 1.25 14v-2a2.75 2.75 0 0 1 4.01-2.44ZM5.25 12a1.25 1.25 0 0 0-2.5 0v2a1.25 1.25 0 0 0 2.5 0v-2Zm3-2a3.75 3.75 0 1 1 7.5 0v3a3.75 3.75 0 0 1-3 3.68V19a.75.75 0 0 1-1.5 0v-2.32a3.75 3.75 0 0 1-3-3.68v-3Zm1.63-.75H10a.75.75 0 0 1 0 1.5h-.25v1.5H10a.75.75 0 0 1 0 1.5h-.12a2.25 2.25 0 0 0 4.24 0H13a.75.75 0 0 1 0-1.5h1.25v-1.5H13a.75.75 0 0 1 0-1.5h1.12a2.25 2.25 0 0 0-4.24 0ZM20 10.75c-.69 0-1.25.56-1.25 1.25v2a1.25 1.25 0 1 0 2.5 0v-2c0-.69-.56-1.25-1.25-1.25Z" clipRule="evenodd"/>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Drawer>
                    </div>
                    <div className="lg:col-span-5 bg-[#ECEEEF] rounded-md z-20 hidden lg:block">
                        <form className="relative flex justify-center items-center w-full h-12 rounded-md z-20">
                            <div className="grid place-items-center h-full w-12 text-gray-300 z-20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <div className={`overlay ${searchBox ? 'overlay--visible' : ''}`} onClick={overlayClickHandler}></div>
                            <input
                            onClick={searchBarClickHandler}
                            className="bg-[#ECEEEF] peer h-full w-full outline-none text-sm text-gray-700 pr-2 rounded-md z-20"
                            type="text"
                            id="search"
                            placeholder="دنبال چیزی هستی؟" /> 
                        </form>
                    </div>
                    <div className="lg:col-span-2">
                        <ul className="flex justify-end gap-x-4">
                            <li className="rounded-full bg-[#ECEEEF] hover:bg-[#FF0060] hover:text-white p-2 hidden lg:block" id="darkMode">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
                                    <path fill="currentColor" fillRule="evenodd" d="M12 1.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75ZM1.25 12c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM12 19.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75Z" clipRule="evenodd"/>
                                    <path fill="currentColor" d="M3.67 3.72a.75.75 0 0 1 1.06-.05L6.95 5.7a.75.75 0 0 1-1.01 1.1L3.72 4.79a.75.75 0 0 1-.05-1.06ZM20.33 3.72c.28.3.26.78-.05 1.06L18.06 6.8a.75.75 0 1 1-1.01-1.11l2.22-2.03a.75.75 0 0 1 1.06.05ZM17.03 17.02c.29-.29.76-.29 1.06 0l2.22 2.23a.75.75 0 1 1-1.06 1.06l-2.22-2.22a.75.75 0 0 1 0-1.07ZM6.98 17.02c.29.3.29.77 0 1.07L4.75 20.3a.75.75 0 0 1-1.06-1.06l2.22-2.23c.3-.29.77-.29 1.07 0Z"/>
                                </svg>
                            </li>
                            <li className="rounded-full bg-[#ECEEEF] hover:bg-[#FF0060] hover:text-white p-2 hidden lg:block">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="notification">
                                    <path fill="currentColor" d="M18.75 9v.7c0 .85.24 1.68.7 2.38l1.1 1.72a2.8 2.8 0 0 1-1.52 4.21 25.8 25.8 0 0 1-14.06 0 2.8 2.8 0 0 1-1.52-4.2l1.1-1.73c.46-.7.7-1.53.7-2.38V9c0-3.87 3.02-7 6.75-7a6.88 6.88 0 0 1 6.75 7Z" opacity=".5"/>
                                    <path fill="currentColor" d="M7.24 18.55a5 5 0 0 0 9.52 0c-3.15.59-6.37.59-9.52 0Z"/>
                                </svg>
                            </li>
                            <li className="rounded-full bg-[#ECEEEF] hover:bg-[#FF0060] hover:text-white p-2" id="profile">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <circle cx="12" cy="6" r="4" fill="currentColor"/>
                                    <path fill="currentColor" d="M20 17.5c0 2.49 0 4.5-8 4.5s-8-2.01-8-4.5S7.58 13 12 13s8 2.01 8 4.5Z" opacity=".5"/>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul className="hidden lg:flex justify-center gap-x-5 text-[#393646] mt-4 translate-y-4">
                <li className="hover:text-[#FF0060] font-medium"><Link href="/">خانه</Link></li>
                <li className="hover:text-[#FF0060] font-medium"><Link href="/articles">مقالات</Link></li>
                <li className="hover:text-[#FF0060] font-medium"><Link href="/courses">دوره های آموزشی</Link></li>
                <li className="hover:text-[#FF0060] font-medium"><Link href="/about-us">درباره ما</Link></li>
                <li className="hover:text-[#FF0060] font-medium"><Link href="/contact-us">تماس با ما</Link></li>
            </ul>
        </div>
    )
}