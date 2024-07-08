'use client'



export default function StickySideBar() {
    return (
        <div className="space-y-4">
            <div className="border-2 rounded-xl space-y-5 p-8 dark:bg-[#0E2338] dark:border-[#EEEEEE]/20">
                <p className="font-black text-lg dark:text-[#EEEEEE]">انتخاب سردبیر:</p>
                <div className="bg-white border-b-8 border-b-[#FF0060] rounded-lg grid gap-y-5 divide-x-2 p-4 dark:bg-[#162F48]">
                    <div className="flex flex-row-reverse justify-between items-center font-light text-xs text-[#696b6e]">
                        <p className="dark:text-[#EEEEEE]">زمان مطالعه</p>
                        <p className="dark:text-[#EEEEEE]">اسم نویسنده</p>
                    </div>
                    <a href="#" className="font-black text-base hover:text-[#FF0060] duration-200 order-first">اسم مقاله</a>
                </div>
            </div>
            <div className="border-2 rounded-xl space-y-5 p-4 min-[400px]:p-8 dark:bg-[#0E2338] dark:border-[#EEEEEE]/20">
                <p className="font-black text-lg dark:text-[#EEEEEE]">مقالات اخیر:</p>
                <div className="grid grid-cols-1 sm:max-xl:grid-cols-3 xl:grid-cols-1 xl:space-y-3 gap-x-2">
                    <div className="bg-white border-b-8 border-b-[#FF0060] rounded-lg grid gap-y-5 divide-x-2 p-4 dark:bg-[#162F48]">
                        <div className="flex flex-row-reverse justify-between items-center font-light text-xs text-[#696b6e]">
                            <p className="dark:text-[#EEEEEE]">زمان مطالعه</p>
                            <p className="dark:text-[#EEEEEE]">اسم نویسنده</p>
                        </div>
                        <a href="#" className="font-black text-base hover:text-[#FF0060] duration-200 order-first">اسم مقاله</a>
                    </div>
                    <div className="bg-white border-b-8 border-b-[#FF0060] rounded-lg grid gap-y-5 divide-x-2 p-4 dark:bg-[#162F48]">
                        <div className="flex flex-row-reverse justify-between items-center font-light text-xs text-[#696b6e]">
                            <p className="dark:text-[#EEEEEE]">زمان مطالعه</p>
                            <p className="dark:text-[#EEEEEE]">اسم نویسنده</p>
                        </div>
                        <a href="#" className="font-black text-base hover:text-[#FF0060] duration-200 order-first">اسم مقاله</a>
                    </div>
                    <div className="bg-white border-b-8 border-b-[#FF0060] rounded-lg grid gap-y-5 divide-x-2 p-4 dark:bg-[#162F48]">
                        <div className="flex flex-row-reverse justify-between items-center font-light text-xs text-[#696b6e]">
                            <p className="dark:text-[#EEEEEE]">زمان مطالعه</p>
                            <p className="dark:text-[#EEEEEE]">اسم نویسنده</p>
                        </div>
                        <a href="#" className="font-black text-base hover:text-[#FF0060] duration-200 order-first">اسم مقاله</a>
                    </div>
                </div>
            </div>
        </div>
    )
}