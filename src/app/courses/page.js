import Courses from "@/components/CoursesPage/Courses";
import CoursesSideBar from "@/components/CoursesPage/CoursesSideBar";




export default function CoursesPage() {
    return (
        <div className="container mx-auto max-w-[1288px] p-8">
            <div className="grid grid-cols-12 md:gap-x-5 mt-10 md:mt-20">
                <div className="col-span-3">
                    <CoursesSideBar />
                </div>
                <div className="col-span-12 md:col-span-9">
                    <Courses />
                </div>
            </div>
        </div>
    )
}