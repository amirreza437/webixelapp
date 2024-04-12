



export default function RoadMapsPageLandingCard() {
    return (
        <div className="grid grid-cols-1 place-items-center gap-y-5">
            <h1 className="font-black text-xl min-[390px]:text-3xl md:text-4xl lg:text-5xl leading-relaxed md:leading-normal">نقشه های راه وبیکسل</h1>
            <p className="font-light text-lg hidden min-[390px]:block">رود مپ، مسیر حرفه ای شدن در هر حرفه</p>
            <button className="bg-[#FF0060] text-white rounded p-2 grid grid-cols-1 place-items-center sm:flex items-center gap-y-2 sm:gap-x-2 hover:bg-[#393646] duration-300">رود مپ چیه؟
                <svg className="hidden sm:block w-4 h-4 rotate-[225deg]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="white" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                    <path fill="white" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                </svg>
            </button>
        </div>
    )
}