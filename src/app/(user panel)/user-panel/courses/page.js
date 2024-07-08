import UPCCoursesTabs from "@/components/UserPanelCoursesPage/UPCCoursesTabs";
import UPCLandingCards from "@/components/UserPanelCoursesPage/UPCLandingCards";




export default function UserPanelCoursesPage() {
    return (
        <div className="p-8 px-12">
            <UPCLandingCards />
            <UPCCoursesTabs />
        </div>
    )
}