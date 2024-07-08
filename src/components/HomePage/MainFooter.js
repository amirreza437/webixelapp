


export default function MainFooter() {
    return (
        <div className="sticky top-[100vh] container mx-auto max-w-[1288px] p-10 ">
            <div className="bg-[#32527C] bg-opacity-10 rounded-3xl dark:bg-[#0E2338]">
                <div className="p-10 grid grid-cols-1 place-items-center gap-y-5 md:flex md:justify-between items-center">
                    <p className="text-4xl font-black">وبیکسل</p>
                    <ul className="flex gap-x-2">
                        <li className="bg-[#FF0060] text-white p-1 hover:bg-[#FFE3E7] hover:text-[#FF0060] rounded duration-200 dark:hover:bg-[#162F48]">
                            <svg id="instagram" class="h-6 w-6" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
                        </li>
                        <li className="bg-[#FF0060] text-white p-1 hover:bg-[#FFE3E7] hover:text-[#FF0060] rounded duration-200 dark:hover:bg-[#162F48] order-2">
                            <svg id="youtube" class="h-6 w-6" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                        </li>
                        <li className="bg-[#FF0060] text-white p-1 hover:bg-[#FFE3E7] hover:text-[#FF0060] rounded duration-200 dark:hover:bg-[#162F48]">
                            <svg id="telegram" class="h-6 w-6" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
                        </li>
                        <li className="bg-[#FF0060] text-white p-1 hover:bg-[#FFE3E7] hover:text-[#FF0060] rounded duration-200 dark:hover:bg-[#162F48]">
                            <svg id="twitter" class="h-6 w-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                        </li>
                    </ul>
                </div>   
                <div className="p-10 grid grid-cols-1 lg:grid-cols-6 gap-x-5 gap-y-10 text-center lg:text-right items-start -translate-y-14 md:-translate-y-7">
                    <div className="grid gap-y-4 col-span-2 mt-7 lg:mt-0">
                        <h3 className="text-xl font-black flex justify-center lg:justify-normal">وبیکسل
                            <svg className="w-4 h-4 text-[#FF0060] translate-x-[83px] translate-y-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.53 2.53a.75.75 0 1 0-1.06-1.06l-2.4 2.4a4.47 4.47 0 0 1 1.06 1.06l2.4-2.4ZM2.45 11.41l.74 1.22a24.45 24.45 0 0 0 8.18 8.18l1.22.74c1.9.97 4.35.35 5.41-1.66a16.42 16.42 0 0 0 2-7.4c.03-.64.04-.96-.11-1.36-.15-.4-.42-.66-.94-1.18l-4.83-4.83c-.5-.49-.74-.74-1.1-.89a2.95 2.95 0 0 0-1.26-.15c-1.11 0-2.78.12-4.58.64-1.06.3-2.12.78-3.07 1.28a4.04 4.04 0 0 0-1.66 5.41Z" opacity=".3"/>
                                <path fill="currentColor" d="M19.64 4.36a4.45 4.45 0 0 0-6.28 0l-.04.04c.23.15.45.38.8.72l4.83 4.83c.3.3.51.51.67.72l.02-.03a4.45 4.45 0 0 0 0-6.28Z"/>
                            </svg>
                        </h3>
                        <p className="text-lg font-light">"<span className="font-semibold text-[#FF0060]">وبیکسل،</span> با مقالات و دوره ها و مطالب بروز خود، راهنمای شما در این مسیر خواهد بود"</p>
                    </div>
                    <div className="grid gap-y-4 col-span-2">
                        <h3 className="text-xl font-black flex justify-center lg:justify-normal">از ما بدانید
                            <svg className="w-4 h-4 text-[#FF0060] translate-x-[103px] translate-y-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.53 2.53a.75.75 0 1 0-1.06-1.06l-2.4 2.4a4.47 4.47 0 0 1 1.06 1.06l2.4-2.4ZM2.45 11.41l.74 1.22a24.45 24.45 0 0 0 8.18 8.18l1.22.74c1.9.97 4.35.35 5.41-1.66a16.42 16.42 0 0 0 2-7.4c.03-.64.04-.96-.11-1.36-.15-.4-.42-.66-.94-1.18l-4.83-4.83c-.5-.49-.74-.74-1.1-.89a2.95 2.95 0 0 0-1.26-.15c-1.11 0-2.78.12-4.58.64-1.06.3-2.12.78-3.07 1.28a4.04 4.04 0 0 0-1.66 5.41Z" opacity=".3"/>
                                <path fill="currentColor" d="M19.64 4.36a4.45 4.45 0 0 0-6.28 0l-.04.04c.23.15.45.38.8.72l4.83 4.83c.3.3.51.51.67.72l.02-.03a4.45 4.45 0 0 0 0-6.28Z"/>
                            </svg>
                        </h3>
                        <ul className="text-lg font-light grid gap-y-2 translate-x-3 lg:translate-x-0">
                            <li>
                                <a href="#" className="hover:text-[#FF0060]">درباره ما
                                    <svg className="hidden lg:block w-4 h-4 text-[#393646] -translate-y-7 translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" opacity=".2"/>
                                        <path fill="currentColor" fillRule="evenodd" d="M21.53 2.47c.3.3.3.77 0 1.06l-7.72 7.72h3.53a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.66a.75.75 0 0 1 1.5 0v3.53l7.72-7.72c.3-.3.77-.3 1.06 0Z" clipRule="evenodd"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#FF0060]">ارتباط با ما
                                    <svg className="hidden lg:block w-4 h-4 text-[#393646] -translate-y-7 translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" opacity=".2"/>
                                        <path fill="currentColor" fillRule="evenodd" d="M21.53 2.47c.3.3.3.77 0 1.06l-7.72 7.72h3.53a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.66a.75.75 0 0 1 1.5 0v3.53l7.72-7.72c.3-.3.77-.3 1.06 0Z" clipRule="evenodd"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#FF0060]">قوانین و مقررات
                                    <svg className="hidden lg:block w-4 h-4 text-[#393646] -translate-y-7 translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" opacity=".2"/>
                                        <path fill="currentColor" fillRule="evenodd" d="M21.53 2.47c.3.3.3.77 0 1.06l-7.72 7.72h3.53a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.66a.75.75 0 0 1 1.5 0v3.53l7.72-7.72c.3-.3.77-.3 1.06 0Z" clipRule="evenodd"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-y-4 col-span-2">
                        <h3 className="text-xl font-black flex justify-center lg:justify-normal">راه های ارتباطی
                            <svg className="w-4 h-4 text-[#FF0060] translate-x-[138px] translate-y-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.53 2.53a.75.75 0 1 0-1.06-1.06l-2.4 2.4a4.47 4.47 0 0 1 1.06 1.06l2.4-2.4ZM2.45 11.41l.74 1.22a24.45 24.45 0 0 0 8.18 8.18l1.22.74c1.9.97 4.35.35 5.41-1.66a16.42 16.42 0 0 0 2-7.4c.03-.64.04-.96-.11-1.36-.15-.4-.42-.66-.94-1.18l-4.83-4.83c-.5-.49-.74-.74-1.1-.89a2.95 2.95 0 0 0-1.26-.15c-1.11 0-2.78.12-4.58.64-1.06.3-2.12.78-3.07 1.28a4.04 4.04 0 0 0-1.66 5.41Z" opacity=".3"/>
                                <path fill="currentColor" d="M19.64 4.36a4.45 4.45 0 0 0-6.28 0l-.04.04c.23.15.45.38.8.72l4.83 4.83c.3.3.51.51.67.72l.02-.03a4.45 4.45 0 0 0 0-6.28Z"/>
                            </svg>
                        </h3>
                        <ul className="text-lg font-light grid gap-y-2">
                            <li className="grid grid-cols-1 sm:flex justify-between">
                                <p>ایمیل:
                                    <svg className="w-4 h-4 text-[#393646] -translate-y-7 translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" opacity=".2"/>
                                        <path fill="currentColor" fillRule="evenodd" d="M21.53 2.47c.3.3.3.77 0 1.06l-7.72 7.72h3.53a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.66a.75.75 0 0 1 1.5 0v3.53l7.72-7.72c.3-.3.77-.3 1.06 0Z" clipRule="evenodd"/>
                                    </svg>
                                </p>
                                <a href="#" className="hover:text-[#FF0060]">webixel@info.com</a>
                            </li>
                            <li className="grid grid-cols-1 sm:flex justify-between">
                                <p>تلگرام:
                                    <svg className="w-4 h-4 text-[#393646] -translate-y-7 translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" opacity=".2"/>
                                        <path fill="currentColor" fillRule="evenodd" d="M21.53 2.47c.3.3.3.77 0 1.06l-7.72 7.72h3.53a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.66a.75.75 0 0 1 1.5 0v3.53l7.72-7.72c.3-.3.77-.3 1.06 0Z" clipRule="evenodd"/>
                                    </svg>
                                </p>
                                <a href="#" className="hover:text-[#FF0060]">webixel_support@</a>
                            </li>
                            <li className="grid grid-cols-1 sm:flex justify-between">
                                <p>واتساپ:
                                    <svg className="w-4 h-4 text-[#393646] -translate-y-7 translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" opacity=".2"/>
                                        <path fill="currentColor" fillRule="evenodd" d="M21.53 2.47c.3.3.3.77 0 1.06l-7.72 7.72h3.53a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.66a.75.75 0 0 1 1.5 0v3.53l7.72-7.72c.3-.3.77-.3 1.06 0Z" clipRule="evenodd"/>
                                    </svg>
                                </p>
                                <a href="#" className="hover:text-[#FF0060]">webixel@</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center bg-[#FF0060] rounded-b-3xl p-3 text-white grid gap-y-2">
                    <p className="text-sm font-light">کلیه محصولات و مطالب این سایت متعلق به وبیکسل است و هر گونه کپی برداری از محتوای سایت غیر مجاز بوده و بدون رضایت ماست.</p>
                </div>   
            </div>
        </div>
    )
}