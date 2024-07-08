import Link from "next/link";




export default function UPSideBar() {
    return (
        <div className="hidden xl:block min-h-screen h-full w-64 bg-white p-8 rounded-t-xl dark:bg-[#0E2338]">
            <ul className="space-y-10 mt-4">
                <Link href='/user-panel' className="text-slate-700 hover:text-[#FF0060] duration-200 flex items-center gap-x-2 dark:text-[#EEEEEE]">صفحه اصلی پنل
                    <svg className="w-6 h-6 -order-last" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212C22 19.576 22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2c-1.108 0-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823Zm6.927 7.575a.75.75 0 1 0-.894 1.204A5.766 5.766 0 0 0 12 17.75a5.766 5.766 0 0 0 3.447-1.148.75.75 0 1 0-.894-1.204A4.267 4.267 0 0 1 12 16.25a4.267 4.267 0 0 1-2.553-.852Z" clip-rule="evenodd"/>
                    </svg>
                </Link>
                <Link href='/user-panel/courses' className="text-slate-700 hover:text-[#FF0060] duration-200 flex items-center gap-x-2 dark:text-[#EEEEEE]">دوره ها
                    <svg className="w-6 h-6 -order-last" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M10.096 2.004c-3.474.027-5.38.208-6.632 1.46-.857.858-1.213 2.022-1.36 3.786H6.6l3.497-5.246ZM2.026 8.75C2 9.689 2 10.763 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.237 0-2.311-.026-3.25H2.026ZM21.896 7.25c-.147-1.764-.503-2.928-1.36-3.786-.598-.597-1.344-.95-2.337-1.16L14.9 7.25h6.995ZM16.54 2.088C15.33 2 13.845 2 12 2h-.099l-3.5 5.25H13.1l3.441-5.162Z"/>
                    </svg>
                </Link>
                <Link href='/user-panel/notifications' className="text-slate-700 hover:text-[#FF0060] duration-200 flex items-center gap-x-2 dark:text-[#EEEEEE]">اعلانات
                    <svg className="w-6 h-6 -order-last" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h.258c-.405.567-.578 1.205-.662 1.831-.096.714-.096 1.595-.096 2.577v.184c0 .982 0 1.863.096 2.577.104.779.348 1.578 1.002 2.233.655.654 1.454.898 2.233 1.002.714.096 1.595.096 2.577.096h.184c.982 0 1.863 0 2.577-.096.626-.084 1.264-.257 1.831-.662V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Zm-5.75-8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>
                        <path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659C13 9.682 13 8.621 13 6.5c0-2.121 0-3.182.659-3.841C14.318 2 15.379 2 17.5 2c2.121 0 3.182 0 3.841.659C22 3.318 22 4.379 22 6.5c0 2.121 0 3.182-.659 3.841-.659.659-1.72.659-3.841.659Zm-2.53-7.03a.75.75 0 0 1 1.06 0l1.47 1.47 1.47-1.47a.75.75 0 1 1 1.06 1.06L18.56 6.5l1.47 1.47a.75.75 0 0 1-1.06 1.06L17.5 7.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/>
                    </svg>
                </Link>
                <Link href='/' className="text-slate-700 hover:text-[#FF0060] duration-200 flex items-center gap-x-2 dark:text-[#EEEEEE]">خروج
                    <svg className="w-6 h-6 -order-last" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M9.707 2.409C9 3.036 9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067.707.627 1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689-.712-.878-1.91-1.087-4.304-1.504l-2.328-.407c-2.162-.377-3.243-.565-3.95.062ZM12 10.169c.414 0 .75.351.75.784v2.094c0 .433-.336.784-.75.784s-.75-.351-.75-.784v-2.094c0-.433.336-.784.75-.784Z" clip-rule="evenodd"/>
                        <path fill="currentColor" d="M7.547 4.5c-2.058.003-3.131.048-3.815.732C3 5.964 3 7.142 3 9.5v5c0 2.357 0 3.535.732 4.268.684.683 1.757.729 3.815.732-.047-.624-.047-1.344-.047-2.123V6.623c0-.78 0-1.5.047-2.123Z"/>
                    </svg>
                </Link>
            </ul>
        </div>
    )
}