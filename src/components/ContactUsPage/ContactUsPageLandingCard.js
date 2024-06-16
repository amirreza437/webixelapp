



export default function ContactUsPageLandingCard() {
    return (
        <div className="container mx-auto max-w-[1288px] sm:p-10 rounded-lg mt-20 space-y-10">
            <div className="text-center space-y-4 mb-20">
                <h1 className="font-black text-3xl md:text-6xl">ارتباط  با <span className="text-[#FF0060]">وبیکسل</span></h1>
                <p className="text-base md:text-xl font-light">در این صفحه میتوانید پل های ارتباطی با وبیکسل را مشاهده کنید.</p>
            </div>
            <div className="grid grid-cols-1 place-items-center sm:flex sm:justify-center gap-x-20 gap-y-10">
                <div className="space-y-2 sm:space-y-6">
                    <h2 className="text-lg md:text-xl font-semibold">پل های ارتباطی</h2>
                    <ul className="flex gap-x-4">
                        <li className="bg-[#FF0060] text-white hover:bg-[#FFE3E7] hover:text-[#FF0060] rounded duration-200 w-fit p-1">
                            <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </li>
                        <li className="bg-[#FF0060] text-white hover:bg-[#FFE3E7] hover:text-[#FF0060] rounded duration-200 w-fit p-1">
                            <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </li>
                    </ul>
                </div>
                <div className="space-y-2 sm:space-y-6">
                    <h2 className="text-center text-lg md:text-xl font-semibold">شبکه های اجتماعی</h2>
                    <ul className="flex gap-x-4">
                        <li className="bg-[#FF0060] text-white p-1 hover:bg-[#FFE3E7] hover:text-[#FF0060] rounded duration-200">
                            <svg id="instagram" class="h-10 w-10" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
                        </li>
                        <li className="bg-[#FF0060] text-white p-1 hover:bg-[#FFE3E7] hover:text-[#FF0060] rounded duration-200 order-2">
                            <svg id="youtube" class="h-10 w-10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                        </li>
                        <li className="bg-[#FF0060] text-white p-1 hover:bg-[#FFE3E7] hover:text-[#FF0060] rounded duration-200">
                            <svg id="telegram" class="h-10 w-10" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
                        </li>
                        <li className="bg-[#FF0060] text-white p-1 hover:bg-[#FFE3E7] hover:text-[#FF0060] rounded duration-200">
                            <svg id="twitter" class="h-10 w-10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}