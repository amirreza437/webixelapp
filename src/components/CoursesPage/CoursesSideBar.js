



import SideBarInstagramBanner from "../ArticlesPage/SideBarInstagramBanner";



export default function CoursesSideBar() {
    return (
        <div className="container mx-auto max-w-[1288px] hidden md:block space-y-5" id="sidebar">
            <div className="bg-white grid grid-cols-1 rounded-md p-[20px] gap-y-6 dark:bg-[#0E2338]">
                <form className="hidden xl:flex flex-row-reverse justify-end">
                    <input className="bg-[#ECEEEF] outline-none p-3 rounded-l-md dark:bg-[#162F48]" type="search" placeholder="دنبال دوره خاصی هستی؟"/>    
                    <button className="bg-[#FF0060] text-white p-2 rounded-r-md" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </form>
                <hr className="hidden xl:block border-t-gray-30 dark:border-t-[#EEEEEE]/20"/>  
                <div className="space-y-5">
                    <p className="font-black text-lg">دسته بندی های برنامه نویسی</p>
                    <ul className="font-light space-y-4">
                        <li className="flex justify-between">
                            <div className="flex items-center gap-x-4">
                                <input className="accent-[#FF0060] w-5 h-5 hover:accent-slate-500 duration-200" type="checkbox" />
                                <label className="font-light text-base">رایگان</label>
                            </div>
                            <span className="text-gray-400 font-light text-sm">20</span>
                        </li>
                        <li className="flex justify-between">
                            <div className="flex items-center gap-x-4">
                                <input className="accent-[#FF0060] w-5 h-5 hover:accent-slate-500 duration-200" type="checkbox" />
                                <label className="font-light text-base">نقدی</label>
                            </div>
                            <span className="text-gray-400 font-light text-sm">15</span>
                        </li>
                        <li className="flex justify-between">
                            <div className="flex items-center gap-x-4">
                                <input className="accent-[#FF0060] w-5 h-5 hover:accent-slate-500 duration-200" type="checkbox" />
                                <label className="font-light text-base">فقط اعضای ویژه</label>
                            </div>
                            <span className="text-gray-400 font-light text-sm">25</span>
                        </li>
                    </ul>
                </div>
                <div className="space-y-5">
                    <p className="font-black text-lg">مرتب سازی براساس</p>
                    <ul className="font-light space-y-4">
                        <li className="hover:text-[#FF0060] duration-200"><a href="#">جدیدترین</a></li>
                        <hr className="border-t-gray-30 dark:border-t-[#EEEEEE]/20"/>
                        <li className="hover:text-[#FF0060] duration-200"><a href="#">در حال برگذاری</a></li>
                        <hr className="border-t-gray-30 dark:border-t-[#EEEEEE]/20"/>
                        <li className="hover:text-[#FF0060] duration-200"><a href="#">تکمیل ضبط‌ شده‌ها</a></li>
                        <hr className="border-t-gray-30 dark:border-t-[#EEEEEE]/20"/>
                        <li className="hover:text-[#FF0060] duration-200"><a href="#">مخصوص ناشنوایان</a></li>
                        <hr className="border-t-gray-30 dark:border-t-[#EEEEEE]/20"/>
                        <li className="hover:text-[#FF0060] duration-200"><a href="#">بروز شده ها</a></li>
                        <hr className="border-t-gray-30 dark:border-t-[#EEEEEE]/20"/>
                        <li className="hover:text-[#FF0060] duration-200"><a href="#">قدیمی ترین</a></li>
                    </ul>
                </div>  
            </div>
            <SideBarInstagramBanner />
            <div className="bg-white grid grid-cols-1 rounded-md p-[27px] gap-y-6 dark:bg-[#0E2338]">
                <div className="flex flex-col">
                    <p className="font-black md:text-sm lg:text-lg dark:text-[#EEEEEE]">گواهی پایان دوره</p>
                    <p className="font-light text-base text-gray-800 mt-5 dark:text-[#EEEEEE]">شما می‌توانید در پایان هر دوره از وبیکسل گواهی پایان دوره به همراه گواهی تاییدیه فنی دریافت کنید.</p>
                </div>
                <hr className="border-t-gray-30 dark:border-t-[#EEEEEE]/20"/>
                <div className="flex justify-between items-center">
                    <p className="font-black md:text-sm lg:text-lg dark:text-[#EEEEEE]">برچسب های دوره ها</p>
                    <svg className="w-5 h-5 text-[#FF0060] flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity=".5"/>
                    </svg>
                </div>
                <div className="flex flex-wrap gap-1">
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1 dark:bg-[#162F48] duration-200" href="#">
                            <p className="text-sm">جاوا اسکریپت</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white dark:text-[#EEEEEE]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity="1"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1 dark:bg-[#162F48] duration-200" href="#">
                            <p className="text-sm">پایتون</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white dark:text-[#EEEEEE]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity="1"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1 dark:bg-[#162F48] duration-200" href="#">
                            <p className="text-sm">وب</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white dark:text-[#EEEEEE]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity="1"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1 dark:bg-[#162F48] duration-200" href="#">
                            <p className="text-sm">هوش مصنوعی</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white dark:text-[#EEEEEE]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity="1"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1 dark:bg-[#162F48] duration-200" href="#">
                            <p className="text-sm">جنگو</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white dark:text-[#EEEEEE]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity="1"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1 dark:bg-[#162F48] duration-200" href="#">
                            <p className="text-sm">فلاتر</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white dark:text-[#EEEEEE]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity="1"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1 dark:bg-[#162F48] duration-200" href="#">
                            <p className="text-sm">لاراول</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white dark:text-[#EEEEEE]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3 5 21M19 3l-5 18"/>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9H4M20 16H2" opacity="1"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="group bg-[#ECEEEF] flex flex-row-reverse items-center hover:bg-[#FF0060] hover:text-white rounded p-1 dark:bg-[#162F48] duration-200" href="#">
                            <p className="text-sm">tailwind</p>
                            <svg className="w-3 h-3 fill-current text-[#393646] hover:bg-[#FF0060] group-hover:text-white dark:text-[#EEEEEE]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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