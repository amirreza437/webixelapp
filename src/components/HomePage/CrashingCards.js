

export default function CrashingCards() {
    return (
        <div className="container mx-auto max-w-[1288px] p-10 mt-10 grid gap-y-4 my-10">
            <div className="bg-[#ECEEF0] flex justify-center md:justify-between items-center rounded-t-3xl md:px-10 py-3 md:py-12">
                <div className="grid gap-y-2 md:w-1/2 px-3 py-5 md:p-0">
                    <h2 className="font-black text-xl sm:text-2xl">آموزش برنامه نویسی با وبیکسل</h2>
                    <p className="font-light text-lg leading-8">خودمونیم، برنامه نویسی یکی از پردرآمد ترین شغل های مربوط به حوزه نت هست. اما قطعا "برنامه نویس" شدن به همین راحتیا که میگن نیست! این مسیر طولانی و سخته و هر کسی که میخواد شروع کنه نیاز به راهنما داره. وبیسکل راهنمای شماست!</p>
                </div>
                <div className="hidden md:grid md:grid-cols-3 items-center text-center gap-y-2 w-1/2">
                    <p className="bg-[#FF0060] text-white rounded-full p-5 hover:bg-white hover:text-[#FF0060] hover:scale-105 duration-500">آموزش</p>
                    <p className="bg-[#32527C] col-span-2 text-white rounded-full p-5 hover:bg-white hover:text-[#32527C] hover:scale-105 duration-500">تمرین</p>
                    <p className="bg-[#32527C] col-span-2 text-white rounded-full p-5 hover:bg-white hover:text-[#32527C] hover:scale-105 duration-500">تکرار</p>
                    <p className="bg-[#FF0060] text-white rounded-full p-5 hover:bg-white hover:text-[#FF0060] hover:scale-105 duration-500">رزومه سازی</p>
                </div>
            </div>
            <div className="bg-[#ECEEF0] flex justify-center md:justify-between gap-x-12 items-center rounded-b-3xl md:px-10 py-3 md:py-12">
                <div className="grid gap-y-2 md:w-1/2 px-3 py-5 md:p-0 order-last">
                    <h2 className="font-black text-xl sm:text-2xl">آموزش گرافیک با وبیکسل</h2>
                    <p className="font-light text-lg leading-8">طراحان سایت، یوتیوبر ها، استارتاپ ها، شرکت ها و انواع و اقسام شغل ها و مراکز مختلف تو قرن بیست و یک، همشون دنبال دیزاینر یا گرافیست هستن. نقشه راه وبیسکل، رفیق شما در مسیر دیزاینر شدن هست!</p>
                </div>
                <div className="hidden md:grid md:grid-cols-3 items-center text-center gap-y-2 w-1/2">
                    <p className="bg-[#FF0060] text-white rounded-full p-5 hover:bg-white hover:text-[#FF0060] hover:scale-105 duration-500">آموزش</p>
                    <p className="bg-[#32527C] col-span-2 text-white rounded-full p-5 hover:bg-white hover:text-[#32527C] hover:scale-105 duration-500">خلاقیت</p>
                    <p className="bg-[#32527C] col-span-2 text-white rounded-full p-5 hover:bg-white hover:text-[#32527C] hover:scale-105 duration-500">دقت</p>
                    <p className="bg-[#FF0060] text-white rounded-full p-5 hover:bg-white hover:text-[#FF0060] hover:scale-105 duration-500">رزومه سازی</p>
                </div>
            </div>
        </div>
    )
}