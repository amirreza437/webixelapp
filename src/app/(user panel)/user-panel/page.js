import UPCoursesSwiper from "@/components/UserPanelPage/UPCoursesSwiper";
import UPLandingCards from "@/components/UserPanelPage/UPLandingCards";




export default function UserPanelPage() {
    return (
        <div className="p-8">
            <UPLandingCards />
            <UPCoursesSwiper />
        </div>
    )
}