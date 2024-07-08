import Articles from "@/components/ArticlesPage/Articles";
import SideBar from "@/components/ArticlesPage/SideBar";




export default function ArticlesPage() {
    return (
        <div className="container mx-auto max-w-[1288px] p-8">
            <div className="grid grid-cols-12 md:gap-x-5 mt-10 md:mt-20">
                <div className="col-span-3">
                    <SideBar />
                </div>
                <div className="col-span-12 md:col-span-9">
                    <Articles />
                </div>
            </div>
        </div>
    )
}