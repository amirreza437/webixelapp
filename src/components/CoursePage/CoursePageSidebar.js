
import Image from "next/image"
import b from '@/assets/images/javidan gravatar.png'

export default function CoursePageSideBar() {
    return (
        <div className="grid grid-cols-1 gap-y-4 mt-6">
            <div className="bg-white flex justify-between items-center px-4 py-8 rounded-md shadow-sm dark:bg-[#0E2338]">
                <span className="text-blue-500 flex justify-start items-center gap-x-1 text-sm font-base">در حال برگزاری
                    <svg class="-order-last" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.57789" cy="3.28785" r="2.74867" fill="currentColor"></circle>
                    </svg>
                </span>
                <p className="text-sm font-light">4.22 از 77 رای</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white grid grid-cols-1 place-items-center rounded-md py-2 px-4 shadow-sm dark:bg-[#0E2338] dark:text-[#EEEEEE]">
                    <svg className="w-8 h-8 text-[#FF0060]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>
                        <path fill="white" fillRule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75Z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-xs font-light">مدت دوره</p>
                    <span className="text-sm font-normal">7:58:10</span>
                </div>
                    <div className="bg-white grid grid-cols-1 place-items-center rounded-md py-2 px-4 shadow-sm dark:bg-[#0E2338] dark:text-[#EEEEEE]">
                    <svg className="w-8 h-8 text-[#FF0060]" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FF0060" viewBox="0 0 24 24">
                        <g fill="#FF0060">
                            <path fillRule="evenodd" d="M2 6.634a4.634 4.634 0 1 1 9.268 0 4.634 4.634 0 0 1-9.268 0ZM12.732 17.366a4.634 4.634 0 1 1 9.268 0 4.634 4.634 0 0 1-9.268 0Z" clipRule="evenodd"/>
                            <path d="M2 17.5c0-2.121 0-3.182.659-3.841C3.318 13 4.379 13 6.5 13c2.121 0 3.182 0 3.841.659.659.659.659 1.72.659 3.841 0 2.121 0 3.182-.659 3.841C9.682 22 8.621 22 6.5 22c-2.121 0-3.182 0-3.841-.659C2 20.682 2 19.621 2 17.5ZM13 6.5c0-2.121 0-3.182.659-3.841C14.318 2 15.379 2 17.5 2c2.121 0 3.182 0 3.841.659C22 3.318 22 4.379 22 6.5c0 2.121 0 3.182-.659 3.841-.659.659-1.72.659-3.841.659-2.121 0-3.182 0-3.841-.659C13 9.682 13 8.621 13 6.5Z"/>
                        </g>
                    </svg>
                    <p className="text-xs font-light">تعداد جلسات</p>
                    <span className="text-sm font-normal">12</span>
                </div>
                    <div className="bg-white grid grid-cols-1 place-items-center rounded-md py-2 px-4 shadow-sm dark:bg-[#0E2338] dark:text-[#EEEEEE]">
                    <svg className="w-8 h-8 text-[#FF0060]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" d="M9.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z" clipRule="evenodd"/>
                        <path fill="currentColor" d="m8.223 11.574-2.175-.725a1.532 1.532 0 0 1 .805-2.952l1.898.407.21.044a15 15 0 0 0 6.288-.044l1.897-.407a1.532 1.532 0 0 1 .806 2.952l-2.175.725c-.263.088-.394.132-.493.193a1 1 0 0 0-.466.986c.016.115.066.244.165.503l1.247 3.242a1.473 1.473 0 0 1-2.654 1.26L12 15l-1.576 2.757a1.473 1.473 0 0 1-2.654-1.26l1.247-3.241c.1-.259.149-.388.165-.503a1 1 0 0 0-.466-.986c-.099-.061-.23-.105-.493-.193Z"/>
                        <path fill="currentColor" d="M12 22c5.523 0 10-2.015 10-4.5 0-1.722-2.15-3.218-5.306-3.975l.936 2.434c.749 1.948-.688 4.04-2.775 4.04a2.973 2.973 0 0 1-2.582-1.497l-.273-.48-.274.48A2.973 2.973 0 0 1 9.146 20c-2.087 0-3.525-2.093-2.776-4.041l.936-2.434C4.149 14.282 2 15.778 2 17.5 2 19.985 6.477 22 12 22Z"/>
                    </svg>
                    <p className="text-xs font-light">تعداد شرکت کنندگان</p>
                    <span className="text-sm font-normal">143 نفر</span>
                </div>
                    <div className="bg-white grid grid-cols-1 place-items-center rounded-md py-2 px-4 shadow-sm dark:bg-[#0E2338] dark:text-[#EEEEEE]">
                    <svg className="w-8 h-8 text-[#FF0060]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" d="M9.592 3.2c-.243.208-.365.312-.495.399-.298.2-.633.338-.985.408-.153.03-.313.043-.632.068-.801.064-1.202.096-1.536.214a2.713 2.713 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536-.025.319-.038.479-.068.632-.07.352-.208.687-.408.985-.087.13-.191.252-.399.495-.521.612-.782.918-.935 1.238-.353.74-.353 1.6 0 2.34.153.32.414.626.935 1.238.208.243.312.365.399.495.2.298.338.633.408.985.03.153.043.313.068.632.064.801.096 1.202.214 1.536a2.713 2.713 0 0 0 1.655 1.655c.334.118.735.15 1.536.214.319.025.479.038.632.068.352.07.687.209.985.408.13.087.252.191.495.399.612.521.918.782 1.238.935.74.353 1.6.353 2.34 0 .32-.153.626-.414 1.238-.935.243-.208.365-.312.495-.399.298-.2.633-.338.985-.408.153-.03.313-.043.632-.068.801-.064 1.202-.096 1.536-.214a2.713 2.713 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536.025-.319.038-.479.068-.632.07-.352.209-.687.408-.985.087-.13.191-.252.399-.495.521-.612.782-.918.935-1.238.353-.74.353-1.6 0-2.34-.153-.32-.414-.626-.935-1.238-.208-.243-.312-.365-.399-.495a2.713 2.713 0 0 1-.408-.985 5.72 5.72 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.713 2.713 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214-.319-.025-.479-.038-.632-.068a2.713 2.713 0 0 1-.985-.408 5.73 5.73 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.713 2.713 0 0 0-2.34 0c-.32.153-.626.414-1.238.935Zm6.781 6.663a.814.814 0 0 0-1.15-1.15l-4.85 4.85-1.596-1.595a.814.814 0 0 0-1.15 1.15l2.17 2.17a.814.814 0 0 0 1.15 0l5.427-5.425Z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-xs font-light">نوع دوره</p>
                    <span className="text-sm font-normal">نقدی</span>
                </div>
            </div>
            <div className="bg-white flex items-center gap-x-2 p-4 rounded-md shadow-sm dark:bg-[#0E2338]">
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="-8.88 -8.88 41.76 41.76">
                    <rect width="41.76" height="41.76" x="-8.88" y="-8.88" fill="#FFE3E7" strokeWidth="0" rx="20.88"/>
                    <g fill="#FF0060">
                        <path fillRule="evenodd" d="M2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121-.476.477-1.11.695-2.04.795a2.94 2.94 0 0 0-.195-.234c-.116-.128-.263-.273-.406-.414l-1.493-1.472-.551-.558a4.501 4.501 0 0 0-8.872 0l-.55.558-1.494 1.472c-.143.141-.29.286-.406.414-.05.055-.12.134-.194.234-.931-.1-1.565-.318-2.041-.795C2 16.243 2 14.828 2 12Zm7-6.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9ZM6.25 9.5A.75.75 0 0 1 7 8.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
                        <path d="M15 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                        <path d="M9.001 15.917 9 16a3 3 0 1 0 .001-.083ZM7.676 17.25l-1.08 1.065c-.325.32-.487.48-.543.614a.643.643 0 0 0 .26.813c.122.071.342.093.783.138.248.025.373.037.477.075a.838.838 0 0 1 .5.494c.039.103.052.225.077.47.045.435.068.652.14.773a.662.662 0 0 0 .824.256c.137-.056.3-.215.623-.535l1.08-1.07a4.509 4.509 0 0 1-3.141-3.094ZM13.182 20.343l1.08 1.07c.325.32.487.48.624.535.313.126.66.018.824-.256.072-.12.095-.338.14-.772.025-.246.038-.368.077-.47a.839.839 0 0 1 .5-.495c.105-.038.229-.05.477-.075.44-.045.661-.067.783-.138a.643.643 0 0 0 .26-.813c-.056-.135-.218-.295-.542-.614l-1.08-1.066a4.509 4.509 0 0 1-3.143 3.094Z"/>
                    </g>
                </svg>
                <div>
                    <p className="text-xs font-light mb-1">گواهی پایان دوره</p>
                    <p className="text-sm font-normal">وضعیت : <span className="text-[9px] bg-[#FFE3E7] p-1 rounded-sm dark:bg-[#162F48]">در انتظار مشاهده کامل دوره به شکل آنلاین</span></p>
                </div>
            </div>
            <div className="bg-white grid grid-cols-1 place-items-center gap-y-2 p-4 rounded-md shadow-sm dark:bg-[#0E2338]">
                <Image src={b} className="w-16 h-16 rounded-full" />
                <span className="text-sm font-black dark:text-[#EEEEEE]">جاویدان</span>
                <span className="text-sm font-semibold dark:text-[#EEEEEE]">مدرس دوره</span>
                <p className="bg-[#FFE3E7] text-sm font-light leading-6 text-center p-2 rounded-sm dark:bg-[#162F48] dark:text-[#EEEEEE]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</p>
            </div>
        </div>
    )
}