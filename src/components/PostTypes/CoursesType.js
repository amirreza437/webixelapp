
import Image from "next/image"
import a from '@/assets/images/a.png'


export default async function CoursesType() {
    const getCourses = async () => {
        const res = await fetch('http://localhost:3000/api' , {
            next: {revalidate:10}
        })

        return res.json()
    }

    const data = await getCourses()

    return (
        <>
            {
                data.courses.map((item , index) => (
                    <div className="bg-white grid rounded-lg gap-y-4 p-4 dark:bg-[#0E2338]">
                        <div className="relative pt-32">
                            <div className="absolute w-full -top-12">
                                <a className="inline-block h-40 overflow-hidden w-full rounded-lg">
                                    <Image className="w-full h-full object-cover transform transition duration-200 hover:scale-110" src={a} />
                                </a>
                            </div>
                            <div className="grid grid-cols-1 gap-y-2">
                                <span className="text-blue-500 flex justify-start items-center gap-x-1 text-sm font-base">{item.state}
                                    <svg class="-order-last" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3.57789" cy="3.28785" r="2.74867" fill="currentColor"></circle>
                                    </svg>
                                </span>
                                <h4 className="text-center min-[280px]:text-right font-black text-lg text-[#393646] dark:text-[#EEEEEE]">{item.title}</h4>
                                <p className="text-sm font-light">{item.description}</p>
                                <div className="grid grid-cols-1 place-items-center gap-y-4 min-[325px]:flex justify-between items-center">
                                    <div className="flex justify-between items-center gap-x-2">
                                        <a href="#" className="bg-gray-400 bg-opacity-20 flex items-center text-gray-500 gap-x-1 px-1 rounded">{item.time}
                                            <svg className="w-4 h-4 text-[#A3B0C6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M6.25 2c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2Zm5.7 2.25h.1c1.36 0 2.45 0 3.31.09.89.09 1.63.28 2.28.71.52.35.96.8 1.3 1.31.44.65.63 1.39.72 2.28.09.86.09 1.95.09 3.32v.08c0 1.37 0 2.46-.09 3.32a4.83 4.83 0 0 1-.71 2.28c-.35.52-.8.96-1.31 1.3-.65.44-1.39.63-2.28.72-.86.09-1.95.09-3.32.09h-.08c-1.37 0-2.46 0-3.32-.09a4.83 4.83 0 0 1-2.28-.71c-.52-.35-.96-.8-1.3-1.31a4.83 4.83 0 0 1-.72-2.28c-.09-.86-.09-1.95-.09-3.32v-.08c0-1.37 0-2.46.09-3.32.09-.89.28-1.63.71-2.28.35-.52.8-.96 1.31-1.3a4.83 4.83 0 0 1 2.28-.72c.86-.09 1.95-.09 3.32-.09ZM8.8 5.83c-.77.08-1.23.23-1.6.47-.35.23-.66.54-.9.9-.23.36-.38.82-.46 1.59-.08.78-.08 1.79-.08 3.21s0 2.43.08 3.21c.08.77.23 1.23.47 1.6.23.35.54.66.9.9.36.23.82.38 1.59.46.78.08 1.79.08 3.21.08s2.43 0 3.21-.08a3.37 3.37 0 0 0 1.6-.47c.35-.23.66-.54.9-.9.23-.36.38-.82.46-1.59.08-.78.08-1.79.08-3.21s0-2.43-.08-3.21a3.37 3.37 0 0 0-.47-1.6 3.25 3.25 0 0 0-.9-.9 3.37 3.37 0 0 0-1.59-.46c-.78-.08-1.79-.08-3.21-.08s-2.43 0-3.21.08ZM12 8.25c.41 0 .75.34.75.75v2.76l1.77 1.7a.75.75 0 1 1-1.04 1.08L11.86 13c-.3-.3-.45-.44-.53-.63-.08-.19-.08-.4-.08-.82V9c0-.41.34-.75.75-.75ZM6.25 22c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>
                                            </svg>
                                        </a>
                                        <button className="bg-red-700 bg-opacity-20 flex items-center text-red-700 gap-x-1 px-1 rounded hover:bg-red-500 hover:text-white">0
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M5.62 4.42a5.14 5.14 0 0 0-2.87 4.72c0 2.2.9 3.89 2.19 5.34 1.06 1.2 2.35 2.19 3.6 3.15l.89.7c.52.4 1 .77 1.44 1.03.46.27.82.39 1.13.39.31 0 .67-.12 1.13-.39.45-.26.92-.62 1.44-1.04l.89-.69c1.25-.96 2.54-1.95 3.6-3.15a7.8 7.8 0 0 0 2.19-5.34 5.14 5.14 0 0 0-2.87-4.72c-1.62-.73-3.78-.54-5.84 1.6a.75.75 0 0 1-1.08 0C9.4 3.88 7.24 3.7 5.62 4.42Zm6.38.04C9.69 2.39 7.1 2.1 5 3.06a6.64 6.64 0 0 0-3.75 6.08 9.3 9.3 0 0 0 2.57 6.34 27.46 27.46 0 0 0 3.85 3.38l.83.64c.51.4 1.06.83 1.62 1.16.55.33 1.19.59 1.88.59s1.33-.26 1.88-.59c.56-.33 1.11-.76 1.62-1.16l.83-.64a27.47 27.47 0 0 0 3.85-3.38 9.3 9.3 0 0 0 2.57-6.34A6.64 6.64 0 0 0 19 3.06c-2.1-.96-4.69-.67-7 1.4Z" clip-rule="evenodd"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 place-items-center min-[864px]:flex min-[864px]:justify-center">
                                        <p className="text-slate-700 text-xl font-bold mr-5 dark:text-[#EEEEEE]">{item.price} <span className="text-gray-800 text-opacity-20 dark:text-[#EEEEEE]">ت</span></p>
                                    </div>
                                </div>
                                <div className="flex justify-center border-t border-t-gray-300 border-opacity-45 py-2 pt-4">
                                    <a className="group flex items-center text-blue-500 text-sm font-black hover:text-slate-700 dark:hover:text-[#EEEEEE]" href="#">مشاهده اطلاعات دوره
                                    <svg class="text-blue-500 group-hover:text-slate-700 dark:group-hover:text-[#EEEEEE] mr-1 -mt-0.5" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" opacity="0.4" d="M16.7544 11.5347L20.5098 11.2026C21.3525 11.2026 22.0358 11.8925 22.0358 12.7435C22.0358 13.5945 21.3525 14.2844 20.5098 14.2844L16.7544 13.9523C16.0933 13.9523 15.5573 13.4111 15.5573 12.7435C15.5573 12.0748 16.0933 11.5347 16.7544 11.5347Z">
                                        </path>
                                        <path fill="currentColor" d="M4.14372 11.5957C4.20242 11.5365 4.42169 11.286 4.62767 11.078C5.82925 9.77526 8.96663 7.64503 10.6079 6.9931C10.857 6.8891 11.4872 6.66769 11.8249 6.65204C12.1472 6.65204 12.4551 6.72696 12.7485 6.87457C13.1151 7.08144 13.4075 7.40796 13.5692 7.79263C13.6722 8.05877 13.8338 8.85831 13.8338 8.87285C13.9944 9.74619 14.0819 11.1663 14.0819 12.7363C14.0819 14.2303 13.9944 15.5923 13.8626 16.4802C13.8482 16.4958 13.6866 17.4877 13.5105 17.8276C13.1882 18.4494 12.5581 18.8341 11.8836 18.8341H11.8249C11.3853 18.8195 10.4617 18.4337 10.4617 18.4203C8.90794 17.7684 5.84475 15.741 4.61328 14.3936C4.61328 14.3936 4.26554 14.0469 4.11493 13.8311C3.88015 13.5202 3.76276 13.1355 3.76276 12.7509C3.76276 12.3215 3.89455 11.9223 4.14372 11.5957Z">
                                        </path>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}