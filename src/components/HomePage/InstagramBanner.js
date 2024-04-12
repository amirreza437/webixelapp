import Image from "next/image"
import instagramLogo from '@/assets/images/instagram.png'


export default function InstagramBanner() {
    return (
        <div className="container mx-auto max-w-[1288px] p-10 mt-10">
            <div className="grid grid-cols-1 place-items-center gap-y-3 p-2 lg:p-0 md:flex justify-between items-center bg-gradient-to-r from-[#6228d7] via-[#ee2a7b] to-[#f9ce34] rounded-3xl">
                <Image src={instagramLogo} className="w-32 h-32" />
                <p className="text-white font-black text-lg mb-5 md:mb-0">اگر دنبال محتوای فان و آموزنده هستی پیج اینستای مارو از دست نده!</p>
                <button className="group flex justify-between items-center gap-x-2 bg-white text-[#6228d7] rounded p-2 ml-0 md:ml-5 hover:bg-transparent hover:border-white hover:text-white duration-200">پیج اینستای وبیکسل
                    <svg className="w-3 h-3 rotate-[225deg] text-[#6228d7] group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67 1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962Z"/>
                        <path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066l1.055 1.066Zm-5.55 5.488 5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066Z" opacity=".5"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}