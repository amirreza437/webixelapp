



export default function ProgrammingRoadMapGrid() {
    return (
        <div className="mt-20 space-y-10">
            <div className="flex justify-start items-center gap-x-1 min-[700px]:gap-x-2">
                <h2 className="font-black text-xl min-[700px]:text-3xl text-[#393646]">رود مپ های برنامه نویسی</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 min-[700px]:w-10 min-[700px]:h-10 text-[#334155] -order-last">
                    <path d="M20.3116 12.6473L20.8293 10.7154C21.4335 8.46034 21.7356 7.3328 21.5081 6.35703C21.3285 5.58657 20.9244 4.88668 20.347 4.34587C19.6157 3.66095 18.4881 3.35883 16.2331 2.75458C13.978 2.15033 12.8504 1.84821 11.8747 2.07573C11.1042 2.25537 10.4043 2.65945 9.86351 3.23687C9.27709 3.86298 8.97128 4.77957 8.51621 6.44561C8.43979 6.7254 8.35915 7.02633 8.27227 7.35057L8.27222 7.35077L7.75458 9.28263C7.15033 11.5377 6.84821 12.6652 7.07573 13.641C7.25537 14.4115 7.65945 15.1114 8.23687 15.6522C8.96815 16.3371 10.0957 16.6392 12.3508 17.2435L12.3508 17.2435C14.3834 17.7881 15.4999 18.0873 16.415 17.9744C16.5152 17.9621 16.6129 17.9448 16.7092 17.9223C17.4796 17.7427 18.1795 17.3386 18.7203 16.7612C19.4052 16.0299 19.7074 14.9024 20.3116 12.6473Z" fill="#1C274C"/>
                    <path opacity="0.5" d="M16.4149 17.9745C16.2064 18.6128 15.8398 19.1903 15.347 19.6519C14.6157 20.3368 13.4881 20.6389 11.2331 21.2432C8.97798 21.8474 7.85044 22.1496 6.87466 21.922C6.10421 21.7424 5.40432 21.3383 4.86351 20.7609C4.17859 20.0296 3.87647 18.9021 3.27222 16.647L2.75458 14.7152C2.15033 12.4601 1.84821 11.3325 2.07573 10.3568C2.25537 9.5863 2.65945 8.88641 3.23687 8.3456C3.96815 7.66068 5.09569 7.35856 7.35077 6.75431C7.7774 6.64 8.16369 6.53649 8.51621 6.44534C8.51618 6.44545 8.51624 6.44524 8.51621 6.44534C8.43979 6.72513 8.3591 7.02657 8.27222 7.35081L7.75458 9.28266C7.15033 11.5377 6.84821 12.6653 7.07573 13.6411C7.25537 14.4115 7.65945 15.1114 8.23687 15.6522C8.96815 16.3371 10.0957 16.6393 12.3508 17.2435C14.3833 17.7881 15.4999 18.0873 16.4149 17.9745Z" fill="#1C274C"/>
                </svg>
            </div>
            <div className="grid grid-cols-1 min-[840px]:grid-cols-3 min-[1280px]:grid-cols-4 gap-5">
                <div className="glass rounded-md hover:bg-white hover:shadow-sm transition duration-200">
                    <div className="p-4">
                        <div className="grid grid-cols-1 min-[345px]:flex justify-between items-center">
                            <p>لوگوی رود مپ</p>
                            <p className="text-sm font-light">تعداد مراحل رود مپ</p>
                        </div>
                        <div className="grid gap-y-2 my-5">
                            <h3 className="font-bold text-xl">اسم رود مپ</h3>
                            <p className="text-[#AEB6C3] font-medium">توضیحات رود مپ</p>
                        </div>
                    </div>
                    <hr className="border-gray-200"/>
                    <div className="p-4">
                        <a href="#" className="group flex justify-start items-center text-[#FF0060] font-semibold hover:text-black gap-x-1">مشاهده رود مپ
                            <svg className="w-3 h-3 rotate-[225deg] text-[#FF0060] group-hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                                <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="glass rounded-md hover:bg-white hover:shadow-sm transition duration-200">
                    <div className="p-4">
                        <div className="grid grid-cols-1 min-[345px]:flex justify-between items-center">
                            <p>لوگوی رود مپ</p>
                            <p className="text-sm font-light">تعداد مراحل رود مپ</p>
                        </div>
                        <div className="grid gap-y-2 my-5">
                            <h3 className="font-bold text-xl">اسم رود مپ</h3>
                            <p className="text-[#AEB6C3] font-medium">توضیحات رود مپ</p>
                        </div>
                    </div>
                    <hr className="border-gray-200"/>
                    <div className="p-4">
                        <a href="#" className="group flex justify-start items-center text-[#FF0060] font-semibold hover:text-black gap-x-1">مشاهده رود مپ
                            <svg className="w-3 h-3 rotate-[225deg] text-[#FF0060] group-hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                                <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="glass rounded-md hover:bg-white hover:shadow-sm transition duration-200">
                    <div className="p-4">
                        <div className="grid grid-cols-1 min-[345px]:flex justify-between items-center">
                            <p>لوگوی رود مپ</p>
                            <p className="text-sm font-light">تعداد مراحل رود مپ</p>
                        </div>
                        <div className="grid gap-y-2 my-5">
                            <h3 className="font-bold text-xl">اسم رود مپ</h3>
                            <p className="text-[#AEB6C3] font-medium">توضیحات رود مپ</p>
                        </div>
                    </div>
                    <hr className="border-gray-200"/>
                    <div className="p-4">
                        <a href="#" className="group flex justify-start items-center text-[#FF0060] font-semibold hover:text-black gap-x-1">مشاهده رود مپ
                            <svg className="w-3 h-3 rotate-[225deg] text-[#FF0060] group-hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                                <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="glass rounded-md hover:bg-white hover:shadow-sm transition duration-200">
                    <div className="p-4">
                        <div className="grid grid-cols-1 min-[345px]:flex justify-between items-center">
                            <p>لوگوی رود مپ</p>
                            <p className="text-sm font-light">تعداد مراحل رود مپ</p>
                        </div>
                        <div className="grid gap-y-2 my-5">
                            <h3 className="font-bold text-xl">اسم رود مپ</h3>
                            <p className="text-[#AEB6C3] font-medium">توضیحات رود مپ</p>
                        </div>
                    </div>
                    <hr className="border-gray-200"/>
                    <div className="p-4">
                        <a href="#" className="group flex justify-start items-center text-[#FF0060] font-semibold hover:text-black gap-x-1">مشاهده رود مپ
                            <svg className="w-3 h-3 rotate-[225deg] text-[#FF0060] group-hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                                <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="glass rounded-md hover:bg-white hover:shadow-sm transition duration-200">
                    <div className="p-4">
                        <div className="grid grid-cols-1 min-[345px]:flex justify-between items-center">
                            <p>لوگوی رود مپ</p>
                            <p className="text-sm font-light">تعداد مراحل رود مپ</p>
                        </div>
                        <div className="grid gap-y-2 my-5">
                            <h3 className="font-bold text-xl">اسم رود مپ</h3>
                            <p className="text-[#AEB6C3] font-medium">توضیحات رود مپ</p>
                        </div>
                    </div>
                    <hr className="border-gray-200"/>
                    <div className="p-4">
                        <a href="#" className="group flex justify-start items-center text-[#FF0060] font-semibold hover:text-black gap-x-1">مشاهده رود مپ
                            <svg className="w-3 h-3 rotate-[225deg] text-[#FF0060] group-hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                                <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="glass rounded-md hover:bg-white hover:shadow-sm transition duration-200">
                    <div className="p-4">
                        <div className="grid grid-cols-1 min-[345px]:flex justify-between items-center">
                            <p>لوگوی رود مپ</p>
                            <p className="text-sm font-light">تعداد مراحل رود مپ</p>
                        </div>
                        <div className="grid gap-y-2 my-5">
                            <h3 className="font-bold text-xl">اسم رود مپ</h3>
                            <p className="text-[#AEB6C3] font-medium">توضیحات رود مپ</p>
                        </div>
                    </div>
                    <hr className="border-gray-200"/>
                    <div className="p-4">
                        <a href="#" className="group flex justify-start items-center text-[#FF0060] font-semibold hover:text-black gap-x-1">مشاهده رود مپ
                            <svg className="w-3 h-3 rotate-[225deg] text-[#FF0060] group-hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                                <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="glass rounded-md hover:bg-white hover:shadow-sm transition duration-200">
                    <div className="p-4">
                        <div className="grid grid-cols-1 min-[345px]:flex justify-between items-center">
                            <p>لوگوی رود مپ</p>
                            <p className="text-sm font-light">تعداد مراحل رود مپ</p>
                        </div>
                        <div className="grid gap-y-2 my-5">
                            <h3 className="font-bold text-xl">اسم رود مپ</h3>
                            <p className="text-[#AEB6C3] font-medium">توضیحات رود مپ</p>
                        </div>
                    </div>
                    <hr className="border-gray-200"/>
                    <div className="p-4">
                        <a href="#" className="group flex justify-start items-center text-[#FF0060] font-semibold hover:text-black gap-x-1">مشاهده رود مپ
                            <svg className="w-3 h-3 rotate-[225deg] text-[#FF0060] group-hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                                <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="glass rounded-md hover:bg-white hover:shadow-sm transition duration-200">
                    <div className="p-4">
                        <div className="grid grid-cols-1 min-[345px]:flex justify-between items-center">
                            <p>لوگوی رود مپ</p>
                            <p className="text-sm font-light">تعداد مراحل رود مپ</p>
                        </div>
                        <div className="grid gap-y-2 my-5">
                            <h3 className="font-bold text-xl">اسم رود مپ</h3>
                            <p className="text-[#AEB6C3] font-medium">توضیحات رود مپ</p>
                        </div>
                    </div>
                    <hr className="border-gray-200"/>
                    <div className="p-4">
                        <a href="#" className="group flex justify-start items-center text-[#FF0060] font-semibold hover:text-black gap-x-1">مشاهده رود مپ
                            <svg className="w-3 h-3 rotate-[225deg] text-[#FF0060] group-hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                                <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}