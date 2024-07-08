



export default function LandingCard() {

    
    return (
        <div className="container mx-auto max-w-[1288px] p-10 rounded-[100px] mt-10 text-center">
            <div className="grid grid-cols-1 gap-y-6">
                <div className="flex justify-center">
                    <h1 className="font-black text-[#393646] text-2xl md:text-3xl lg:max-[1075px]:text-4xl lg:max-[1304px]:text-5xl xl:text-6xl md:leading-relaxed dark:text-[#EEEEEE]">
                        <span className="text-[#FF0060] order-last">وبیکسل،</span>
                         مجله آموزشی برنامه نویسی و گرافیک
                    </h1>
                </div>
                <p className="text-xl text-[#393646] hidden lg:block dark:text-[#EEEEEE]">ماهی رو هر وقت از آب بگیری تازست !</p>
                <div className="flex justify-center">
                    <button className="bg-[#FF0060] text-white rounded p-4 grid grid-cols-1 place-items-center sm:flex items-center gap-y-2 sm:gap-x-2 hover:bg-[#393646] duration-300 dark:hover:bg-[#0079FF]">چجوری شروع کنم؟
                        <svg className="hidden sm:block w-4 h-4 rotate-[225deg]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="white" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                            <path fill="white" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}