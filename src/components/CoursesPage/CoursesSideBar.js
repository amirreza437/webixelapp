



import SideBarInstagramBanner from "../ArticlesPage/SideBarInstagramBanner";



export default function CoursesSideBar() {
    return (
        <div className="container mx-auto max-w-[1288px] hidden md:block space-y-5" id="sidebar">
            <div className="bg-white grid grid-cols-1 rounded-md p-[20px] gap-y-6">
                <form className="hidden xl:flex flex-row-reverse justify-end">
                    <input className="bg-[#ECEEEF] outline-none p-3 rounded-l-md" type="search" placeholder="دنبال مقاله خاصی هستی؟"/>    
                    <button className="bg-[#FF0060] text-white p-2 rounded-r-md" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </form>
                <hr className="hidden xl:block border-t-gray-30"/>  
                <div className="space-y-5">
                    <p className="font-black text-lg">دسته بندی های برنامه نویسی</p>
                    <ul className="font-light space-y-4">
                        <li className="hover:scale-y-110 hover:text-[#FF0060]"><a href="#">طراحی سایت</a></li>
                        <hr className="border-t-gray-300"/>
                        <li className="hover:scale-y-110 hover:text-[#FF0060]"><a href="#">ویندوز</a></li>
                        <hr className="border-t-gray-300"/>
                        <li className="hover:scale-y-110 hover:text-[#FF0060]"><a href="#">هوش مصنوعی</a></li>
                        <hr className="border-t-gray-300"/>
                        <li className="hover:scale-y-110 hover:text-[#FF0060]"><a href="#">ماشین لرنینگ</a></li>
                        <hr className="border-t-gray-300"/>
                        <li className="hover:scale-y-110 hover:text-[#FF0060]"><a href="#">موبایل</a></li>
                        <hr className="border-t-gray-300"/>
                        <li className="hover:scale-y-110 hover:text-[#FF0060]"><a href="#">بازیسازی</a></li>
                    </ul>
                </div>
                <div className="space-y-5">
                    <p className="font-black text-lg">دسته بندی های گرافیک</p>
                    <ul className="font-light space-y-4">
                        <li className="hover:scale-y-110 hover:text-[#FF0060]"><a href="#">فتوشاپ</a></li>
                        <hr className="border-t-gray-300"/>
                        <li className="hover:scale-y-110 hover:text-[#FF0060]"><a href="#">ایلاستریتور</a></li>
                        <hr className="border-t-gray-300"/>
                        <li className="hover:scale-y-110 hover:text-[#FF0060]"><a href="#">رنگ شناسی</a></li>
                        <hr className="border-t-gray-300"/>
                        <li className="hover:scale-y-110 hover:text-[#FF0060]"><a href="#">ادیت ویدیو</a></li>
                        <hr className="border-t-gray-300"/>
                        <li className="hover:scale-y-110 hover:text-[#FF0060]"><a href="#">بازاریابی</a></li>
                        <hr className="border-t-gray-300"/>
                        <li className="hover:scale-y-110 hover:text-[#FF0060]"><a href="#">یوتیوب</a></li>
                    </ul>
                </div>  
            </div>
            <SideBarInstagramBanner />
            <div className="bg-white grid grid-cols-1 rounded-md p-[27px] gap-y-6">
                <div className="flex justify-between items-center">
                    <p className="font-black md:text-sm lg:text-lg">مقالات ذخیره شده</p>
                    <svg className="w-5 h-5 text-[#FF0060]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="1.5" d="M21 16.1v-5c0-4.3 0-6.44-1.32-7.77C18.36 2 16.24 2 12 2S5.64 2 4.32 3.33C3 4.66 3 6.81 3 11.1v5c0 3.09 0 4.64.73 5.31.35.32.8.53 1.27.58.98.11 2.14-.9 4.44-2.94 1.02-.9 1.53-1.36 2.12-1.47.3-.06.59-.06.88 0 .59.11 1.1.56 2.12 1.47 2.3 2.03 3.46 3.05 4.44 2.94.47-.05.92-.25 1.27-.58.73-.67.73-2.22.73-5.32Z"/>
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 6H9" opacity=".5"/>
                    </svg>
                </div>
                <hr className="border-t-gray-30"/>
                <div className="flex justify-between items-center">
                    <p className="font-black md:text-sm lg:text-lg">تگ های هفته</p>
                    <svg className="w-5 h-5 text-[#FF0060]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity=".5"/>
                    </svg>
                </div>
                <div className="flex flex-wrap gap-1">
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1" href="#">
                            <p className="text-sm">جاوا اسکریپت</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity="1"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1" href="#">
                            <p className="text-sm">پایتون</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity="1"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1" href="#">
                            <p className="text-sm">وب</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity="1"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1" href="#">
                            <p className="text-sm">هوش مصنوعی</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity="1"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1" href="#">
                            <p className="text-sm">جنگو</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity="1"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1" href="#">
                            <p className="text-sm">فلاتر</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity="1"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1" href="#">
                            <p className="text-sm">لاراول</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity="1"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1" href="#">
                            <p className="text-sm">tailwind</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity="1"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}