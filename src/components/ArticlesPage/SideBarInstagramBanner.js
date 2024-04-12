import Image from "next/image"
import instagramLogo from '@/assets/images/instagram.png'




export default function SideBarInstagramBanner() {
    return (
        <div className="bg-gradient-to-r from-[#6228d7] via-[#ee2a7b] to-[#f9ce34] rounded-md flex justify-center items-center">
            <Image src={instagramLogo} className="w-20 h-20" />
            <a href="#" className="text-white text-sm ml-10 hover:bg-white hover:text-[#6228d7] duration-200 p-1 rounded-md">پیج اینستای وبیکسل</a>
        </div>
    )
}