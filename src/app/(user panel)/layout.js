import UPSideBar from "@/components/UserPanelPage/UPSideBar";
import "../globals.css";
import UPMainHeader from "@/components/UserPanelPage/UPMainHeader";



export default function abbas({children}) {
    return (
        <html lang="fa" dir="rtl">
            <body className="font-iranYekan min-h-screen dark:bg-[#162F48]">
                <UPMainHeader />
                <div className="xl:grid xl:grid-cols-12 mt-2">
                    <div className="col-span-2">
                        <UPSideBar />
                    </div>
                    <div className="col-span-10">
                    {children}
                    </div>   
                </div>
            </body>
        </html>
    )
}