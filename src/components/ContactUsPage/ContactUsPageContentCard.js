import Image from "next/image"
import Map from "@/assets/images/map.png"
import Map2 from "@/assets/images/map2.png"

export default function ContactUsPageContentCard() {
    return (
        <div className="container mx-auto max-w-[1288px] p-10 mt-10">
            <div className="bg-white p-10 rounded-3xl">
                <h5 className="font-bold text-lg text-[#FF0060]">شماره تماس دفتر</h5>
                <p className="text-gray-800 text-lg font-light mb-10">02111111</p>
                <h5 className="font-bold text-lg text-[#FF0060]">آدرس دفتر وبیکسل</h5>
                <p className="text-gray-800 text-lg font-light">تهران، خیابان فلان، کوچه بهمان، پ 1، طبقه اول</p>
            </div>
            <div className="xl:relative mt-20 xl:mt-64">
                <Image src={Map2} className="hidden xl:block w-full h-full rounded-3xl"/>
                <div className="xl:absolute bg-white text-center lg:w-[550px] rounded-3xl py-5 px-5 sm:px-10 mx-auto xl:bottom-7 xl:right-10"> 
                    <svg className="w-20 h-20 order-first mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 400 400">
                        <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".9" stroke-width="16" d="M145.55 170.041c28.72-44.663 99.334-44.295 108.237-1.094"/>
                        <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".9" stroke-width="16" d="M148.587 179.856c-8.572 11.233-43.859 21.68-53.613 3.272-42.633-80.449 128.7-95.627 192.197-54.541 56.86 36.791 3.376 90.907-34.393 50.179"/>
                        <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".9" stroke-width="16" d="M105.087 273.668c31.208-76.487 97.333-116.983 154.77-44.723 8.392 10.554 21.348 27.569 19.22 43.633-2.793 21.077-153.769 30.524-167.92 7.635"/>
                        <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".9" stroke-width="16" d="M179.946 200.582c10.626-7.975 31.255-11.526 43.497-3.273 8.811 5.939 16.441 22.903 15.176 33.815-9.311 80.307-132.72-15.217-51.592-37.088"/>
                        <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".9" stroke-width="16" d="M175.903 149.313c8.118 14.146 8.877 39.164 7.081 46.907M216.359 146.502c-8.753 17.521-7.86 37.61-7.86 56.891" opacity=".492"/>
                    </svg>
                    <h3 className="flex justify-center items-center text-lg md:text-3xl font-bold">فرم تماس با ما</h3>
                    <p className="text-lg md:text-base font-light text-gray-400">در کنار روش‌های که در برای ارتباط با راکت در نظر گرفته‌ایم،شما همچنین می‌توانید از طریق فرم زیر پیام خود را برای ما ارسال کنید.</p>
                    <form className="grid grid-cols-1 place-items-center gap-y-8 mt-5">
                        <input className="bg-[#F4F5F7] w-full p-3 rounded-md focus-within:outline-[#FF0060] focus-within:font-bold" type="name" placeholder="نام خود را وارد کنید" />
                        <input className="bg-[#F4F5F7] w-full p-3 rounded-md focus-within:outline-[#FF0060] focus-within:font-bold" type="email" placeholder="ایمیل خود را وارد کنید" />
                        <textarea className="bg-[#F4F5F7] w-full p-3 rounded-md focus-within:outline-[#FF0060] focus-within:font-bold resize-none" rows="5" cols="7" placeholder="پیام خود را وارد کنید" />
                        <button className="bg-[#FF0060] text-white hover:bg-[#FFE3E7] hover:text-[#FF0060] duration-200 rounded-md px-7 py-2">ارسال پیام</button>                    
                    </form>
                </div>    
            </div>
        </div>
    )
}