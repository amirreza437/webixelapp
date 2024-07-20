import CoursePageComments from "@/components/CoursePage/CoursePageComments";
import CoursePageContent from "@/components/CoursePage/CoursePageContent";
import CoursePageSideBar from "@/components/CoursePage/CoursePageSidebar";




export default function CoursePage() {
    return (
        <div className="container mx-auto max-w-[1288px] p-8">
            <CoursePageContent />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-9">
                    <CoursePageComments />
                </div>
                <div className="lg:col-span-3">
                    <CoursePageSideBar />
                </div>
            </div>
        </div>
    )
}