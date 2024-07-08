'use client'
import StickyBox from "react-sticky-box";

import Content from "@/components/ArticlePage/Content";
import StickySideBar from "@/components/ArticlePage/StickySideBar";





export default function ArticlePage() {
    return (
        <div className="container mx-auto max-w-[1288px] p-8">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-5 gap-y-5">
                <div className=" xl:col-span-9">
                    <Content />
                </div>
                <div className="xl:col-span-3">
                    <StickyBox offsetTop={20} offsetBottom={20}>
                        <StickySideBar />
                    </StickyBox>
                </div>
            </div>
        </div>
    )
}